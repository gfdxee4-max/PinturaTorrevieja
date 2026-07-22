import type { Metadata } from "next";
import {
  defaultLocale,
  dictionaries,
  fallbackLocale,
  locales,
  type Locale,
  localizedPath,
} from "@/config/i18n";
import { getFaqItems } from "@/config/faq";
import { siteConfig } from "@/config/site";
import { additionalSeoKeywords } from "@/config/additional-seo-keywords";

export function getAbsoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function getAlternates(locale: Locale) {
  return {
    canonical: getAbsoluteUrl(localizedPath(locale)),
    languages: {
      ...Object.fromEntries(
        locales.map((item) => [item, getAbsoluteUrl(localizedPath(item))]),
      ),
      "x-default": getAbsoluteUrl(localizedPath(fallbackLocale)),
    },
  };
}

const seoKeywords: Record<Locale, readonly string[]> = {
  es: [
    "pintura Torrevieja",
    "pintura coche Torrevieja",
    "chapista Torrevieja",
    "taller chapa y pintura Torrevieja",
    "taller de chapa y pintura Torrevieja",
    "reparación de chapa Torrevieja",
    "reparación de carrocería Torrevieja",
  ],
  en: [
    "car painting Torrevieja",
    "car body repair Torrevieja",
    "auto body shop Torrevieja",
  ],
  ru: [
    "покраска автомобиля Торревьеха",
    "кузовной ремонт Торревьеха",
  ],
  uk: [
    "фарбування авто Торрев'єха",
    "кузовний ремонт Торрев'єха",
  ],
  de: [
    "Autolackierung Torrevieja",
    "Karosseriereparatur Torrevieja",
    "Lackierer Torrevieja",
  ],
  fr: [
    "peinture voiture Torrevieja",
    "réparation carrosserie Torrevieja",
  ],
  pl: [
    "lakiernik Torrevieja",
    "malowanie samochodu Torrevieja",
  ],
  nl: [
    "autoschade herstel Torrevieja",
    "auto spuiten Torrevieja",
  ],
  it: [
    "verniciatura auto Torrevieja",
    "carrozzeria Torrevieja",
  ],
  ...additionalSeoKeywords,
};

export function getPageMetadata(locale: Locale): Metadata {
  const dictionary = dictionaries[locale];
  const path = localizedPath(locale);
  const image = getAbsoluteUrl("/images/og-image.webp");

  return {
    title: dictionary.title,
    description: dictionary.description,
    keywords: [...seoKeywords[locale]],
    alternates: getAlternates(locale),
    openGraph: {
      type: "website",
      locale: dictionary.locale,
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => dictionaries[item].locale),
      url: getAbsoluteUrl(path),
      siteName: siteConfig.name,
      title: dictionary.title,
      description: dictionary.description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.title,
      description: dictionary.description,
      images: [image],
    },
  };
}

export function getStructuredData(locale: Locale) {
  const dictionary = dictionaries[locale];
  const pageUrl = getAbsoluteUrl(localizedPath(locale));
  const faqItems = getFaqItems(locale);
  const businessId = `${siteConfig.url}/#autobodyshop`;
  const websiteId = `${siteConfig.url}/#website`;
  const pageId = `${pageUrl}#webpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: dictionary.title,
        description: dictionary.description,
        inLanguage: locale,
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": businessId,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: siteConfig.businessName,
            item: {
              "@id": businessId,
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dictionary.nav.home,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
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

export function getLocalBusinessStructuredData() {
  const logoUrl = getAbsoluteUrl("/icon-512.png?v=20260715-210907");
  const imageUrl = getAbsoluteUrl("/images/og-image.webp");
  const businessId = `${siteConfig.url}/#autobodyshop`;
  const websiteId = `${siteConfig.url}/#website`;
  const serviceNames = [
    "Pintura de coches",
    "Pintura completa de vehículos",
    "Reparación de carrocería",
    "Reparación de daños",
    "Preparación de superficies",
    "Pintura de elementos de carrocería",
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.businessName,
        alternateName: siteConfig.alternateBusinessName,
        description: siteConfig.description,
        inLanguage: locales,
        publisher: {
          "@id": businessId,
        },
      },
      {
        "@type": "AutoBodyShop",
        "@id": businessId,
        name: siteConfig.businessName,
        alternateName: siteConfig.alternateBusinessName,
        description: siteConfig.description,
        url: siteConfig.url,
        logo: logoUrl,
        image: imageUrl,
        telephone: siteConfig.schemaTelephone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Torrevieja",
          addressRegion: "Alicante",
          addressCountry: "Spain",
        },
        areaServed: {
          "@type": "City",
          name: "Torrevieja",
        },
        priceRange: siteConfig.priceRange,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.schemaTelephone,
          contactType: "customer service",
          availableLanguage: locales,
          url: `https://wa.me/${siteConfig.whatsappNumber}`,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de pintura y reparación",
          itemListElement: serviceNames.map((name) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name,
              serviceType: name,
              provider: {
                "@id": businessId,
              },
              areaServed: {
                "@type": "City",
                name: "Torrevieja",
              },
            },
          })),
        },
      },
    ],
  };
}

export function getDefaultMetadata() {
  return getPageMetadata(defaultLocale);
}
