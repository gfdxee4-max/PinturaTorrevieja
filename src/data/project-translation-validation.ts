import { locales, type Locale } from "@/config/locales";
import type { Project } from "@/data/projects";

function checkTranslations(value: Partial<Record<Locale, unknown>>, path: string, complete = true) {
  for (const locale of locales) {
    const translation = value[locale];
    if (translation === undefined && !complete) continue;
    const strings = Array.isArray(translation) ? translation : [translation];
    if (!strings.length || strings.some((text) => typeof text !== "string" || !text.trim())) {
      throw new Error(`Missing project translation: ${path}.${locale}`);
    }
    // Reject materialised ES/EN fallback as well as missing locale keys.
    for (const source of ["es", "en"] as const) {
      if (locale !== source && JSON.stringify(translation) === JSON.stringify(value[source])) {
        throw new Error(`Copied ${source} project translation: ${path}.${locale}`);
      }
    }
  }
}

export function assertProjectTranslations(projects: readonly Project[]) {
  for (const project of projects) {
    for (const field of ["title", "headline", "category", "shortDescription", "fullDescription", "services", "altAfter", "seoTitle", "seoDescription"] as const) {
      checkTranslations(project[field], `${project.slug}.${field}`);
    }
    if (project.mediaKind === "gallery") {
      checkTranslations(project.galleryTitle, `${project.slug}.galleryTitle`);
      for (const photo of project.gallery) checkTranslations(photo.alt, `${project.slug}.${photo.src}.alt`);
      if (project.video) {
        checkTranslations(project.video.title, `${project.slug}.video.title`);
        checkTranslations(project.video.playLabel, `${project.slug}.video.playLabel`);
      }
    } else {
      checkTranslations(project.altBefore, `${project.slug}.altBefore`);
    }
    for (const field of ["comparisonTitle", "highlight"] as const) {
      if (project[field]) checkTranslations(project[field], `${project.slug}.${field}`);
    }
    // Optional custom CTA copy may defer to the fully localised shared UI.
    if (project.ctaText) checkTranslations(project.ctaText, `${project.slug}.ctaText`, false);
    for (const section of project.detailSections ?? []) {
      checkTranslations(section.title, `${project.slug}.${section.id}.title`);
      checkTranslations(section.text, `${project.slug}.${section.id}.text`);
    }
    for (const comparison of project.comparisons ?? []) {
      for (const field of ["title", "altBefore", "altAfter"] as const) {
        checkTranslations(comparison[field], `${project.slug}.${comparison.id}.${field}`);
      }
    }
  }
}
