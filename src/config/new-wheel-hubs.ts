import type { ArchitecturePage } from "@/config/architecture";
import type { ArchitectureHubUiCopy } from "@/config/architecture-hub-i18n";
import { newWheelContent } from "@/config/wheel-locales";
import { newInsurancePages } from "@/config/insurance-locales";
import type { NewWheelLocale } from "@/config/wheel-locales/types";

export const newWheelHubLocales = newWheelContent.map((content) => content.locale)
  .filter((locale): locale is Exclude<NewWheelLocale, "es"> => locale !== "es");

export const newWheelHubPaths = Object.fromEntries(newWheelHubLocales.map((locale) => [locale, `/${locale}/servicios`]));

export const newWheelHubUi = Object.fromEntries(newWheelContent.map(({ locale, labels: l }) => [locale, {
  navigation: l.menu, languageMenu: l.language, menu: l.menu, services: l.services,
  cities: l.cities, works: l.works, faq: l.faq, contact: l.contact, about: l.about,
  call: l.phone, internalLinks: l.services, home: l.home,
  informationHeading: l.details, informationText: l.hubLead,
  relatedPages: l.services, faqHeading: l.faq, consultation: l.contact, sendPhotos: l.cta,
}])) as Record<NewWheelLocale, ArchitectureHubUiCopy>;

export const newWheelHubPages = Object.fromEntries(newWheelContent
  .filter((content) => content.locale !== "es")
  .map((content) => [content.locale, {
    services: {
      locale: content.locale, hubKind: "services", title: content.labels.hubTitle,
      description: content.labels.hubDescription, h1: content.labels.hubTitle,
      eyebrow: content.labels.services, lead: content.labels.hubLead, cta: content.labels.whatsapp,
      sections: [{ heading: content.labels.details, paragraphs: [content.labels.ctaText] }],
      links: [
        { href: `/${content.locale}/${content.slug}`, label: content.h1, text: content.description },
        ...newInsurancePages.filter((page) => page.locale === content.locale).map((page) => ({
          href: `/${page.locale}/${page.slug}`, label: page.h1, text: page.description,
        })),
      ],
      whatsappMessage: `${content.labels.cta} — PaintLab`,
    },
  }])) as Record<Exclude<NewWheelLocale, "es">, Partial<Record<"services" | "cities", Omit<ArchitecturePage, "path">>>>;
