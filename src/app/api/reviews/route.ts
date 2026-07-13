import { createHash } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import { countRecentReviews, createPendingReview, ReviewStorageError, ReviewStorageNotConfiguredError } from "@/lib/reviews/repository";
import { validateReviewPayload } from "@/lib/reviews/validation";

export const runtime = "nodejs";

function requestIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "local";
}

function ipHash(request: NextRequest) {
  const configuredSalt = process.env.REVIEWS_IP_SALT;
  if (!configuredSalt && process.env.NODE_ENV === "production") throw new ReviewStorageNotConfiguredError(["REVIEWS_IP_SALT"]);
  const salt = configuredSalt || "paintlab-local-preview";
  return createHash("sha256").update(`${salt}:${requestIp(request)}`).digest("hex");
}

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function logReviewError(error: unknown) {
  if (error instanceof ReviewStorageError) {
    console.error("[reviews] storage error", {
      source: error.source,
      operation: error.operation,
      code: error.code,
      message: error.message,
      status: error.status,
    });
    return;
  }

  console.error("[reviews] API error", {
    source: "api",
    code: "UNEXPECTED_ERROR",
    message: error instanceof Error ? error.message.slice(0, 240) : "Unknown error",
    status: 500,
  });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) return json({ success: false, error: "FORBIDDEN" }, 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return json({ success: false, error: "INVALID_INPUT" }, 415);

  try {
    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return json({ success: false, error: "INVALID_INPUT" }, 400);
    }

    const result = validateReviewPayload(payload);
    if (!result.ok) return json({ success: false, error: result.error }, 400);
    if (result.honeypot) return json({ success: true, status: "pending" }, 201);

    const hash = ipHash(request);
    const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    if ((await countRecentReviews(hash, since)) >= 3) return json({ success: false, error: "RATE_LIMIT" }, 429);

    await createPendingReview(result.review, hash);
    return json({ success: true, status: "pending" }, 201);
  } catch (error) {
    logReviewError(error);
    if (error instanceof ReviewStorageError) return json({ success: false, error: "STORAGE_UNAVAILABLE" }, 503);
    return json({ success: false, error: "SERVER_ERROR" }, 500);
  }
}
