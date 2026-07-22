import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/ui/brand-logo";
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
  const image = absoluteUrl("/images/og-image.webp");

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

function getServiceSchema(page: ServicePage) {
  const url = absoluteUrl(`/${page.slug}`);
  const businessId = `${siteConfig.url}/#autobodyshop`;
  const websiteId = `${siteConfig.url}/#website`;
  const pageId = `${url}#webpage`;
  const serviceId = `${url}#service`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url,
        name: page.title,
        description: page.description,
        inLanguage: "es",
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": businessId,
        },
        mainEntity: {
          "@id": serviceId,
        },
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: page.serviceName,
        serviceType: page.serviceName,
        description: page.description,
        areaServed: {
          "@type": "City",
          name: "Torrevieja",
        },
        provider: {
          "@id": businessId,
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
            item: {
              "@id": businessId,
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.h1,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
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

export function ServiceLandingPage({ page }: ServiceLandingPageProps) {
  const whatsappUrl = createWhatsAppUrl(page.whatsapp);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/88 backdrop-blur-xl">
        <Container className="flex min-h-[5.8rem] items-center justify-between gap-4 py-3">
          <BrandLogo priority />
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
                PAINTLAB TORREVIEJA
              </p>
              <h1 className="silver-text mt-5 text-[clamp(2.7rem,7vw,6.8rem)] font-black uppercase leading-[0.92] tracking-normal">
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
                <Link
                  href={`tel:${siteConfig.telephone.replace(/\s/g, "")}`}
                  className="inline-flex h-14 items-center justify-center gap-3 rounded border border-white/22 px-6 text-sm font-black uppercase tracking-[0.06em] text-white transition hover:border-white/55"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  Llamar
                </Link>
              </div>
            </div>
            <div className="relative min-h-[23rem] overflow-hidden rounded border border-white/12 shadow-soft sm:min-h-[34rem] lg:min-h-[43rem]">
              <Image
                src={page.image}
                alt={page.h1}
                fill
                priority
                fetchPriority="high"
                loading="eager"
                sizes="(min-width: 1280px) 54vw, (min-width: 1024px) 52vw, 100vw"
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

        <section className="border-b border-white/10 py-12 sm:py-16">
          <Container>
            <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-redline">
                  Detalles del servicio
                </p>
                <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                  Informacion clara antes de reparar.
                </h2>
                <p className="mt-5 text-base leading-7 text-white/64">
                  Revisamos el vehiculo, explicamos el alcance del trabajo y orientamos la
                  decision entre reparar, pintar o pulir segun el estado real de la carroceria.
                </p>
              </div>
              <div className="grid gap-5">
                {page.sections.map((section) => (
                  <article
                    key={section.heading}
                    className="rounded border border-white/12 bg-white/[0.03] p-6 sm:p-7"
                  >
                    <h2 className="text-2xl font-black uppercase leading-tight text-white">
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-8 text-white/72">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="border-b border-white/10 py-12 sm:py-16">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/58">
                  Proceso
                </p>
                <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                  Trabajo ordenado de principio a fin.
                </h2>
                <div className="mt-6 grid gap-3">
                  {page.process.map((step, index) => (
                    <article
                      key={step.title}
                      className="grid grid-cols-[3rem_1fr] gap-4 rounded border border-white/12 bg-white/[0.035] p-5"
                    >
                      <span className="flex size-12 items-center justify-center rounded bg-redline text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-black uppercase leading-6 text-white">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-white/68">{step.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/58">
                  Servicios relacionados
                </p>
                <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                  Enlaces utiles para comparar opciones.
                </h2>
                <div className="mt-6 grid gap-3">
                  {page.relatedLinks.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      className="group rounded border border-white/12 bg-white/[0.035] p-5 transition hover:border-redline/70"
                    >
                      <span className="flex items-center justify-between gap-4 text-lg font-black uppercase leading-6 text-white">
                        {item.label}
                        <ArrowRight
                          className="size-5 shrink-0 text-redline transition group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="mt-3 block text-sm leading-6 text-white/68">
                        {item.text}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="faq" className="border-b border-white/10 py-12 sm:py-16">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-redline">
                FAQ
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Preguntas frecuentes
              </h2>
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {page.faq.map((item) => (
                <article
                  key={item.question}
                  className="rounded border border-white/12 bg-white/[0.035] p-5"
                >
                  <h3 className="text-base font-black leading-6 text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">{item.answer}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-3 rounded bg-redline px-6 text-xs font-black uppercase tracking-[0.06em] text-white shadow-red transition hover:-translate-y-0.5 hover:bg-[#ff101b]"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Consultar por WhatsApp
              </Link>
              <Link
                href={`tel:${siteConfig.telephone.replace(/\s/g, "")}`}
                className="inline-flex h-12 items-center justify-center gap-3 rounded border border-white/22 px-6 text-xs font-black uppercase tracking-[0.06em] text-white transition hover:border-white/55"
              >
                <Phone className="size-5" aria-hidden="true" />
                {siteConfig.telephone}
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
