import { locales, type Locale } from "@/config/locales";

export const frameSlugs = {
  es: "bancada-carroceria", en: "frame-straightening-torrevieja", ru: "stapelnyy-remont-torrevieja", uk: "stapelni-roboty-torrevieja", de: "richtbank-karosserie-torrevieja", fr: "redressage-carrosserie-marbre-torrevieja", pl: "prostowanie-karoserii-torrevieja", nl: "carrosserie-richtbank-torrevieja", it: "raddrizzatura-carrozzeria-torrevieja", nb: "karosserioppretting-torrevieja", fi: "korin-oikaisu-torrevieja", da: "karrosseriopretning-torrevieja", sv: "karosseririktning-torrevieja", sk: "rovnanie-karoserie-torrevieja", hu: "karosszeria-egyengetes-torrevieja", bg: "izpravyane-kupeto-torrevieja", pt: "alinhamento-carrocaria-torrevieja", el: "efthygrammisi-amaxomatos-torrevieja", cs: "rovnani-karoserie-torrevieja",
} satisfies Record<Locale, string>;

export function getFrameStraighteningPath(locale: Locale) {
  return locale === "es" ? `/servicios/${frameSlugs[locale]}` : `/${locale}/${frameSlugs[locale]}`;
}

export const frameStraighteningPaths = Object.fromEntries(locales.map(l => [l, getFrameStraighteningPath(l)])) as Record<Locale, string>;
