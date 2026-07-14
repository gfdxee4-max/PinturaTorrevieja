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
