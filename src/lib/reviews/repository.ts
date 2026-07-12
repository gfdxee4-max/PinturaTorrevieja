import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Locale } from "@/config/i18n";
import { curatedReviews } from "@/lib/reviews/curated-reviews";
import type { NewReview, ReviewRecord, ReviewStatus, StoredReview } from "@/lib/reviews/types";

const localDataDirectory = path.join(process.cwd(), ".data");
const localDataFile = path.join(localDataDirectory, "reviews.json");
let localWriteQueue = Promise.resolve();

export class ReviewStorageNotConfiguredError extends Error {
  constructor() {
    super("Review storage is not configured");
  }
}

function hasSupabaseStorage() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

function canUseLocalStorage() {
  return process.env.VERCEL !== "1";
}

function publicReview(review: StoredReview): ReviewRecord {
  return {
    id: review.id,
    name: review.name,
    rating: review.rating,
    service: review.service,
    text: review.text,
    locale: review.locale,
    status: review.status,
    createdAt: review.createdAt,
    updatedAt: review.updatedAt,
  };
}

async function readLocalReviews(): Promise<StoredReview[]> {
  try {
    return JSON.parse(await readFile(localDataFile, "utf8")) as StoredReview[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

async function writeLocalReviews(reviews: StoredReview[]) {
  await mkdir(localDataDirectory, { recursive: true });
  const temporaryFile = `${localDataFile}.${crypto.randomUUID()}.tmp`;
  await writeFile(temporaryFile, `${JSON.stringify(reviews, null, 2)}\n`, "utf8");
  await rename(temporaryFile, localDataFile);
}

async function mutateLocalReviews<T>(mutation: (reviews: StoredReview[]) => T | Promise<T>): Promise<T> {
  let resolveResult: (value: T) => void;
  let rejectResult: (reason?: unknown) => void;
  const result = new Promise<T>((resolve, reject) => {
    resolveResult = resolve;
    rejectResult = reject;
  });

  localWriteQueue = localWriteQueue.then(async () => {
    try {
      const reviews = await readLocalReviews();
      const value = await mutation(reviews);
      await writeLocalReviews(reviews);
      resolveResult(value);
    } catch (error) {
      rejectResult(error);
    }
  });

  return result;
}

type SupabaseRow = {
  id: string;
  name: string;
  rating: number;
  service: string | null;
  review_text: string;
  locale: Locale;
  status: ReviewStatus;
  ip_hash: string;
  created_at: string;
  updated_at: string;
};

function fromSupabase(row: SupabaseRow): StoredReview {
  return {
    id: row.id,
    name: row.name,
    rating: row.rating,
    service: row.service ?? "",
    text: row.review_text,
    locale: row.locale,
    status: row.status,
    ipHash: row.ip_hash,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

async function supabaseRequest<T>(query: string, init?: RequestInit): Promise<T> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new ReviewStorageNotConfiguredError();

  const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/reviews${query}`, {
    ...init,
    cache: "no-store",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) throw new Error(`Review storage request failed with ${response.status}`);
  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}

export async function listApprovedReviews(locale: Locale): Promise<ReviewRecord[]> {
  const curated = curatedReviews.filter((review) => review.locale === locale);
  let stored: ReviewRecord[] = [];

  if (hasSupabaseStorage()) {
    const rows = await supabaseRequest<SupabaseRow[]>(`?select=*&status=eq.approved&locale=eq.${locale}&order=created_at.desc`);
    stored = rows.map(fromSupabase).map(publicReview);
  } else if (canUseLocalStorage()) {
    stored = (await readLocalReviews()).filter((review) => review.status === "approved" && review.locale === locale).map(publicReview);
  }

  const reviews = new Map([...stored, ...curated].map((review) => [review.id, review]));
  return [...reviews.values()].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function listReviewsForModeration(): Promise<ReviewRecord[]> {
  if (hasSupabaseStorage()) {
    const rows = await supabaseRequest<SupabaseRow[]>("?select=*&order=created_at.desc");
    return rows.map(fromSupabase).map(publicReview);
  }
  if (canUseLocalStorage()) return (await readLocalReviews()).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map(publicReview);
  throw new ReviewStorageNotConfiguredError();
}

export async function countRecentReviews(ipHash: string, since: string): Promise<number> {
  if (hasSupabaseStorage()) {
    const rows = await supabaseRequest<Array<{ id: string }>>(`?select=id&ip_hash=eq.${encodeURIComponent(ipHash)}&created_at=gte.${encodeURIComponent(since)}`);
    return rows.length;
  }
  if (canUseLocalStorage()) return (await readLocalReviews()).filter((review) => review.ipHash === ipHash && review.createdAt >= since).length;
  throw new ReviewStorageNotConfiguredError();
}

export async function createPendingReview(review: NewReview, ipHash: string): Promise<ReviewRecord> {
  const now = new Date().toISOString();
  const stored: StoredReview = { ...review, id: crypto.randomUUID(), status: "pending", ipHash, createdAt: now, updatedAt: now };

  if (hasSupabaseStorage()) {
    const rows = await supabaseRequest<SupabaseRow[]>("?select=*", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({ id: stored.id, name: stored.name, rating: stored.rating, service: stored.service || null, review_text: stored.text, locale: stored.locale, status: stored.status, ip_hash: stored.ipHash, created_at: stored.createdAt, updated_at: stored.updatedAt }),
    });
    return publicReview(fromSupabase(rows[0]));
  }
  if (canUseLocalStorage()) return mutateLocalReviews((reviews) => { reviews.push(stored); return publicReview(stored); });
  throw new ReviewStorageNotConfiguredError();
}

export async function setReviewStatus(id: string, status: ReviewStatus) {
  const updatedAt = new Date().toISOString();
  if (hasSupabaseStorage()) {
    await supabaseRequest(`?id=eq.${encodeURIComponent(id)}`, { method: "PATCH", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ status, updated_at: updatedAt }) });
    return;
  }
  if (canUseLocalStorage()) {
    await mutateLocalReviews((reviews) => {
      const review = reviews.find((item) => item.id === id);
      if (review) { review.status = status; review.updatedAt = updatedAt; }
    });
    return;
  }
  throw new ReviewStorageNotConfiguredError();
}

export async function deleteReview(id: string) {
  if (hasSupabaseStorage()) {
    await supabaseRequest(`?id=eq.${encodeURIComponent(id)}`, { method: "DELETE", headers: { Prefer: "return=minimal" } });
    return;
  }
  if (canUseLocalStorage()) {
    await mutateLocalReviews((reviews) => {
      const index = reviews.findIndex((item) => item.id === id);
      if (index >= 0) reviews.splice(index, 1);
    });
    return;
  }
  throw new ReviewStorageNotConfiguredError();
}
