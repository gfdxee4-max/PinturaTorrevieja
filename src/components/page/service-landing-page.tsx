import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import type { ServicePage } from "@/config/service-pages";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type ServiceLandingPageProps = {
  page: ServicePage;
};

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function getServicePageMetadata(page: ServicePage): Metadata {
  const url = absoluteUrl(`/${page.slug}`);
  const image = absoluteUrl(page.image);

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
      languages: {
        es: url,
      },
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      siteName: siteConfig.name,
      title: page.title,
      description: page.description,
      images: [
        {
          url: image,
          width: 1200,
          height: 900,
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

function getServiceSchema(page: ServicePage) {
  const url = absoluteUrl(`/${page.slug}`);
  const businessId = `${siteConfig.url}/#autobodyshop`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.serviceName,
        description: page.description,
        areaServed: {
          "@type": "City",
          name: "Torrevieja",
        },
        provider: {
          "@type": ["AutoBodyShop", "LocalBusiness"],
          "@id": businessId,
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
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
            name: page.h1,
            item: url,
          },
        ],
      },
    ],
  };
}

export function ServiceLandingPage({ page }: ServiceLandingPageProps) {
  const whatsappUrl = createWhatsAppUrl(page.whatsapp);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/88 backdrop-blur-xl">
        <Container className="flex min-h-[5.8rem] items-center justify-between gap-4 py-3">
          <Link href="/es" className="group shrink-0" aria-label="PINTURA TORREVIEJA">
            <span className="mb-1 block h-[2px] w-24 bg-redline transition group-hover:w-32" />
            <span className="block text-[1.2rem] font-black uppercase leading-none tracking-[0.04em] text-chrome sm:text-[1.65rem] lg:text-[1.9rem]">
              PINTURA
            </span>
            <span className="block text-[1.05rem] font-black uppercase leading-none tracking-[0.08em] text-redline sm:text-[1.38rem] lg:text-[1.55rem]">
              TORREVIEJA
            </span>
          </Link>
          <Link
            href="/es"
            className="hidden items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/70 transition hover:text-white sm:inline-flex"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Inicio
          </Link>
        </Container>
      </header>

      <main className="bg-black text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(229,9,20,0.2),transparent_28%),linear-gradient(90deg,#000_0%,rgba(0,0,0,0.94)_38%,rgba(0,0,0,0.45)_100%)]" />
          <Container className="relative grid min-h-[calc(100vh-5.8rem)] items-center gap-10 py-14 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-redline">
                PINTURA TORREVIEJA
              </p>
              <h1 className="mt-5 text-[clamp(2.7rem,7vw,6.8rem)] font-black uppercase leading-[0.92] tracking-normal text-white">
                {page.h1}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
                {page.lead}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded bg-redline px-6 text-sm font-black uppercase tracking-[0.06em] text-white shadow-red transition hover:-translate-y-0.5 hover:bg-[#ff101b]"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  WhatsApp
                </Link>
                <Link
                  href="/es#services"
                  className="inline-flex h-14 items-center justify-center rounded border border-white/22 px-6 text-sm font-black uppercase tracking-[0.06em] text-white transition hover:border-white/55"
                >
                  Servicios
                </Link>
              </div>
            </div>
            <div className="relative min-h-[23rem] overflow-hidden rounded border border-white/12 shadow-soft sm:min-h-[34rem] lg:min-h-[43rem]">
              <Image
                src={page.image}
                alt={page.h1}
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/44 via-transparent to-transparent" />
            </div>
          </Container>
        </section>

        <section className="border-b border-white/10 py-12 sm:py-16">
          <Container>
            <div className="grid gap-4 md:grid-cols-3">
              {page.points.map((point) => (
                <article
                  key={point}
                  className="rounded border border-white/12 bg-white/[0.035] p-6 shadow-soft"
                >
                  <Check className="size-7 text-redline" aria-hidden="true" />
                  <p className="mt-5 text-base font-bold leading-7 text-white/82">{point}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.018))] p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/58">
                Estimacion previa
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Envia fotos del vehiculo por WhatsApp.
              </h2>
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex h-12 items-center justify-center gap-3 rounded bg-redline px-6 text-xs font-black uppercase tracking-[0.06em] text-white shadow-red transition hover:-translate-y-0.5 hover:bg-[#ff101b]"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Solicitar valoracion
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <FloatingWhatsApp whatsappUrl={whatsappUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema(page)) }}
      />
    </>
  );
}
