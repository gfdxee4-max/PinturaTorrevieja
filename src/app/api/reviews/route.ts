import { createHash } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import { countRecentReviews, createPendingReview, ReviewStorageNotConfiguredError } from "@/lib/reviews/repository";
import { validateReviewPayload } from "@/lib/reviews/validation";

export const runtime = "nodejs";

function requestIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "local";
}

function ipHash(request: NextRequest) {
  const salt = process.env.REVIEWS_IP_SALT || process.env.SUPABASE_SERVICE_ROLE_KEY || "paintlab-local-preview";
  return createHash("sha256").update(`${salt}:${requestIp(request)}`).digest("hex");
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) return NextResponse.json({ ok: false, error: "FORBIDDEN" }, { status: 403 });
  if (!request.headers.get("content-type")?.includes("application/json")) return NextResponse.json({ ok: false, error: "INVALID_INPUT" }, { status: 415 });

  try {
    const result = validateReviewPayload(await request.json());
    if (!result.ok) return NextResponse.json({ ok: false, error: result.error }, { status: 400 });
    if (result.honeypot) return NextResponse.json({ ok: true });

    const hash = ipHash(request);
    const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    if ((await countRecentReviews(hash, since)) >= 3) return NextResponse.json({ ok: false, error: "RATE_LIMIT" }, { status: 429 });

    await createPendingReview(result.review, hash);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    if (error instanceof ReviewStorageNotConfiguredError) return NextResponse.json({ ok: false, error: "STORAGE_UNAVAILABLE" }, { status: 503 });
    return NextResponse.json({ ok: false, error: "SERVER_ERROR" }, { status: 500 });
  }
}
