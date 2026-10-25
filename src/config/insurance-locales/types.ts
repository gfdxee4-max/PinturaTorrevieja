import type { LocalizedServicePage } from "@/config/localized-service-pages";
import type { NewWheelLocale } from "@/config/wheel-locales/types";
import { newWheelContent } from "@/config/wheel-locales";

export type InsuranceContent = {
  locale: NewWheelLocale;
  slug: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: LocalizedServicePage["sections"];
  faq: LocalizedServicePage["faq"];
  terms: readonly string[];
  processTitle: string;
  steps: readonly string[];
  ctaTitle: string;
  ctaText: string;
};

export function insurancePage(content: InsuranceContent): LocalizedServicePage {
  const labels = newWheelContent.find((page) => page.locale === content.locale)!.labels;
  return {
    key: "insurance", locale: content.locale, slug: content.slug,
    title: content.title, description: content.description, h1: content.h1,
    eyebrow: "PaintLab · Torrevieja", lead: content.lead,
    benefitsTitle: content.sections[0].heading,
    benefits: content.sections.slice(1, 4).map((section) => ({ title: section.heading, text: "" })),
    hideDetailsTitle: true, sections: content.sections,
    processTitle: content.processTitle,
    process: content.steps.map((title) => ({ title, text: "" })),
    faqTitle: labels.faq, faq: content.faq, showProjects: false,
    relatedLinks: [
      { href: `/${content.locale}`, label: labels.home, text: "PaintLab · Torrevieja" },
      { href: content.locale === "es" ? "/servicios" : `/${content.locale}/servicios`, label: labels.services, text: "PaintLab" },
      { href: content.locale === "es" ? "/trabajos-realizados" : `/${content.locale}/trabajos-realizados`, label: labels.works, text: "PaintLab" },
      ...(content.locale === "es" ? [
        { href: "/servicios/reparacion-carroceria", label: "Reparación de carrocería", text: "Reparación de piezas dañadas." },
        { href: "/servicios/pintura-coche", label: "Pintura de coches", text: "Preparación y pintura de la carrocería." },
      ] : []),
    ],
    ctaTitle: content.ctaTitle, ctaText: content.ctaText,
    whatsapp: `${content.ctaTitle} — PaintLab`,
  };
}
