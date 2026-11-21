import { locales, type Locale } from "@/config/locales";
import { nissanDoorCopy } from "@/data/nissan-door-i18n";
import type { Project } from "@/data/projects";

function localized<T>(select: (copy: (typeof nissanDoorCopy)[Locale]) => T): Record<Locale, T> {
  return Object.fromEntries(locales.map((locale) => [locale, select(nissanDoorCopy[locale])])) as Record<Locale, T>;
}

const root = "/images/projects/nissan-door-repair";

export const nissanDoorProject: Project = {
  slug: "reparacion-pintura-puerta-nissan-torrevieja",
  vehicle: "Nissan",
  publishedAt: "2026-11-21T00:00:00+01:00",
  publishedOrder: 9,
  title: localized((copy) => copy.title),
  headline: localized((copy) => copy.title),
  category: localized((copy) => copy.category),
  shortDescription: localized((copy) => copy.paragraphs[0]),
  fullDescription: localized((copy) => copy.paragraphs),
  services: localized((copy) => copy.services),
  seoTitle: localized((copy) => `${copy.title} | PaintLab`),
  seoDescription: localized((copy) => `${copy.title}. ${copy.paragraphs[0]}`),
  beforeImage: `${root}/before-main.webp`,
  afterImage: `${root}/after-main.webp`,
  beforeImageWidth: 960,
  beforeImageHeight: 1280,
  afterImageWidth: 717,
  afterImageHeight: 1280,
  altBefore: localized((copy) => copy.beforeAlt),
  altAfter: localized((copy) => copy.afterAlt),
  comparisonLayout: "portrait",
  cardDetails: true,
  detailLayout: "story",
  imageQuality: 95,
  comparisons: [{
    id: "door-detail",
    title: localized((copy) => copy.detailTitle),
    beforeImage: `${root}/before-detail.webp`,
    afterImage: `${root}/after-detail.webp`,
    beforeImageWidth: 960,
    beforeImageHeight: 1280,
    afterImageWidth: 960,
    afterImageHeight: 1280,
    altBefore: localized((copy) => `${copy.detailTitle}: ${copy.beforeAlt}`),
    altAfter: localized((copy) => `${copy.detailTitle}: ${copy.afterAlt}`),
  }],
};
