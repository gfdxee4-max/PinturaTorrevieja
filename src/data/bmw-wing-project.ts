import { locales, type Locale } from "@/config/locales";
import { dictionaries } from "@/config/i18n";
import { moneyServiceCopy } from "@/config/money-service-copy";
import { structuralServiceCopy } from "@/config/structural-service-copy";
import { getFrameStraighteningPath } from "@/config/frame-straightening-paths";
import { bmwWingCopy } from "@/data/bmw-wing-i18n";
import type { Project } from "@/data/projects";

function localized<T>(select: (copy: (typeof bmwWingCopy)[Locale], locale: Locale) => T): Record<Locale, T> {
  return Object.fromEntries(locales.map(locale => [locale, select(bmwWingCopy[locale], locale)])) as Record<Locale, T>;
}

const root = "/images/projects/bmw-front-wing";
const dedicatedPaths: Partial<Record<Locale, { body: string; paint: string }>> = {
  es: { body: "/servicios/reparacion-carroceria", paint: "/servicios/pintura-coche" },
  en: { body: "/en/car-body-repair-torrevieja", paint: "/en/car-respray-torrevieja" },
  ru: { body: "/ru/kuzovnoy-remont-torrevieja", paint: "/ru/avtopokraska-torrevieja" },
  uk: { body: "/uk/kuzovnyi-remont-torrevieja", paint: "/uk/farbuvannya-avto-torrevieja" },
  de: { body: "/de/karosseriereparatur-torrevieja", paint: "/de/autolackierung-torrevieja" },
  pl: { body: "/pl/naprawa-blacharska-torrevieja", paint: "/pl/lakierowanie-samochodu-torrevieja" },
};

export const bmwWingProject: Project = {
  slug: "reparacion-pintura-aleta-delantera-bmw-torrevieja",
  vehicle: "BMW",
  publishedAt: "2026-11-27T00:00:00+01:00",
  publishedOrder: 10,
  title: localized(c => c.title),
  headline: localized(c => c.title),
  category: localized(c => c.services[1]),
  shortDescription: localized(c => c.paragraphs[0]),
  fullDescription: localized(c => c.paragraphs),
  services: localized(c => c.services),
  seoTitle: localized((c, locale) => locale === "es" ? "Reparación y pintura de aleta BMW en Torrevieja | PaintLab" : `${c.title} | PaintLab`),
  seoDescription: localized(c => c.description),
  beforeImage: `${root}/before-main.webp`,
  afterImage: `${root}/after-main.webp`,
  beforeImageWidth: 960, beforeImageHeight: 1280,
  afterImageWidth: 960, afterImageHeight: 1280,
  altBefore: localized(c => c.beforeAlt),
  altAfter: localized(c => c.afterAlt),
  comparisonLayout: "portrait",
  cardDetails: true,
  detailLayout: "story",
  imageQuality: 95,
  location: "PaintLab, Torrevieja",
  ctaText: localized(c => c.paragraphs[4]),
  whatsappMessage: localized(c => c.whatsapp),
  relatedServicesTitle: localized((_, locale) => dictionaries[locale].nav.services),
  relatedLinks: localized((_, locale) => {
    const hub = locale === "es" ? "/servicios" : `/${locale}/servicios`;
    return [
      { href: dedicatedPaths[locale]?.body ?? `${hub}#body-repair`, label: moneyServiceCopy[locale].body[0] },
      { href: dedicatedPaths[locale]?.paint ?? `${hub}#car-painting`, label: moneyServiceCopy[locale].paint[0] },
      { href: getFrameStraighteningPath(locale), label: structuralServiceCopy[locale].frame[0] },
      { href: hub, label: dictionaries[locale].nav.services },
    ];
  }),
  comparisons: [{
    id: "wing-detail",
    title: localized(c => c.detailTitle),
    beforeImage: `${root}/before-detail.webp`, afterImage: `${root}/after-detail.webp`,
    beforeImageWidth: 960, beforeImageHeight: 1280, afterImageWidth: 960, afterImageHeight: 1280,
    altBefore: localized(c => `${c.detailTitle}: ${c.beforeAlt}`),
    altAfter: localized(c => `${c.detailTitle}: ${c.afterAlt}`),
  }],
  video: {
    id: "J0Vv1ASlVzc",
    title: localized(c => c.videoTitle),
    playLabel: localized(c => c.playLabel),
    watchLabel: localized(c => c.watchLabel),
    privacyEnhanced: true,
    // Verified from YouTube playerMicroformatRenderer, not the project publication date.
    uploadDate: "2026-11-27T01:00:25-08:00",
    thumbnailUrl: "https://i.ytimg.com/vi/J0Vv1ASlVzc/hqdefault.jpg",
  },
};
