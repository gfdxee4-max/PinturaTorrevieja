import type { Locale } from "@/config/i18n";

export const reviewStatuses = ["pending", "approved", "rejected"] as const;

export type ReviewStatus = (typeof reviewStatuses)[number];

export type ReviewRecord = {
  id: string;
  name: string;
  rating: number;
  service: string;
  text: string;
  locale: Locale;
  status: ReviewStatus;
  createdAt: string;
  updatedAt: string;
};

export type StoredReview = ReviewRecord & {
  ipHash: string;
};

export type NewReview = Pick<ReviewRecord, "locale" | "name" | "rating" | "service" | "text">;
