import type { Metadata } from "next";
import { revalidatePath } from "next/cache";
import { deleteReview, listReviewsForModeration, setReviewStatus } from "@/lib/reviews/repository";
import { reviewStatuses, type ReviewStatus } from "@/lib/reviews/types";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Review moderation", robots: { index: false, follow: false, nocache: true } };

async function moderateReview(formData: FormData) {
  "use server";
  const id = formData.get("id");
  const action = formData.get("action");
  const locale = formData.get("locale");
  if (typeof id !== "string" || typeof action !== "string" || typeof locale !== "string") return;
  if (action === "delete") await deleteReview(id);
  else if (reviewStatuses.includes(action as ReviewStatus)) await setReviewStatus(id, action as ReviewStatus);
  revalidatePath("/reviews-admin");
  revalidatePath(`/${locale}`);
}

export default async function ReviewsAdminPage() {
  const reviews = await listReviewsForModeration();
  return <main className="min-h-screen bg-[#050505] px-5 py-12 text-white"><div className="mx-auto max-w-6xl"><h1 className="text-3xl font-semibold uppercase">Review moderation</h1><p className="mt-2 text-sm text-white/55">Only approved reviews are public.</p><div className="mt-8 grid gap-4">{reviews.map((review) => <article key={review.id} className="rounded border border-white/18 bg-[#0a0a0a] p-5"><div className="flex flex-wrap items-center justify-between gap-3"><div><strong>{review.name}</strong><span className="ml-3 text-redline">{"★".repeat(review.rating)}</span></div><span className="rounded border border-white/20 px-3 py-1 text-xs uppercase text-white/65">{review.status}</span></div><p className="mt-4 whitespace-pre-line text-sm leading-6 text-white/72">{review.text}</p><p className="mt-3 text-xs text-white/45">{review.locale.toUpperCase()} · {review.service || "No service"} · {new Date(review.createdAt).toLocaleString()}</p><form action={moderateReview} className="mt-5 flex flex-wrap gap-2"><input type="hidden" name="id" value={review.id} /><input type="hidden" name="locale" value={review.locale} /><button name="action" value="approved" className="border border-emerald-600 px-4 py-2 text-xs uppercase text-emerald-400">Approve</button><button name="action" value="rejected" className="border border-amber-600 px-4 py-2 text-xs uppercase text-amber-400">Reject</button><button name="action" value="delete" className="border border-red-700 px-4 py-2 text-xs uppercase text-red-400">Delete</button></form></article>)}{reviews.length === 0 ? <p className="border border-white/15 p-5 text-white/55">No reviews.</p> : null}</div></div></main>;
}
