"use client";

import { useMemo, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CarFront, Check, LockKeyhole, PenLine, ShieldCheck, Star, UserRound } from "lucide-react";
import type { Locale } from "@/config/i18n";
import type { ReviewCopy } from "@/config/review-i18n";
import { interfaceTranslations } from "@/config/interface-i18n";
import type { ReviewRecord } from "@/lib/reviews/types";

type ReviewsClientProps = { copy: ReviewCopy; initialReviews: ReviewRecord[]; locale: Locale };
type SubmissionState = "idle" | "sending" | "success" | "error";

function errorMessage(copy: ReviewCopy, code?: string) {
  if (code === "INVALID_INPUT") return copy.errors.invalid;
  if (code === "HTML_NOT_ALLOWED") return copy.errors.html;
  if (code === "RATE_LIMIT") return copy.errors.rate;
  if (code === "STORAGE_UNAVAILABLE") return copy.errors.storage;
  return copy.errors.server;
}

export function ReviewsClient({ copy, initialReviews, locale }: ReviewsClientProps) {
  const ui = interfaceTranslations[locale];
  const [expanded, setExpanded] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewLength, setReviewLength] = useState(0);
  const [submission, setSubmission] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");
  const visibleReviews = useMemo(() => expanded ? initialReviews : initialReviews.slice(0, 3), [expanded, initialReviews]);
  const averageRating = useMemo(() => {
    const approvedReviews = initialReviews.filter((review) => review.status === "approved");
    if (!approvedReviews.length) return null;
    return approvedReviews.reduce((total, review) => total + review.rating, 0) / approvedReviews.length;
  }, [initialReviews]);
  const formattedRating = averageRating === null ? "" : new Intl.NumberFormat(ui.dateLocale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(averageRating);

  async function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmission("sending");
    setMessage("");

    try {
      const response = await fetch("/api/reviews", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ locale, name: data.get("name"), rating, service: data.get("service"), text: data.get("review"), consent: data.get("consent") === "on", website: data.get("website") }) });
      const result = await response.json() as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error || "SERVER_ERROR");
      form.reset();
      setRating(0);
      setReviewLength(0);
      setSubmission("success");
      setMessage(copy.success);
    } catch (error) {
      setSubmission("error");
      setMessage(errorMessage(copy, error instanceof Error ? error.message : undefined));
    }
  }

  return (
    <section id="reviews" className="scroll-mt-24 border-b border-white/[0.08] bg-[#030303]">
      <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="silver-text text-3xl font-semibold uppercase [overflow-wrap:anywhere] sm:text-4xl">{copy.title}</h2>
          <p className="mt-3 text-sm leading-6 text-white/64 sm:text-base">{copy.intro}</p>
        </header>

        {averageRating !== null ? (
          <div className="relative mx-auto mt-6 flex w-fit items-center gap-5 overflow-hidden rounded-[5px] border border-white/20 bg-[#090909]/95 px-6 py-4">
            <span className="absolute inset-y-0 left-0 w-0.5 bg-redline" aria-hidden="true" />
            <div className="flex gap-1" aria-label={`${formattedRating} ${ui.ratingOutOfFive}`}>
              {Array.from({ length: 5 }, (_, index) => {
                const fill = Math.max(0, Math.min(100, (averageRating - index) * 100));
                return (
                  <span key={index} className="relative block size-5" aria-hidden="true">
                    <Star className="absolute inset-0 size-5 text-white/20" strokeWidth={1.5} />
                    <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                      <Star className="size-5 fill-redline text-redline" strokeWidth={1.5} />
                    </span>
                  </span>
                );
              })}
            </div>
            <div className="flex items-baseline gap-2 whitespace-nowrap">
              <strong className="silver-text text-3xl font-semibold leading-none">{formattedRating}</strong>
              <span className="text-xs text-white/52">{ui.ratingOutOfFive}</span>
            </div>
          </div>
        ) : null}

        {visibleReviews.length ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleReviews.map((review) => (
              <article key={review.id} className="flex min-h-[17rem] flex-col rounded-[6px] border border-white/20 bg-[#090909]/95 p-6 transition duration-300 hover:border-white/38">
                <div className="grid grid-cols-[3.5rem_1fr_auto] items-start gap-4">
                  <div className="flex size-14 items-center justify-center rounded-full border border-white/25 text-white/85"><UserRound className="size-8" strokeWidth={1.4} aria-hidden="true" /></div>
                  <div><h3 className="text-lg font-semibold text-white">{review.name}</h3><div className="mt-1 flex gap-1" aria-label={`${review.rating}/5`}>{Array.from({ length: 5 }, (_, index) => <Star key={index} className={`size-5 ${index < review.rating ? "fill-redline text-redline" : "text-white/22"}`} strokeWidth={1.5} aria-hidden="true" />)}</div></div>
                  <time className="pt-1 text-xs text-white/48" dateTime={review.createdAt}>{new Intl.DateTimeFormat(ui.dateLocale).format(new Date(review.createdAt))}</time>
                </div>
                <p className="mt-5 flex-1 whitespace-pre-line text-sm leading-6 text-white/78">{review.text}</p>
                {review.service ? <div className="mt-5 flex items-center gap-3 border-t border-white/[0.08] pt-4"><span className="flex size-9 items-center justify-center rounded-full border border-redline/55 text-redline"><CarFront className="size-5" strokeWidth={1.4} aria-hidden="true" /></span><span className="text-xs text-white/68">{review.service}</span></div> : null}
              </article>
            ))}
          </div>
        ) : <p className="mx-auto mt-10 max-w-xl rounded-[4px] border border-white/15 bg-white/[0.025] px-6 py-5 text-center text-sm text-white/55">{copy.empty}</p>}

        {initialReviews.length > 3 ? <div className="mt-8 text-center"><button type="button" onClick={() => setExpanded((value) => !value)} className="min-h-12 border border-redline bg-black/45 px-9 text-xs font-semibold uppercase tracking-[0.07em] text-white transition hover:bg-redline/10 hover:shadow-red">{expanded ? copy.showLess : copy.showAll}</button></div> : null}
      </div>

      <div className="border-t border-white/[0.1]">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.8fr)] lg:px-12 lg:py-16">
          <div>
            <h2 className="silver-text text-2xl font-semibold uppercase sm:text-3xl">{copy.formTitle}</h2>
            <span className="mt-3 block h-0.5 w-12 bg-redline" />
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65">{copy.formIntro}</p>

            <form id="review-form" className="scroll-mt-28 mt-6 grid gap-3" onSubmit={submitReview} noValidate>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="relative"><UserRound className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-white/55" aria-hidden="true" /><span className="sr-only">{copy.name}</span><input required name="name" maxLength={80} autoComplete="name" placeholder={`${copy.name} *`} className="h-12 w-full rounded-[3px] border border-white/24 bg-black/55 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-redline" /></label>
                <fieldset className="flex min-h-12 items-center gap-1 rounded-[3px] border border-white/24 bg-black/55 px-4"><legend className="sr-only">{copy.rating}</legend>{[1,2,3,4,5].map((value) => <button key={value} type="button" aria-label={`${value}/5`} aria-pressed={value <= rating} onClick={() => setRating(value)} className="p-1 text-redline focus-visible:outline-white"><Star className={`size-5 ${value <= rating ? "fill-current" : "fill-transparent"}`} strokeWidth={1.5} aria-hidden="true" /></button>)}<span className="ml-2 text-sm text-white/45">{copy.rating} *</span><input type="hidden" name="rating" value={rating} required /></fieldset>
              </div>
              <label className="relative"><CarFront className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-white/55" aria-hidden="true" /><span className="sr-only">{copy.service}</span><input name="service" maxLength={120} placeholder={`${copy.service} (${copy.optional})`} className="h-12 w-full rounded-[3px] border border-white/24 bg-black/55 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-redline" /></label>
              <label className="relative"><PenLine className="pointer-events-none absolute left-4 top-4 size-5 text-white/55" aria-hidden="true" /><span className="sr-only">{copy.review}</span><textarea required name="review" maxLength={1000} rows={5} onChange={(event) => setReviewLength(event.target.value.length)} placeholder={`${copy.review} *`} className="min-h-32 w-full resize-y rounded-[3px] border border-white/24 bg-black/55 py-4 pl-12 pr-4 text-sm leading-6 text-white outline-none transition placeholder:text-white/45 focus:border-redline" /><span className="pointer-events-none absolute bottom-3 right-4 text-xs text-white/42">{reviewLength} / 1000</span></label>
              <label className="hidden" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
              <label className="flex items-start gap-3 text-sm leading-5 text-white/62"><input required type="checkbox" name="consent" className="mt-0.5 size-5 shrink-0 accent-[#d60000]" /><span>{copy.consent} <Link className="text-redline underline-offset-4 hover:underline" href={`/${locale}/privacy`}>{copy.privacy}</Link> *</span></label>
              <div><button disabled={submission === "sending"} type="submit" className="min-h-12 min-w-[14rem] border border-redline bg-[linear-gradient(135deg,#d60000,#850000)] px-7 text-xs font-semibold uppercase tracking-[0.07em] text-white transition hover:bg-redline disabled:cursor-wait disabled:opacity-65">{submission === "sending" ? copy.sending : copy.submit}</button></div>
              {message ? <p role="status" className={`text-sm ${submission === "success" ? "text-emerald-400" : "text-red-400"}`}>{message}</p> : null}
              <p className="flex items-center gap-2 text-xs leading-5 text-white/46"><LockKeyhole className="size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />{copy.moderation}</p>
            </form>
          </div>

          <aside className="relative isolate min-h-[25rem] overflow-hidden rounded-[5px] border border-white/18 bg-[#080808] p-7 sm:p-9">
            <Image src="/images/paint-booth.webp" alt="" fill sizes="(min-width: 1024px) 35vw, 100vw" className="-z-20 object-cover object-center opacity-30" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#080808_18%,rgba(8,8,8,0.86)_55%,rgba(8,8,8,0.62))]" />
            <div className="flex items-center gap-3"><ShieldCheck className="size-7 text-redline" strokeWidth={1.4} aria-hidden="true" /><h3 className="text-sm font-semibold uppercase tracking-[0.05em] text-white">{copy.trustTitle}</h3></div>
            <ul className="mt-8 space-y-6">{copy.trustItems.map((item) => <li key={item} className="flex items-center gap-4 text-sm text-white/76"><Check className="size-5 shrink-0 text-redline" strokeWidth={2} aria-hidden="true" />{item}</li>)}</ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
