export const locales = [
  "es",
  "en",
  "ru",
  "uk",
  "de",
  "fr",
  "pl",
  "nl",
  "it",
  "nb",
  "fi",
  "da",
  "sv",
  "sk",
  "hu",
  "bg",
  "pt",
  "el",
  "cs",
] as const;

export type Locale = (typeof locales)[number];

export const manualLocaleCookieName = "pt_locale_manual";
export const manualLocaleCookieMaxAge = 60 * 60 * 24 * 365;

const searchCrawlerPattern =
  /(?:googlebot|bingbot|yandexbot|duckduckbot|baiduspider|applebot|facebookexternalhit|twitterbot)/i;

export function isSupportedLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isSearchCrawler(userAgent: string | null) {
  return Boolean(userAgent && searchCrawlerPattern.test(userAgent));
}

function localeFromTag(tag: string): Locale | undefined {
  const normalizedTag = tag.trim().toLowerCase().replaceAll("_", "-");

  if (!/^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$/.test(normalizedTag)) return undefined;

  const primary = normalizedTag.split("-")[0];
  const normalized = primary === "no" ? "nb" : primary;

  return isSupportedLocale(normalized) ? normalized : undefined;
}

export function detectLocaleFromAcceptLanguage(
  acceptLanguage: string | null,
  fallback: Locale = "es",
): Locale {
  if (!acceptLanguage) return fallback;

  const candidates = acceptLanguage
    .split(",")
    .map((entry, index) => {
      const [rawTag, ...parameters] = entry.trim().split(";");
      const qualityParameter = parameters.find((parameter) => /^q\s*=/i.test(parameter.trim()));
      const qualityValue = qualityParameter?.trim().match(/^q\s*=\s*(.*)$/i)?.[1];
      const parsedQuality = qualityParameter ? Number(qualityValue || Number.NaN) : 1;

      return {
        index,
        quality: Number.isFinite(parsedQuality) ? parsedQuality : 0,
        tag: rawTag ?? "",
      };
    })
    .filter(({ quality, tag }) => quality > 0 && quality <= 1 && tag !== "*")
    .sort((left, right) => right.quality - left.quality || left.index - right.index);

  for (const candidate of candidates) {
    const locale = localeFromTag(candidate.tag);
    if (locale) return locale;
  }

  return fallback;
}
