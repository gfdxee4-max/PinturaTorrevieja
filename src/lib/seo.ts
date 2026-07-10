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
import { servicePages } from "@/config/service-pages";

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

const seoKeywords: Record<Locale, string[]> = {
  es: [
    "pintura coche Torrevieja",
    "chapista Torrevieja",
    "reparación carrocería Torrevieja",
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
  ro: [
    "vopsitorie auto Torrevieja",
    "reparații caroserie Torrevieja",
  ],
  nl: [
    "autoschade herstel Torrevieja",
    "auto spuiten Torrevieja",
  ],
  it: [
    "verniciatura auto Torrevieja",
    "carrozzeria Torrevieja",
  ],
};

export function getPageMetadata(locale: Locale): Metadata {
  const dictionary = dictionaries[locale];
  const path = localizedPath(locale);
  const image = getAbsoluteUrl("/images/og-image.webp");

  return {
    title: dictionary.title,
    description: dictionary.description,
    keywords: seoKeywords[locale],
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
  const organizationId = `${siteConfig.url}/#organization`;
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
          "@id": organizationId,
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
            name: siteConfig.name,
            item: siteConfig.url,
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
  const logoUrl = getAbsoluteUrl("/icon.svg");
  const imageUrl = getAbsoluteUrl("/images/og-image.webp");
  const businessId = `${siteConfig.url}/#autobodyshop`;
  const organizationId = `${siteConfig.url}/#organization`;
  const serviceNames = [
    ...new Set([
      ...servicePages.map((page) => page.serviceName),
      "Pintura completa de vehículos",
      "Reparación de daños",
      "Igualación de color",
    ]),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.businessName,
        url: siteConfig.url,
        logo: logoUrl,
        image: imageUrl,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: siteConfig.schemaTelephone,
            availableLanguage: locales,
            url: `https://wa.me/${siteConfig.whatsappNumber}`,
          },
        ],
      },
      {
        "@type": "AutoBodyShop",
        "@id": businessId,
        name: siteConfig.businessName,
        url: siteConfig.url,
        logo: logoUrl,
        image: imageUrl,
        description: siteConfig.description,
        telephone: siteConfig.schemaTelephone,
        priceRange: siteConfig.priceRange,
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
        openingHours: siteConfig.openingHours,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        serviceType: serviceNames,
        makesOffer: serviceNames.map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            areaServed: {
              "@type": "City",
              name: "Torrevieja",
            },
            provider: {
              "@id": businessId,
            },
          },
        })),
        knowsLanguage: locales,
        availableLanguage: locales,
        parentOrganization: {
          "@id": organizationId,
        },
      },
    ],
  };
}

export function getDefaultMetadata() {
  return getPageMetadata(defaultLocale);
}
