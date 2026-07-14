import { createHash } from "node:crypto";
import { NextResponse, type NextRequest } from "next/server";
import { countRecentReviews, createPendingReview, ReviewStorageError, ReviewStorageNotConfiguredError } from "@/lib/reviews/repository";
import { validateReviewPayload } from "@/lib/reviews/validation";

export const runtime = "nodejs";

const maxReviewBodyBytes = 16 * 1024;

class PayloadTooLargeError extends Error {}

async function readJsonBody(request: NextRequest): Promise<unknown> {
  const contentLength = request.headers.get("content-length");
  if (contentLength) {
    const declaredBytes = Number(contentLength);
    if (Number.isFinite(declaredBytes) && declaredBytes > maxReviewBodyBytes) {
      throw new PayloadTooLargeError();
    }
  }

  if (!request.body) throw new SyntaxError("Missing request body");

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      totalBytes += value.byteLength;
      if (totalBytes > maxReviewBodyBytes) {
        await reader.cancel();
        throw new PayloadTooLargeError();
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(body));
}

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
      payload = await readJsonBody(request);
    } catch (error) {
      if (error instanceof PayloadTooLargeError) {
        return json({ success: false, error: "PAYLOAD_TOO_LARGE" }, 413);
      }
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
