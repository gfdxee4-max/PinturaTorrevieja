import type { ArchitecturePage } from "@/config/architecture";
import { locales, type Locale } from "@/config/locales";
import { frameCopy } from "@/config/frame-straightening-copy";
import { frameSlugs, frameStraighteningPaths, getFrameStraighteningPath } from "@/config/frame-straightening-paths";
import { structuralServiceCopy } from "@/config/structural-service-copy";
import { structuralRepairDetails } from "@/config/structural-repair-details";
import { bodyRestorationCopy } from "@/config/body-restoration-copy";
import { moneyServiceCopy } from "@/config/money-service-copy";
import { geoCoverageCopy } from "@/config/geo-coverage-i18n";
import { getLocalizedServicePath, localizedServicePages } from "@/config/localized-service-pages";
import { getProjectPath, getProjectsPath } from "@/config/projects-i18n";
import { projects } from "@/data/projects";
import { projectsTranslations } from "@/config/projects-i18n";
import { bodyWorkshopCommercialCopy } from "@/config/body-workshop-commercial-copy";

export function getFrameStraighteningPage(locale: string, slug: string): ArchitecturePage | undefined {
  if (!locales.includes(locale as Locale) || frameSlugs[locale as Locale] !== slug) return undefined;
  const l = locale as Locale;
  const c = frameCopy[l], s = structuralServiceCopy[l], d = structuralRepairDetails[l];
  const hub = l === "es" ? "/servicios" : `/${l}/servicios`;
  const h1 = l === "es" ? "Bancada y enderezado de carrocería en Torrevieja" : s.frame[1];
  const answers = [s.frame[2], s.frame[3], d.panels, s.welding[2], c.cost, c.time, c.photos];
  const links = (["body", "insurance", "paint"] as const).flatMap(key => {
    const p = localizedServicePages.find(p => p.locale === l && p.key === key);
    if (p) return [{ href: getLocalizedServicePath(p), label: p.h1 }];
    if (l === "es") return [{ href: key === "paint" ? "/servicios/pintura-coche" : "/servicios/reparacion-carroceria", label: key === "paint" ? moneyServiceCopy[l].paint[0] : moneyServiceCopy[l].body[0] }];
    return [{ href: `${hub}#${key === "paint" ? "car-painting" : "body-repair"}`, label: key === "paint" ? moneyServiceCopy[l].paint[0] : moneyServiceCopy[l].body[0] }];
  });
  return {
    path: getFrameStraighteningPath(l), locale: l, alternatePaths: frameStraighteningPaths,
    title: `${h1} | PaintLab`, h1,
    description: l === "es" ? "Reparación de carrocería en bancada en Torrevieja. Enderezado tras accidentes, evaluación de daños y posterior chapa y pintura. Solicita presupuesto por WhatsApp." : `${h1}. ${c.photos.split(". ")[0]}.`,
    eyebrow: s.frame[0], lead: s.frame[2], cta: geoCoverageCopy[l].links[6], whatsappMessage: c.message,
    sections: [
      { heading: s.frame[0], paragraphs: [s.frame[2], s.frame[3]] },
      { heading: c.questions[1], paragraphs: [s.frame[3], d.structure] },
      { heading: c.questions[2], paragraphs: [d.panels] },
      { heading: c.questions[3], paragraphs: [s.welding[2], d.corrosion], links: [{ href: `${hub}#body-welding`, label: s.welding[0] }] },
      { heading: c.processHeading, paragraphs: [c.process] },
      { heading: bodyRestorationCopy[l].paintHeading, paragraphs: [bodyRestorationCopy[l].paint, bodyWorkshopCommercialCopy[l].specialist] },
      { heading: c.questions[4], paragraphs: [c.cost] },
      { heading: c.questions[5], paragraphs: [c.time] },
      { heading: c.questions[6], paragraphs: [c.photos] },
      { heading: geoCoverageCopy[l].heading, paragraphs: [c.geo], links: [{ href: hub, label: geoCoverageCopy[l].links[0] }] },
    ],
    links: [...links, { href: getProjectsPath(l), label: projectsTranslations[l].pageTitle }, ...projects.filter(p => p.slug === "restauracion-carroceria-danos-graves-torrevieja").map(p => ({ href: getProjectPath(l, p.slug), label: p.title[l] }))],
    faq: c.questions.map((question, i) => ({ question, answer: answers[i] })),
  };
}

export const frameStraighteningPages = locales.map(l => getFrameStraighteningPage(l, frameSlugs[l])!);
