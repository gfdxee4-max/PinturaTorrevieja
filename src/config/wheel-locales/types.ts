import type { Locale } from "@/config/i18n";
import type { LocalizedServicePage } from "@/config/localized-service-pages";

export type NewWheelLocale = Exclude<Locale, "en" | "ru" | "uk" | "de" | "pl">;

export type WheelLocaleContent = {
  locale: NewWheelLocale;
  slug: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: LocalizedServicePage["sections"];
  faq: LocalizedServicePage["faq"];
  steps: readonly string[];
  terms: readonly string[];
  labels: {
    home: string; services: string; works: string; phone: string; whatsapp: string;
    menu: string; language: string; contact: string; cities: string; about: string;
    faq: string; details: string; process: string; cta: string; ctaText: string;
    hubTitle: string; hubDescription: string; hubLead: string;
  };
};

export function wheelPage(content: WheelLocaleContent): LocalizedServicePage {
  const { labels } = content;
  return {
    key: "wheels", locale: content.locale, slug: content.slug,
    title: content.title, description: content.description, h1: content.h1,
    eyebrow: "PaintLab · Torrevieja", lead: content.lead,
    benefitsTitle: labels.details,
    benefits: content.sections.slice(0, 3).map((section) => ({ title: section.heading, text: "" })),
    hideDetailsTitle: true,
    sections: content.sections,
    processTitle: labels.process,
    process: content.steps.map((title) => ({ title, text: "" })),
    faqTitle: labels.faq, faq: content.faq,
    showProjects: false,
    relatedLinks: [
      { href: `/${content.locale}`, label: labels.home, text: "PaintLab · Torrevieja" },
      { href: content.locale === "es" ? "/servicios" : `/${content.locale}/servicios`, label: labels.services, text: labels.hubDescription },
      { href: content.locale === "es" ? "/trabajos-realizados" : `/${content.locale}/trabajos-realizados`, label: labels.works, text: "PaintLab" },
    ],
    ctaTitle: labels.cta, ctaText: labels.ctaText,
    whatsapp: `${labels.cta} — ${content.h1}. PaintLab.`,
  };
}
