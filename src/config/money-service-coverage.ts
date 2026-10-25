import type { ArchitecturePage } from "@/config/architecture";
import type { Locale } from "@/config/i18n";
import type { LocalizedServicePage } from "@/config/localized-service-pages";
import { moneyServiceCopy } from "@/config/money-service-copy";
import { getProjectPath } from "@/config/projects-i18n";
import { projects } from "@/data/projects";

type Topic = "body" | "paint" | "bumper";
const dedicatedLocales: readonly Locale[] = ["es", "en", "ru", "uk", "de", "pl"];
const redundantFaq = new Set(["de:paint", "de:bumper", "pl:body", "pl:bumper"]);
const spanishTopics: Record<string, Topic> = {
  "/servicios/reparacion-carroceria": "body",
  "/servicios/pintura-coche": "paint",
  "/servicios/pintar-paragolpes": "bumper",
};

function projectLinks(locale: Locale, topic: Topic, scope: "service" | "hub" | "scratch" = "service") {
  return projects
    .filter((project) => topic === "paint"
      ? project.slug === "polnaya-pokraska-bmw-e46-cabriolet-torrevieja"
      : topic === "body" && project.slug !== "polnaya-pokraska-bmw-e46-cabriolet-torrevieja")
    .filter((project) => {
      if (topic !== "body") return true;
      if (scope === "hub") return ["reparacion-aleta-delantera-nissan-qashqai", "fiat-500-reparacion-puerta-aleta-estribo"].includes(project.slug);
      if (scope === "scratch") return ["reparacion-aleta-delantera-nissan-qashqai", "remont-pokraska-zadney-dveri-mercedes-v-class-torrevieja"].includes(project.slug);
      return project.slug !== "remont-pokraska-zadney-dveri-mercedes-v-class-torrevieja";
    })
    .map((project) => {
      // Some older projects use English fallback copy; keep new links language-neutral there.
      const hasEnglishFallback = locale !== "en" && project.title[locale] === project.title.en;
      return {
        href: getProjectPath(locale, project.slug),
        label: hasEnglishFallback ? project.vehicle : project.vehicle === "PaintLab"
          ? project.headline[locale] : `${project.vehicle}: ${project.title[locale]}`,
        text: hasEnglishFallback ? "" : project.shortDescription[locale],
      };
    });
}

export function addLocalizedMoneyCoverage(page: LocalizedServicePage): LocalizedServicePage {
  if (page.key !== "body" && page.key !== "paint" && page.key !== "bumper") return page;
  const [heading, paragraph, question, answer] = moneyServiceCopy[page.locale][page.key];
  return {
    ...page,
    sections: [...page.sections, { heading, paragraphs: [paragraph] }],
    faq: redundantFaq.has(`${page.locale}:${page.key}`) ? page.faq : [...page.faq, { question, answer }],
    relatedLinks: [...page.relatedLinks, ...projectLinks(page.locale, page.key)
      .filter((link) => !page.relatedLinks.some((existing) => existing.href === link.href))],
  };
}

export function addArchitectureMoneyCoverage(page: ArchitecturePage): ArchitecturePage {
  const locale = page.locale ?? "es";
  const topic = spanishTopics[page.path];
  const isProblemHub = page.hubKind === "services" && !dedicatedLocales.includes(locale);
  const topics: Topic[] = isProblemHub ? ["body", "paint", "bumper"] : topic ? [topic] : [];
  const proofTopic: Topic | undefined = page.path === "/servicios/pintar-coche-completo" ? "paint"
    : page.path === "/servicios/reparacion-aranazos-coche" ? "body" : undefined;
  if (!topics.length && !proofTopic) return page;
  const copy = topics.map((key) => moneyServiceCopy[locale][key]);
  const linkTopics: Topic[] = proofTopic ? [proofTopic] : topics;
  const links = linkTopics.flatMap((key) => projectLinks(locale, key,
    isProblemHub ? "hub" : page.path === "/servicios/reparacion-aranazos-coche" ? "scratch" : "service"));
  return {
    ...page,
    sections: [...page.sections, ...copy.map(([heading, paragraph]) => ({ heading, paragraphs: [paragraph] }))],
    faq: [...(page.faq ?? []), ...copy.map(([, , question, answer]) => ({ question, answer }))],
    links: [...page.links, ...links.filter((link) => !page.links.some((existing) => existing.href === link.href))],
  };
}
