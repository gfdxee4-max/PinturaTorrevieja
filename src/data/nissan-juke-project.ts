import { locales, type Locale } from "@/config/locales";
import { nissanJukeCopy } from "@/data/nissan-juke-i18n";
import type { Project } from "@/data/projects";

function localized<T>(select: (copy: (typeof nissanJukeCopy)[Locale]) => T): Record<Locale, T> {
  return Object.fromEntries(locales.map((locale) => [locale, select(nissanJukeCopy[locale])])) as Record<Locale, T>;
}

const root = "/images/projects/nissan-juke-front-bumper";

export const nissanJukeProject: Project = {
  slug: "reparacion-pintura-paragolpes-delantero-nissan-juke-torrevieja",
  vehicle: "Nissan Juke",
  publishedAt: "2026-11-15T00:00:00+01:00",
  title: localized((copy) => copy.title),
  headline: localized((copy) => copy.title),
  category: localized((copy) => copy.category),
  shortDescription: localized((copy) => copy.before),
  fullDescription: localized((copy) => [copy.before, copy.work, copy.result]),
  services: localized((copy) => copy.services),
  seoTitle: localized((copy) => `${copy.title} | PaintLab`),
  seoDescription: localized((copy) => copy.before),
  beforeImage: `${root}/before-main.webp`,
  afterImage: `${root}/after-main.webp`,
  beforeImageWidth: 1200,
  beforeImageHeight: 1600,
  afterImageWidth: 1200,
  afterImageHeight: 1600,
  altBefore: localized((copy) => copy.alts[0]),
  altAfter: localized((copy) => copy.alts[2]),
  comparisonLayout: "portrait",
  imageQuality: 95,
  galleryTitle: localized((copy) => copy.gallery),
  gallery: ["before-main", "before-detail", "after-main", "after-detail"].map((name, index) => ({
    src: `${root}/${name}.webp`,
    width: 1200,
    height: 1600,
    alt: localized((copy) => copy.alts[index]),
  })),
  location: "PaintLab, Torrevieja",
  relatedServicesTitle: {
    es: "Servicio relacionado", en: "Related service", ru: "Связанная услуга",
    uk: "Пов’язана послуга", de: "Passende Leistung", pl: "Powiązana usługa",
  },
  relatedLinks: {
    es: [{ href: "/servicios/pintar-paragolpes", label: nissanJukeCopy.es.category }],
    en: [{ href: "/en/bumper-repair-paint-torrevieja", label: nissanJukeCopy.en.category }],
    ru: [{ href: "/ru/pokraska-bampera-torrevieja", label: nissanJukeCopy.ru.category }],
    uk: [{ href: "/uk/farbuvannya-bampera-torrevieja", label: nissanJukeCopy.uk.category }],
    de: [{ href: "/de/stossfaenger-reparatur-lackierung-torrevieja", label: nissanJukeCopy.de.category }],
    pl: [{ href: "/pl/naprawa-lakierowanie-zderzaka-torrevieja", label: nissanJukeCopy.pl.category }],
  },
};
