import { ReviewsClient } from "@/components/reviews/reviews-client";
import type { Locale } from "@/config/i18n";
import { reviewTranslations } from "@/config/review-i18n";
import { listApprovedReviews } from "@/lib/reviews/repository";

export async function ReviewsSection({ locale }: { locale: Locale }) {
  const reviews = await listApprovedReviews(locale);
  return <ReviewsClient copy={reviewTranslations[locale]} initialReviews={reviews} locale={locale} />;
}
