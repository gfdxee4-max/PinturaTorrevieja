import type { MetadataRoute } from "next";
import { architecturePages, oldToNewServiceUrlMap } from "@/config/architecture";
import { fallbackLocale, locales, localizedPath } from "@/config/i18n";
import { servicePages } from "@/config/service-pages";
import { getAbsoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-09T00:00:00.000Z");

  const languagePages = locales.map((locale) => ({
    url: getAbsoluteUrl(localizedPath(locale)),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === "es" ? 1 : 0.9,
    alternates: {
      languages: {
        ...Object.fromEntries(
          locales.map((item) => [item, getAbsoluteUrl(localizedPath(item))]),
        ),
        "x-default": getAbsoluteUrl(localizedPath(fallbackLocale)),
      },
    },
  }));

  const redirectedOldPaths = new Set(oldToNewServiceUrlMap.map((item) => item.old.slice(1)));
  const seoServicePages = servicePages
    .filter((page) => !redirectedOldPaths.has(page.slug))
    .map((page) => ({
    url: getAbsoluteUrl(`/${page.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.86,
    }));

  const architectureSeoPages = architecturePages.map((page) => ({
    url: getAbsoluteUrl(page.path),
    lastModified,
    changeFrequency: page.path.split("/").length > 2 ? ("monthly" as const) : ("weekly" as const),
    priority: page.path === "/servicios" || page.path === "/ciudades" ? 0.9 : 0.82,
  }));

  return [...languagePages, ...architectureSeoPages, ...seoServicePages];
}
