import type { Metadata } from "next";
import { dictionaries, fallbackLocale, locales, type Locale } from "@/config/i18n";
import { getProjectPath, getProjectsPath, projectsTranslations } from "@/config/projects-i18n";
import { siteConfig } from "@/config/site";
import type { Project } from "@/data/projects";
import { getAbsoluteUrl } from "@/lib/seo";

function projectAlternates(locale: Locale, slug?: string) {
  const pathFor = (item: Locale) => slug ? getProjectPath(item, slug) : getProjectsPath(item);

  return {
    canonical: getAbsoluteUrl(pathFor(locale)),
    languages: {
      ...Object.fromEntries(locales.map((item) => [item, getAbsoluteUrl(pathFor(item))])),
      "x-default": getAbsoluteUrl(pathFor(fallbackLocale)),
    },
  };
}

export function getProjectsMetadata(locale: Locale): Metadata {
  const copy = projectsTranslations[locale];
  const url = getAbsoluteUrl(getProjectsPath(locale));
  const image = getAbsoluteUrl("/images/hero-works-premium.webp");

  return {
    title: copy.listMetaTitle,
    description: copy.listMetaDescription,
    alternates: projectAlternates(locale),
    openGraph: {
      type: "website",
      locale: dictionaries[locale].locale,
      alternateLocale: locales.filter((item) => item !== locale).map((item) => dictionaries[item].locale),
      url,
      siteName: siteConfig.name,
      title: copy.listMetaTitle,
      description: copy.listMetaDescription,
      images: [{ url: image, width: 1536, height: 1024, alt: copy.pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.listMetaTitle,
      description: copy.listMetaDescription,
      images: [image],
    },
  };
}

export function getProjectMetadata(project: Project, locale: Locale): Metadata {
  const url = getAbsoluteUrl(getProjectPath(locale, project.slug));
  const image = getAbsoluteUrl(project.afterImage);

  return {
    title: project.seoTitle[locale],
    description: project.seoDescription[locale],
    alternates: projectAlternates(locale, project.slug),
    openGraph: {
      type: "article",
      locale: dictionaries[locale].locale,
      alternateLocale: locales.filter((item) => item !== locale).map((item) => dictionaries[item].locale),
      url,
      siteName: siteConfig.name,
      title: project.seoTitle[locale],
      description: project.seoDescription[locale],
      publishedTime: project.publishedAt,
      images: [{ url: image, width: 9248, height: 5204, alt: project.altAfter[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle[locale],
      description: project.seoDescription[locale],
      images: [image],
    },
  };
}

export function getProjectsStructuredData(locale: Locale, projects: readonly Project[]) {
  const copy = projectsTranslations[locale];
  const pageUrl = getAbsoluteUrl(getProjectsPath(locale));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: copy.listMetaTitle,
        description: copy.listMetaDescription,
        inLanguage: locale,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: copy.home, item: getAbsoluteUrl(`/${locale}`) },
          { "@type": "ListItem", position: 2, name: copy.pageTitle, item: pageUrl },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#projects`,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.headline[locale],
            url: getAbsoluteUrl(getProjectPath(locale, project.slug)),
            image: getAbsoluteUrl(project.afterImage),
          },
        })),
      },
    ],
  };
}

export function getProjectStructuredData(project: Project, locale: Locale) {
  const copy = projectsTranslations[locale];
  const pageUrl = getAbsoluteUrl(getProjectPath(locale, project.slug));
  const listUrl = getAbsoluteUrl(getProjectsPath(locale));
  const beforeImage = getAbsoluteUrl(project.beforeImage);
  const afterImage = getAbsoluteUrl(project.afterImage);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: project.seoTitle[locale],
        description: project.seoDescription[locale],
        inLanguage: locale,
        primaryImageOfPage: { "@id": `${pageUrl}#after-image` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: copy.home, item: getAbsoluteUrl(`/${locale}`) },
          { "@type": "ListItem", position: 2, name: copy.pageTitle, item: listUrl },
          { "@type": "ListItem", position: 3, name: project.title[locale], item: pageUrl },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#project`,
        url: pageUrl,
        name: project.headline[locale],
        description: project.seoDescription[locale],
        datePublished: project.publishedAt,
        inLanguage: locale,
        creator: { "@id": `${siteConfig.url}/#autobodyshop` },
        image: [beforeImage, afterImage],
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#before-image`,
        contentUrl: beforeImage,
        caption: project.altBefore[locale],
        width: 2048,
        height: 1152,
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#after-image`,
        contentUrl: afterImage,
        caption: project.altAfter[locale],
        width: 9248,
        height: 5204,
      },
    ],
  };
}
