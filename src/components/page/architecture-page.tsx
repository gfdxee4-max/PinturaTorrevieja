import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import {
  type ArchitecturePage as ArchitecturePageData,
  getArchitectureStructuredData,
  getArchitectureWhatsappUrl,
} from "@/config/architecture";
import { siteConfig } from "@/config/site";

type ArchitecturePageProps = {
  page: ArchitecturePageData;
};

export function ArchitecturePage({ page }: ArchitecturePageProps) {
  const whatsappUrl = getArchitectureWhatsappUrl(page);

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
          <nav className="hidden items-center gap-5 sm:flex" aria-label="Secciones">
            <Link
              href="/servicios"
              className="text-xs font-black uppercase tracking-[0.12em] text-white/70 transition hover:text-white"
            >
              Servicios
            </Link>
            <Link
              href="/ciudades"
              className="text-xs font-black uppercase tracking-[0.12em] text-white/70 transition hover:text-white"
            >
              Ciudades
            </Link>
            <Link
              href="/contacto"
              className="text-xs font-black uppercase tracking-[0.12em] text-white/70 transition hover:text-white"
            >
              Contacto
            </Link>
          </nav>
        </Container>
      </header>

      <main className="bg-black text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(229,9,20,0.2),transparent_28%),linear-gradient(90deg,#000_0%,rgba(0,0,0,0.94)_42%,rgba(0,0,0,0.5)_100%)]" />
          <Container className="relative grid min-h-[34rem] items-center gap-8 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-redline">
                {page.eyebrow}
              </p>
              <h1 className="mt-5 text-[clamp(2.6rem,6.2vw,6rem)] font-black uppercase leading-[0.92] tracking-normal text-white">
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
                  {page.cta}
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded border border-white/22 px-6 text-sm font-black uppercase tracking-[0.06em] text-white transition hover:border-white/55"
                >
                  Servicios
                  <ArrowRight className="size-5" aria-hidden="true" />
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
            <div className="rounded border border-white/12 bg-white/[0.035] p-6 shadow-soft sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/52">
                Enlaces internos
              </p>
              <div className="mt-5 grid gap-3">
                {page.links.slice(0, 5).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded border border-white/12 bg-black/30 p-4 transition hover:border-redline/70"
                  >
                    <span className="flex items-center justify-between gap-4 text-base font-black uppercase leading-6 text-white">
                      {item.label}
                      <ArrowRight
                        className="size-4 shrink-0 text-redline transition group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                    {item.text ? (
                      <span className="mt-2 block text-sm leading-6 text-white/62">{item.text}</span>
                    ) : null}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="border-b border-white/10 py-12 sm:py-16">
          <Container>
            <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <Link
                  href="/es"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-white/58 transition hover:text-white"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Inicio
                </Link>
                <h2 className="mt-5 text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                  Informacion clara antes de reparar.
                </h2>
                <p className="mt-5 text-base leading-7 text-white/64">
                  Cada pagina esta pensada para ayudar a elegir el siguiente paso sin promesas
                  inventadas: enviar fotos, comparar servicios o pedir una consulta.
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

        {page.links.length > 5 ? (
          <section className="border-b border-white/10 py-12 sm:py-16">
            <Container>
              <h2 className="text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
                Paginas relacionadas
              </h2>
              <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {page.links.slice(5).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded border border-white/12 bg-white/[0.035] p-5 transition hover:border-redline/70"
                  >
                    <span className="flex items-center justify-between gap-4 text-lg font-black uppercase leading-6 text-white">
                      {item.label}
                      <ArrowRight
                        className="size-5 shrink-0 text-redline transition group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                    {item.text ? (
                      <span className="mt-3 block text-sm leading-6 text-white/68">{item.text}</span>
                    ) : null}
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        {page.faq?.length ? (
          <section id="faq" className="border-b border-white/10 py-12 sm:py-16">
            <Container>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-redline">FAQ</p>
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
                    <Check className="size-6 text-redline" aria-hidden="true" />
                    <h3 className="mt-4 text-base font-black leading-6 text-white">
                      {item.question}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/68">{item.answer}</p>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        <section className="py-12 sm:py-16">
          <Container>
            <div className="rounded border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.018))] p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/58">
                Consulta
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
                {page.cta}
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black py-8">
        <Container className="flex flex-col gap-4 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-chrome">
            {siteConfig.name}
          </p>
          <Link href="/contacto" className="font-bold text-white/70 transition hover:text-white">
            Contacto
          </Link>
        </Container>
      </footer>

      <FloatingWhatsApp whatsappUrl={whatsappUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getArchitectureStructuredData(page)) }}
      />
    </>
  );
}
