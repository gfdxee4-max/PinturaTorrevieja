import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Locale } from "@/config/i18n";
import { curatedReviews } from "@/lib/reviews/curated-reviews";
import type { NewReview, ReviewRecord, ReviewStatus, StoredReview } from "@/lib/reviews/types";

const localDataDirectory = path.join(process.cwd(), ".data");
const localDataFile = path.join(localDataDirectory, "reviews.json");
let localWriteQueue = Promise.resolve();

type ReviewStorageSource = "configuration" | "local" | "supabase";

export class ReviewStorageError extends Error {
  constructor(
    message: string,
    public readonly source: ReviewStorageSource,
    public readonly operation: string,
    public readonly code: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "ReviewStorageError";
  }
}

export class ReviewStorageNotConfiguredError extends ReviewStorageError {
  constructor(missing = ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"]) {
    super(`Missing review storage configuration: ${missing.join(", ")}`, "configuration", "configure", "STORAGE_NOT_CONFIGURED", 503);
    this.name = "ReviewStorageNotConfiguredError";
  }
}

function hasSupabaseStorage() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

function canUseLocalStorage() {
  return process.env.VERCEL !== "1" && (process.env.NODE_ENV === "development" || process.env.REVIEWS_STORAGE === "local");
}

function missingSupabaseConfiguration() {
  return ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"].filter((name) => !process.env[name]);
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
    throw new ReviewStorageError("Local review storage could not be read", "local", "read", (error as NodeJS.ErrnoException).code || "LOCAL_READ_ERROR", 500);
  }
}

async function writeLocalReviews(reviews: StoredReview[]) {
  try {
    await mkdir(localDataDirectory, { recursive: true });
    const temporaryFile = `${localDataFile}.${crypto.randomUUID()}.tmp`;
    await writeFile(temporaryFile, `${JSON.stringify(reviews, null, 2)}\n`, "utf8");
    await rename(temporaryFile, localDataFile);
  } catch (error) {
    throw new ReviewStorageError("Local review storage could not be written", "local", "write", (error as NodeJS.ErrnoException).code || "LOCAL_WRITE_ERROR", 500);
  }
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

type NextFetchInit = RequestInit & {
  next?: {
    revalidate?: number;
  };
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

async function supabaseRequest<T>(query: string, operation: string, init?: NextFetchInit): Promise<T> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new ReviewStorageNotConfiguredError(missingSupabaseConfiguration());

  let response: Response;
  try {
    response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/reviews${query}`, {
      ...init,
      cache: init?.cache ?? "no-store",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  } catch {
    throw new ReviewStorageError("Supabase request failed", "supabase", operation, "NETWORK_ERROR", 503);
  }

  if (!response.ok) {
    let code = `HTTP_${response.status}`;
    let message = "Supabase rejected the review storage request";
    try {
      const details = await response.json() as { code?: string; message?: string };
      if (details.code) code = details.code.slice(0, 80);
      if (details.message) message = details.message.slice(0, 240);
    } catch {
      // Keep the safe generic message when the upstream response is not JSON.
    }
    throw new ReviewStorageError(message, "supabase", operation, code, response.status);
  }
  if (response.status === 204) return undefined as T;
  try {
    return (await response.json()) as T;
  } catch {
    throw new ReviewStorageError("Supabase returned an invalid JSON response", "supabase", operation, "INVALID_RESPONSE", response.status);
  }
}

export async function listApprovedReviews(locale: Locale): Promise<ReviewRecord[]> {
  const curated = curatedReviews.filter((review) => review.locale === locale);
  let stored: ReviewRecord[] = [];

  if (hasSupabaseStorage()) {
    try {
      const rows = await supabaseRequest<SupabaseRow[]>(`?select=*&status=eq.approved&locale=eq.${locale}&order=created_at.desc`, "list-approved", {
        cache: "force-cache",
        next: { revalidate: 300 },
      });
      stored = rows.map(fromSupabase).map(publicReview);
    } catch (error) {
      if (!(error instanceof ReviewStorageError)) throw error;
      console.error("[reviews] approved reviews unavailable", {
        source: error.source,
        operation: error.operation,
        code: error.code,
        status: error.status,
      });
    }
  } else if (canUseLocalStorage()) {
    stored = (await readLocalReviews()).filter((review) => review.status === "approved" && review.locale === locale).map(publicReview);
  }

  const reviews = new Map([...stored, ...curated].map((review) => [review.id, review]));
  return [...reviews.values()].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function listReviewsForModeration(): Promise<ReviewRecord[]> {
  if (hasSupabaseStorage()) {
    const rows = await supabaseRequest<SupabaseRow[]>("?select=*&order=created_at.desc", "list-moderation");
    return rows.map(fromSupabase).map(publicReview);
  }
  if (canUseLocalStorage()) return (await readLocalReviews()).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map(publicReview);
  throw new ReviewStorageNotConfiguredError();
}

export async function countRecentReviews(ipHash: string, since: string): Promise<number> {
  if (hasSupabaseStorage()) {
    const rows = await supabaseRequest<Array<{ id: string }>>(`?select=id&ip_hash=eq.${encodeURIComponent(ipHash)}&created_at=gte.${encodeURIComponent(since)}`, "rate-limit-check");
    return rows.length;
  }
  if (canUseLocalStorage()) return (await readLocalReviews()).filter((review) => review.ipHash === ipHash && review.createdAt >= since).length;
  throw new ReviewStorageNotConfiguredError();
}

export async function createPendingReview(review: NewReview, ipHash: string): Promise<ReviewRecord> {
  const now = new Date().toISOString();
  const stored: StoredReview = { ...review, id: crypto.randomUUID(), status: "pending", ipHash, createdAt: now, updatedAt: now };

  if (hasSupabaseStorage()) {
    const rows = await supabaseRequest<SupabaseRow[]>("?select=*", "create", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({ id: stored.id, name: stored.name, rating: stored.rating, service: stored.service || null, review_text: stored.text, locale: stored.locale, status: stored.status, ip_hash: stored.ipHash, created_at: stored.createdAt, updated_at: stored.updatedAt }),
    });
    if (!rows[0]) throw new ReviewStorageError("Supabase did not return the created review", "supabase", "create", "EMPTY_RESPONSE", 502);
    return publicReview(fromSupabase(rows[0]));
  }
  if (canUseLocalStorage()) return mutateLocalReviews((reviews) => { reviews.push(stored); return publicReview(stored); });
  throw new ReviewStorageNotConfiguredError();
}

export async function setReviewStatus(id: string, status: ReviewStatus) {
  const updatedAt = new Date().toISOString();
  if (hasSupabaseStorage()) {
    await supabaseRequest(`?id=eq.${encodeURIComponent(id)}`, "update-status", { method: "PATCH", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ status, updated_at: updatedAt }) });
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
    await supabaseRequest(`?id=eq.${encodeURIComponent(id)}`, "delete", { method: "DELETE", headers: { Prefer: "return=minimal" } });
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
