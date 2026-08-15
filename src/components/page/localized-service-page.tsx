import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  ChevronRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  SprayCan,
} from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import {
  getLocalizedServiceAlternate,
  getLocalizedServicePath,
  localizedServicePageUi,
  type LocalizedServicePage as LocalizedServicePageData,
} from "@/config/localized-service-pages";
import { dictionaries, localizedPath } from "@/config/i18n";
import { getProjectPath, getProjectsPath } from "@/config/projects-i18n";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { getLocalizedServiceStructuredData } from "@/lib/localized-service-seo";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type LocalizedServicePageProps = {
  page: LocalizedServicePageData;
};

const benefitIcons = [ShieldCheck, SprayCan, Camera] as const;

export function LocalizedServicePage({ page }: LocalizedServicePageProps) {
  const dictionary = dictionaries[page.locale];
  const ui = localizedServicePageUi[page.locale];
  const currentPath = getLocalizedServicePath(page);
  const alternate = getLocalizedServiceAlternate(page);
  const whatsappUrl = createWhatsAppUrl(page.whatsapp);
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      <Header
        dictionary={dictionary}
        locale={page.locale}
        activeItem="services"
        languagePath={(targetLocale) => {
          if (targetLocale === page.locale) return currentPath;
          if (alternate && targetLocale === alternate.locale) {
            return getLocalizedServicePath(alternate);
          }
          return localizedPath(targetLocale);
        }}
      />

      <main className="min-h-screen bg-[#050505] text-white">
        <section className="relative isolate overflow-hidden border-b border-white/[0.09]">
          <Image
            src={page.heroImage}
            alt={page.heroAlt}
            fill
            priority
            fetchPriority="high"
            quality={88}
            sizes="100vw"
            className="-z-30 object-cover object-center"
          />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.96)_46%,rgba(5,5,5,0.62)_74%,rgba(5,5,5,0.34)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#050505_0%,transparent_48%)]" />

          <Container className="flex min-h-[35rem] items-center py-14 sm:min-h-[40rem] sm:py-20">
            <div className="max-w-4xl">
              <nav
                aria-label="Breadcrumb"
                className="mb-8 flex items-center gap-3 text-xs font-semibold text-white/58"
              >
                <Link href={localizedPath(page.locale)} className="transition hover:text-white">
                  {ui.home}
                </Link>
                <ChevronRight className="size-4 text-redline" aria-hidden="true" />
                <span className="text-white/86">{page.h1}</span>
              </nav>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff4d4d]">
                {page.eyebrow}
              </p>
              <h1 className="silver-text mt-5 max-w-4xl text-4xl font-semibold uppercase leading-[1.02] sm:text-5xl lg:text-6xl xl:text-7xl">
                {page.h1}
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-white/74 sm:text-lg sm:leading-9">
                {page.lead}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center gap-3 bg-redline px-6 text-sm font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-[#f00000]"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  {ui.whatsapp}
                </Link>
                <Link
                  href={`tel:${siteConfig.schemaTelephone}`}
                  className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/22 px-6 text-sm font-semibold uppercase tracking-[0.06em] text-white transition hover:border-white/55"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {siteConfig.telephone}
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-b border-white/[0.09] py-12 sm:py-16">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff4d4d]">
              {ui.benefitsEyebrow}
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl">
              {ui.benefitsTitle}
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {page.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index];
                return (
                  <article
                    key={benefit.title}
                    className="rounded-[6px] border border-white/14 bg-white/[0.035] p-6"
                  >
                    <Icon className="size-8 text-redline" strokeWidth={1.4} aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-semibold leading-7 text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/64">{benefit.text}</p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="border-b border-white/[0.09] py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff4d4d]">
                  {ui.detailsEyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl">
                  {ui.detailsTitle}
                </h2>
              </div>
              <div className="grid gap-9">
                {page.sections.map((section) => (
                  <article key={section.heading} className="border-l border-redline/70 pl-5 sm:pl-7">
                    <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-8 text-white/68">
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

        <section className="border-b border-white/[0.09] py-12 sm:py-16">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff4d4d]">
              {ui.processEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl">
              {ui.processTitle}
            </h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {page.process.map((step, index) => (
                <li key={step.title} className="border-t border-white/18 pt-5">
                  <span className="text-sm font-semibold text-redline">0{index + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{step.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="border-b border-white/[0.09] py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff4d4d]">
                  {ui.projectsEyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl">
                  {ui.projectsTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/64">
                  {ui.projectsText}
                </p>
              </div>
              <Link
                href={getProjectsPath(page.locale)}
                className="inline-flex min-h-11 items-center gap-2 border-b border-redline/70 text-sm font-semibold text-white transition hover:border-redline hover:text-redline"
              >
                {ui.allProjects}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <article
                  key={project.slug}
                  className="overflow-hidden rounded-[6px] border border-white/14 bg-[#0a0a0a]"
                >
                  <div className="relative aspect-video border-b border-white/12 bg-black">
                    <Image
                      src={project.afterImage}
                      alt={project.altAfter[page.locale]}
                      fill
                      loading="lazy"
                      quality={88}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#ff4d4d]">
                      {project.category[page.locale]}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-7 text-white">
                      {project.title[page.locale]}
                    </h3>
                    <p className="mt-2 text-sm text-white/52">{project.vehicle}</p>
                    <Link
                      href={getProjectPath(page.locale, project.slug)}
                      className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white transition hover:text-redline"
                    >
                      {ui.viewProject}
                      <ArrowRight className="size-4 text-redline" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-b border-white/[0.09] py-12 sm:py-16">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff4d4d]">
                  {ui.relatedEyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl">
                  {ui.relatedTitle}
                </h2>
                <nav className="mt-7 grid gap-3" aria-label={ui.relatedTitle}>
                  {page.relatedLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group border-b border-white/14 py-4 transition hover:border-redline/70"
                    >
                      <span className="flex items-center justify-between gap-4 text-lg font-semibold text-white">
                        {item.label}
                        <ArrowRight
                          className="size-5 shrink-0 text-redline transition group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-white/60">{item.text}</span>
                    </Link>
                  ))}
                </nav>
              </div>

              <div id="faq">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff4d4d]">
                  FAQ
                </p>
                <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl">
                  {ui.faqTitle}
                </h2>
                <div className="mt-7 divide-y divide-white/12 border-y border-white/12">
                  {page.faq.map((item) => (
                    <article key={item.question} className="py-5">
                      <h3 className="text-base font-semibold leading-7 text-white">{item.question}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/64">{item.answer}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-b border-white/[0.09] bg-[#080808] py-12 sm:py-16">
          <Container>
            <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="min-w-0">
                <h2 className="max-w-4xl text-2xl font-semibold uppercase leading-tight text-white [overflow-wrap:anywhere] sm:text-4xl">
                  {ui.ctaTitle}
                </h2>
                <p className="mt-4 max-w-4xl text-base leading-8 text-white/66">{ui.ctaText}</p>
              </div>
              <div className="flex min-w-0 flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 w-full min-w-0 items-center justify-center gap-3 bg-redline px-4 text-center text-sm font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-[#f00000] sm:px-6"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  {ui.whatsapp}
                </Link>
                <Link
                  href={`tel:${siteConfig.schemaTelephone}`}
                  className="inline-flex min-h-14 w-full min-w-0 items-center justify-center gap-3 border border-white/22 px-4 text-center text-sm font-semibold uppercase tracking-[0.06em] text-white transition hover:border-white/55 sm:px-6"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {ui.phone}
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer dictionary={dictionary} locale={page.locale} whatsappUrl={whatsappUrl} />
      <FloatingWhatsApp whatsappUrl={whatsappUrl} locale={page.locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getLocalizedServiceStructuredData(page)),
        }}
      />
    </>
  );
}
