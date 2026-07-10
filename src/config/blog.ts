import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { getAbsoluteUrl } from "@/lib/seo";

export type BlogCategorySlug =
  | "precios"
  | "pintura"
  | "reparacion"
  | "pulido"
  | "consejos"
  | "seguros"
  | "marcas"
  | "ciudades";

export type BlogCategory = {
  slug: BlogCategorySlug;
  name: string;
  description: string;
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogArticleSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type BlogAuthor = {
  name: string;
  url: string;
};

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategorySlug;
  h1: string;
  excerpt: string;
  author: BlogAuthor;
  datePublished: string;
  dateModified: string;
  image: string;
  sections: BlogArticleSection[];
  faq?: BlogFaqItem[];
  relatedSlugs?: string[];
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "precios",
    name: "Precios",
    description: "Guias futuras sobre factores que influyen en presupuestos y valoraciones.",
  },
  {
    slug: "pintura",
    name: "Pintura",
    description: "Contenido sobre pintura de coche, piezas, acabados y color.",
  },
  {
    slug: "reparacion",
    name: "Reparación",
    description: "Dudas sobre carroceria, aranazos, golpes y reparaciones esteticas.",
  },
  {
    slug: "pulido",
    name: "Pulido",
    description: "Guias sobre pulido de carroceria, faros, brillo y microaranazos.",
  },
  {
    slug: "consejos",
    name: "Consejos",
    description: "Recomendaciones de cuidado, mantenimiento y preparacion antes del taller.",
  },
  {
    slug: "seguros",
    name: "Seguros",
    description: "Informacion futura sobre partes, franquicias y reparaciones con seguro.",
  },
  {
    slug: "marcas",
    name: "Marcas",
    description: "Contenido futuro por marcas cuando haya informacion y casos verificables.",
  },
  {
    slug: "ciudades",
    name: "Ciudades",
    description: "Guias locales futuras conectadas con zonas reales de Costa Blanca Sur.",
  },
];

export const blogArticles: BlogArticle[] = [];

export const blogIndexMetadata: Metadata = {
  title: "Blog sobre pintura de coches y carroceria | Pintura Torrevieja",
  description:
    "Sistema profesional de blog sobre pintura de coches, reparacion, pulido, consejos, seguros, marcas y ciudades.",
  alternates: {
    canonical: getAbsoluteUrl("/blog"),
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: getAbsoluteUrl("/blog"),
    siteName: siteConfig.name,
    title: "Blog sobre pintura de coches y carroceria | Pintura Torrevieja",
    description:
      "Guias profesionales sobre pintura de coches, reparacion, pulido y cuidado de carroceria.",
    images: [
      {
        url: getAbsoluteUrl("/images/hero-paint-repair.webp"),
        width: 1200,
        height: 630,
        alt: "Blog de pintura de coches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog sobre pintura de coches y carroceria | Pintura Torrevieja",
    description:
      "Guias profesionales sobre pintura de coches, reparacion, pulido y cuidado de carroceria.",
    images: [getAbsoluteUrl("/images/hero-paint-repair.webp")],
  },
};

export function getBlogCategory(slug: string) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getCategoryArticles(category: BlogCategorySlug) {
  return blogArticles.filter((article) => article.category === category);
}

export function getReadingTime(article: BlogArticle) {
  const words = article.sections
    .flatMap((section) => [section.title, ...section.paragraphs])
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 220));
}

export function getRelatedArticles(article: BlogArticle) {
  const explicitRelated = article.relatedSlugs
    ?.map((slug) => getBlogArticle(slug))
    .filter((item): item is BlogArticle => Boolean(item));

  if (explicitRelated?.length) {
    return explicitRelated.slice(0, 3);
  }

  return blogArticles
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .slice(0, 3);
}

export function getBlogArticleMetadata(article: BlogArticle): Metadata {
  const url = getAbsoluteUrl(`/blog/${article.slug}`);

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "es_ES",
      url,
      siteName: siteConfig.name,
      title: article.title,
      description: article.description,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author.name],
      images: [
        {
          url: getAbsoluteUrl(article.image),
          width: 1200,
          height: 630,
          alt: article.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [getAbsoluteUrl(article.image)],
    },
  };
}

export function getBlogCategoryMetadata(category: BlogCategory): Metadata {
  const url = getAbsoluteUrl(`/blog/categoria/${category.slug}`);
  const title = `${category.name} | Blog Pintura Torrevieja`;

  return {
    title,
    description: category.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      siteName: siteConfig.name,
      title,
      description: category.description,
      images: [
        {
          url: getAbsoluteUrl("/images/hero-paint-repair.webp"),
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: category.description,
      images: [getAbsoluteUrl("/images/hero-paint-repair.webp")],
    },
  };
}

export function getBlogArticleStructuredData(article: BlogArticle) {
  const url = getAbsoluteUrl(`/blog/${article.slug}`);
  const category = getBlogCategory(article.category);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: article.h1,
      description: article.description,
      image: getAbsoluteUrl(article.image),
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      author: {
        "@type": "Organization",
        name: article.author.name,
        url: article.author.url,
      },
      publisher: {
        "@id": `${siteConfig.url}/#autobodyshop`,
      },
      mainEntityOfPage: {
        "@id": `${url}#webpage`,
      },
      articleSection: category?.name,
      inLanguage: "es",
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: article.title,
      description: article.description,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${url}#article`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: siteConfig.businessName,
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: getAbsoluteUrl("/blog"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.h1,
          item: url,
        },
      ],
    },
  ];

  if (article.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: article.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function getBlogIndexStructuredData(category?: BlogCategory) {
  const url = getAbsoluteUrl(category ? `/blog/categoria/${category.slug}` : "/blog");
  const name = category ? `Blog: ${category.name}` : "Blog de pintura y carroceria";
  const description = category?.description ?? blogIndexMetadata.description;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: siteConfig.businessName,
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: getAbsoluteUrl("/blog"),
          },
          ...(category
            ? [
                {
                  "@type": "ListItem",
                  position: 3,
                  name: category.name,
                  item: url,
                },
              ]
            : []),
        ],
      },
    ],
  };
}

export const blogWhatsappUrl = createWhatsAppUrl(
  "Hola PINTURA TORREVIEJA. Tengo una duda sobre pintura o reparacion de mi coche. Puedo enviar fotos por WhatsApp.",
);
