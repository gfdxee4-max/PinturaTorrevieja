import { isLocale } from "@/config/i18n";
import type { NewReview } from "@/lib/reviews/types";

const markupPattern = /<[^>]*>|javascript\s*:|data\s*:\s*text\/html|on\w+\s*=/i;

function cleanSingleLine(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanMultiline(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\r\n?/g, "\n").replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim().slice(0, maxLength);
}

export type ReviewValidationResult =
  | { ok: true; review: NewReview; honeypot: string }
  | { ok: false; error: "INVALID_INPUT" | "HTML_NOT_ALLOWED" };

export function validateReviewPayload(payload: unknown): ReviewValidationResult {
  if (!payload || typeof payload !== "object") return { ok: false, error: "INVALID_INPUT" };

  const data = payload as Record<string, unknown>;
  const name = cleanSingleLine(data.name, 80);
  const service = cleanSingleLine(data.service, 120);
  const text = cleanMultiline(data.text, 1000);
  const locale = typeof data.locale === "string" && isLocale(data.locale) ? data.locale : null;
  const rating = typeof data.rating === "number" ? data.rating : Number(data.rating);
  const honeypot = cleanSingleLine(data.website, 200);

  if (!name || name.length < 2 || !text || text.length < 10 || !locale || !Number.isInteger(rating) || rating < 1 || rating > 5 || data.consent !== true) {
    return { ok: false, error: "INVALID_INPUT" };
  }

  if (markupPattern.test(name) || markupPattern.test(service) || markupPattern.test(text)) {
    return { ok: false, error: "HTML_NOT_ALLOWED" };
  }

  return { ok: true, review: { name, service, text, locale, rating }, honeypot };
}
