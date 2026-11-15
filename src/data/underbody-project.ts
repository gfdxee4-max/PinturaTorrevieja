import { locales, type Locale } from "@/config/locales";
import { dictionaries } from "@/config/i18n";
import { projectsTranslations } from "@/config/projects-i18n";
import { underbodyCopy } from "@/config/underbody-copy";
import { underbodyProjectCopy } from "@/data/underbody-project-i18n";
import type { Project } from "@/data/projects";

function localized<T>(select: (copy: (typeof underbodyProjectCopy)[Locale]) => T): Record<Locale, T> {
  return Object.fromEntries(locales.map((locale) => [locale, select(underbodyProjectCopy[locale])])) as Record<Locale, T>;
}

const root = "/images/projects/underbody-protection";
const beforeAlt = localized((copy) => copy.beforeAlt);
const afterAlt = localized((copy) => copy.afterAlt);

export const underbodyProject: Project = {
  slug: "tratamiento-anticorrosivo-proteccion-bajos-torrevieja",
  vehicle: "PaintLab",
  publishedAt: "2026-11-15T00:00:00+01:00",
  publishedOrder: 8,
  title: localized((copy) => copy.shortTitle),
  headline: localized((copy) => copy.title),
  category: localized((copy) => copy.shortTitle),
  shortDescription: localized((copy) => copy.summary),
  fullDescription: localized((copy) => copy.paragraphs),
  services: localized((copy) => copy.services),
  seoTitle: localized((copy) => `${copy.title} | PaintLab`),
  seoDescription: localized((copy) => `${copy.summary} ${copy.paragraphs[0]}`),
  beforeImage: `${root}/before-main.webp`,
  afterImage: `${root}/after-main.webp`,
  beforeImageWidth: 1200,
  beforeImageHeight: 1600,
  afterImageWidth: 1200,
  afterImageHeight: 1600,
  altBefore: beforeAlt,
  altAfter: afterAlt,
  comparisonLayout: "portrait",
  cardDetails: true,
  imageQuality: 95,
  location: "PaintLab, Torrevieja",
  galleryTitle: Object.fromEntries(locales.map((locale) => [locale, `${projectsTranslations[locale].before} / ${projectsTranslations[locale].after}`])) as Record<Locale, string>,
  gallery: [
    { src: `${root}/before-detail.webp`, width: 1200, height: 1600, alt: localized((copy) => `${copy.detail}: ${copy.beforeAlt}`) },
    { src: `${root}/after-detail.webp`, width: 1200, height: 1600, alt: localized((copy) => `${copy.detail}: ${copy.afterAlt}`) },
  ],
  detailSections: [
    {
      id: "protection",
      title: localized((copy) => copy.helpTitle),
      text: localized((copy) => `${copy.help} ${copy.limitation}`),
      items: localized((copy) => copy.benefits),
    },
    {
      id: "itv",
      title: localized((copy) => `${copy.shortTitle}: ITV`),
      text: localized((copy) => copy.itv),
    },
  ],
  relatedServicesTitle: Object.fromEntries(locales.map((locale) => [locale, dictionaries[locale].nav.services])),
  relatedLinks: Object.fromEntries(locales.map((locale) => [locale, [{
    href: `${locale === "es" ? "/servicios" : `/${locale}/servicios`}#underbody-protection`,
    label: underbodyCopy[locale].heading,
  }]])),
};
