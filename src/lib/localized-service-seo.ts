import type { Metadata } from "next";
import { dictionaries } from "@/config/i18n";
import {
  getLocalizedServiceAlternate,
  getLocalizedServicePath,
  localizedServicePageUi,
  type LocalizedServicePage,
} from "@/config/localized-service-pages";
import { getServiceAreaSchema } from "@/config/service-areas";
import { siteConfig } from "@/config/site";
import { getAbsoluteUrl } from "@/lib/seo";

function getServiceAlternates(page: LocalizedServicePage) {
  const alternate = getLocalizedServiceAlternate(page);
  const languages: Record<string, string> = {
    [page.locale]: getAbsoluteUrl(getLocalizedServicePath(page)),
  };

  if (alternate) {
    languages[alternate.locale] = getAbsoluteUrl(getLocalizedServicePath(alternate));
  }

  return {
    canonical: getAbsoluteUrl(getLocalizedServicePath(page)),
    languages,
  };
}

export function getLocalizedServiceMetadata(page: LocalizedServicePage): Metadata {
  const alternate = getLocalizedServiceAlternate(page);
  const url = getAbsoluteUrl(getLocalizedServicePath(page));
  const image = getAbsoluteUrl("/images/og-image.webp");

  return {
    title: page.title,
    description: page.description,
    alternates: getServiceAlternates(page),
    openGraph: {
      type: "website",
      locale: dictionaries[page.locale].locale,
      alternateLocale: alternate ? [dictionaries[alternate.locale].locale] : [],
      url,
      siteName: siteConfig.name,
      title: page.title,
      description: page.description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: page.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
  };
}

export function getLocalizedServiceStructuredData(page: LocalizedServicePage) {
  const ui = localizedServicePageUi[page.locale];
  const pageUrl = getAbsoluteUrl(getLocalizedServicePath(page));
  const homeUrl = getAbsoluteUrl(`/${page.locale}`);
  const businessId = `${siteConfig.url}/#autobodyshop`;
  const websiteId = `${siteConfig.url}/#website`;
  const pageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: page.title,
        description: page.description,
        inLanguage: page.locale,
        isPartOf: { "@id": websiteId },
        about: { "@id": businessId },
        mainEntity: { "@id": serviceId },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        url: pageUrl,
        name: page.h1,
        serviceType: page.h1,
        description: page.description,
        provider: { "@id": businessId },
        areaServed: getServiceAreaSchema(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: ui.home,
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.h1,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

