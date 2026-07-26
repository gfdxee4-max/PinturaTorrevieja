import type { MetadataRoute } from "next";
import { architecturePages, oldToNewServiceUrlMap } from "@/config/architecture";
import {
  blogArticles,
  blogCategories,
  hasPublishedBlogArticles,
} from "@/config/blog";
import { fallbackLocale, locales, localizedPath } from "@/config/i18n";
import { servicePages } from "@/config/service-pages";
import { getAbsoluteUrl } from "@/lib/seo";
import { getProjectPath, getProjectsPath } from "@/config/projects-i18n";
import { projects } from "@/data/projects";

export const dynamic = "force-static";
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const homepageLastModified = new Date("2026-07-23T18:12:05.000Z");
  const serviceContentLastModified = new Date("2026-07-23T16:35:02.000Z");
  const blogContentLastModified = new Date("2026-07-22T19:45:14.000Z");
  const projectIndexLastModified = new Date(
    Math.max(...projects.map((project) => Date.parse(project.publishedAt))),
  );

  const languagePages = locales.map((locale) => ({
    url: getAbsoluteUrl(localizedPath(locale)),
    lastModified: homepageLastModified,
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
      lastModified: serviceContentLastModified,
    }));

  const architectureSeoPages = architecturePages
    .filter(
      (page) =>
        page.path !== "/trabajos-realizados" &&
        page.path !== "/ciudades/torrevieja" &&
        page.path !== "/marcas" &&
        (hasPublishedBlogArticles || page.path !== "/blog"),
    )
    .map((page) => ({
      url: getAbsoluteUrl(page.path),
    }));
  const blogCategoryPages = (hasPublishedBlogArticles ? blogCategories : []).map(
    (category) => ({
      url: getAbsoluteUrl(`/blog/categoria/${category.slug}`),
      lastModified: blogContentLastModified,
    }),
  );
  const blogArticlePages = blogArticles.map((article) => ({
    url: getAbsoluteUrl(`/blog/${article.slug}`),
    lastModified: new Date(article.dateModified),
  }));
  const projectIndexPages = locales.map((locale) => ({
    url: getAbsoluteUrl(getProjectsPath(locale)),
    lastModified: projectIndexLastModified,
    alternates: {
      languages: {
        ...Object.fromEntries(locales.map((item) => [item, getAbsoluteUrl(getProjectsPath(item))])),
        "x-default": getAbsoluteUrl(getProjectsPath(fallbackLocale)),
      },
    },
  }));
  const projectDetailPages = projects.flatMap((project) =>
    locales.map((locale) => ({
      url: getAbsoluteUrl(getProjectPath(locale, project.slug)),
      lastModified: new Date(project.publishedAt),
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((item) => [item, getAbsoluteUrl(getProjectPath(item, project.slug))]),
          ),
          "x-default": getAbsoluteUrl(getProjectPath(fallbackLocale, project.slug)),
        },
      },
    })),
  );

  return [
    ...languagePages,
    ...architectureSeoPages,
    ...blogCategoryPages,
    ...blogArticlePages,
    ...seoServicePages,
    ...projectIndexPages,
    ...projectDetailPages,
  ];
}
