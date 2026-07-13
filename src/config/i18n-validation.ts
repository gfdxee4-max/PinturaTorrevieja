import { dictionaries, locales, type Locale } from "@/config/i18n";
import { interfaceTranslations } from "@/config/interface-i18n";
import { privacyTranslations } from "@/config/privacy-i18n";
import { reviewTranslations } from "@/config/review-i18n";
import { serviceSectionTranslations } from "@/config/service-section-i18n";
import { getFaqItems } from "@/config/faq";

function collectMissing(value: unknown, reference: unknown, prefix: string, missing: string[]) {
  if (typeof reference === "string") {
    if (typeof value !== "string" || !value.trim()) missing.push(prefix);
    return;
  }
  if (Array.isArray(reference)) {
    if (!Array.isArray(value) || value.length !== reference.length) missing.push(prefix);
    return;
  }
  if (reference && typeof reference === "object") {
    const current = value && typeof value === "object" ? value as Record<string, unknown> : {};
    for (const [key, child] of Object.entries(reference)) collectMissing(current[key], child, `${prefix}.${key}`, missing);
  }
}

export function getMissingTranslationKeys() {
  const missing: string[] = [];
  const reference = dictionaries.es;
  const records: Array<[string, Record<Locale, unknown>]> = [
    ["interface", interfaceTranslations],
    ["privacy", privacyTranslations],
    ["reviews", reviewTranslations],
    ["services", serviceSectionTranslations],
  ];

  for (const locale of locales) {
    collectMissing(dictionaries[locale], reference, `dictionary.${locale}`, missing);
    if (!getFaqItems(locale)?.length) missing.push(`faq.${locale}`);
    for (const [namespace, record] of records) if (!record[locale]) missing.push(`${namespace}.${locale}`);
  }

  return missing;
}

let reported = false;

export function reportMissingTranslationsInDevelopment() {
  if (reported || process.env.NODE_ENV === "production") return;
  reported = true;
  const missing = getMissingTranslationKeys();
  if (missing.length) console.warn(`[i18n] Missing translations:\n${missing.join("\n")}`);
}
