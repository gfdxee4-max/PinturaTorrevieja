import { romanceWheelContent } from "@/config/wheel-locales/romance";
import { southernWheelContent } from "@/config/wheel-locales/southern";
import { northwestWheelContent } from "@/config/wheel-locales/northwest";
import { nordicWheelContent } from "@/config/wheel-locales/nordic";
import { centralWheelContent } from "@/config/wheel-locales/central";
import { southeastWheelContent } from "@/config/wheel-locales/southeast";
import { greekWheelContent } from "@/config/wheel-locales/greek";
import { wheelPage } from "@/config/wheel-locales/types";

export const newWheelContent = [
  ...romanceWheelContent, ...southernWheelContent, ...northwestWheelContent,
  ...nordicWheelContent, ...centralWheelContent, ...southeastWheelContent,
  ...greekWheelContent,
];

export const newWheelPages = newWheelContent.map(wheelPage);

export const newWheelServiceUi = Object.fromEntries(newWheelContent.map(({ locale, labels: l }) => [locale, {
  home: l.home, benefitsEyebrow: l.services, benefitsTitle: l.details,
  detailsEyebrow: l.details, detailsTitle: l.details, processEyebrow: l.process,
  processTitle: l.process, projectsEyebrow: l.works, projectsTitle: l.works,
  projectsText: "PaintLab", viewProject: l.works, allProjects: l.works,
  relatedEyebrow: l.services, relatedTitle: l.services, faqTitle: l.faq,
  ctaTitle: l.cta, ctaText: l.ctaText, whatsapp: l.whatsapp, phone: l.phone,
}])) as Record<(typeof newWheelContent)[number]["locale"], {
  home: string; benefitsEyebrow: string; benefitsTitle: string;
  detailsEyebrow: string; detailsTitle: string; processEyebrow: string;
  processTitle: string; projectsEyebrow: string; projectsTitle: string;
  projectsText: string; viewProject: string; allProjects: string;
  relatedEyebrow: string; relatedTitle: string; faqTitle: string;
  ctaTitle: string; ctaText: string; whatsapp: string; phone: string;
}>;

export const wheelSemanticMatrix = newWheelContent.map((content) => ({
  locale: content.locale,
  url: content.locale === "es" ? `/servicios/${content.slug}` : `/${content.locale}/${content.slug}`,
  primary: content.h1,
  secondary: content.terms,
  problemBased: content.terms.filter((term) => content.terms.indexOf(term) >= 3 && content.terms.indexOf(term) <= 8),
  operationBased: content.steps,
  localQueries: [content.h1, `${content.terms[0]} Torrevieja`, `${content.terms[10]} Torrevieja`],
  longTail: content.faq.map((item) => item.question),
}));
