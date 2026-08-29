import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Clock3, MessageCircle, ShieldCheck, SprayCan, Youtube } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Container } from "@/components/ui/container";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { dictionaries, type Locale } from "@/config/i18n";
import {
  getProjectPath,
  getProjectsPath,
  projectsTranslations,
  projectsYoutubeTranslations,
} from "@/config/projects-i18n";
import { youtubeChannelUrl } from "@/config/social-links";
import type { Project } from "@/data/projects";
import { getProjectsStructuredData } from "@/lib/project-seo";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type ProjectsPageProps = {
  locale: Locale;
  projects: readonly Project[];
};

export function ProjectsPage({ locale, projects }: ProjectsPageProps) {
  const copy = projectsTranslations[locale];
  const youtubeCopy = projectsYoutubeTranslations[locale];
  const dictionary = dictionaries[locale];
  const whatsappUrl = createWhatsAppUrl(dictionary.whatsapp);
  const features = [
    { icon: ShieldCheck, title: copy.realTitle, text: copy.realText },
    { icon: SprayCan, title: copy.approachTitle, text: copy.approachText },
    { icon: Clock3, title: copy.timingTitle, text: copy.timingText },
  ];

  return (
    <>
      <Header
        dictionary={dictionary}
        locale={locale}
        activeItem="works"
        languagePath={(item) => getProjectsPath(item)}
      />
      <main className="min-h-screen bg-[#050505] text-white">
        <section className="relative isolate min-h-[25rem] overflow-hidden border-b border-white/[0.08] sm:min-h-[30rem]">
          <picture className="contents">
            <source media="(max-width: 639px)" srcSet="/images/hero-works-paint-booth.avif" type="image/avif" />
            <source srcSet="/images/hero-works-paint-booth.avif" type="image/avif" />
            <Image
              src="/images/hero-works-paint-booth.webp"
              alt=""
              fill
              loading="eager"
              fetchPriority="high"
              quality={95}
              sizes="(max-width: 639px) 100vw, 100vw"
              className="-z-30 object-cover object-[62%_center] sm:object-[50%_58%]"
            />
          </picture>
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.96)_42%,rgba(5,5,5,0.38)_72%,rgba(5,5,5,0.08)_100%)] sm:bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.98)_28%,rgba(5,5,5,0.46)_58%,rgba(5,5,5,0.08)_100%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#050505_0%,transparent_36%)]" />
          <Container className="flex min-h-[25rem] items-center py-14 sm:min-h-[30rem]">
            <div className="max-w-xl pt-4">
              <h1 className="text-[clamp(2.6rem,5.5vw,5.4rem)] font-semibold leading-[0.98] tracking-normal text-white">
                {copy.pageTitle}
              </h1>
              <p className="mt-6 max-w-md whitespace-pre-line text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                {copy.pageLead}
              </p>
              <nav className="mt-10 flex items-center gap-3 text-xs font-semibold text-white/60" aria-label="Breadcrumb">
                <Link href={`/${locale}`} className="transition hover:text-white">{copy.home}</Link>
                <ChevronRight className="size-4 text-redline" aria-hidden="true" />
                <span className="text-white/90">{copy.pageTitle}</span>
              </nav>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-14 lg:py-16">
          <Container>
            <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_19rem] xl:items-start">
              <div
                id="projects-grid"
                className="grid scroll-mt-28 gap-5 md:grid-cols-2 xl:grid-cols-3"
                data-project-grid
              >
                {projects.map((project) => (
                  <article
                    key={project.slug}
                    className="flex min-w-0 flex-col overflow-hidden rounded-[6px] border border-white/15 bg-[#0a0a0a]"
                    data-project-card
                    data-project-slug={project.slug}
                  >
                    <BeforeAfterSlider
                      beforeImage={project.beforeImage}
                      afterImage={project.afterImage}
                      beforeAlt={project.altBefore[locale]}
                      afterAlt={project.altAfter[locale]}
                      beforeLabel={copy.before}
                      afterLabel={copy.after}
                      ariaLabel={`${project.title[locale]} — ${copy.before} / ${copy.after}`}
                      aspectClassName="aspect-[8/5]"
                      beforeImageClassName={project.beforeImageClassName ?? "object-contain"}
                      afterImageClassName={project.afterImageClassName ?? "object-contain"}
                      beforeObjectPosition={project.beforeObjectPosition ?? "50% 50%"}
                      afterObjectPosition={project.afterObjectPosition ?? "50% 50%"}
                      imageQuality={project.imageQuality ?? 90}
                      sizes="(min-width: 1536px) 22rem, (min-width: 1280px) calc((100vw - 32rem) / 3), (min-width: 768px) calc((100vw - 7rem) / 2), calc(100vw - 2.5rem)"
                      className="rounded-none border-0 border-b border-white/15"
                    />
                    <Link
                      href={getProjectPath(locale, project.slug)}
                      className="group/card grid min-h-32 flex-1 grid-cols-[minmax(0,1fr)_2.75rem] items-center gap-3 p-4 transition hover:bg-white/[0.025] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-redline sm:min-h-36 sm:p-5"
                      aria-label={`${copy.viewProject}: ${project.title[locale]}, ${project.vehicle}`}
                    >
                      <div className="min-w-0">
                        <h2 className="text-base font-semibold leading-6 text-white">{project.title[locale]}</h2>
                        <p className="mt-2 text-sm leading-5 text-white/52">{project.vehicle}</p>
                      </div>
                      <span className="inline-flex size-11 items-center justify-center border border-white/15 text-redline transition group-hover/card:border-redline group-hover/card:bg-redline group-hover/card:text-white" aria-hidden="true">
                        <ArrowUpRight className="size-5" />
                      </span>
                    </Link>
                  </article>
                ))}
              </div>

              <aside className="grid gap-4 xl:sticky xl:top-28">
                <div className="rounded-[6px] border border-white/15 bg-[#0a0a0a] p-6">
                  <div className="grid gap-7">
                    {features.map(({ icon: Icon, title, text }) => (
                      <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4">
                        <Icon className="size-8 text-redline" strokeWidth={1.35} aria-hidden="true" />
                        <div>
                          <h2 className="text-sm font-semibold text-white">{title}</h2>
                          <p className="mt-1.5 text-sm leading-6 text-white/56">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[6px] border border-white/15 bg-[#0a0a0a] p-6">
                  <h2 className="text-xl font-semibold leading-7 text-white">{copy.ctaTitle}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/60">{copy.ctaText}</p>
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-redline px-4 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#f00000]"
                  >
                    <MessageCircle className="size-5" aria-hidden="true" />
                    {copy.ctaButton}
                  </Link>
                </div>
                <a
                  href={youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/18 px-4 text-center text-xs font-semibold uppercase tracking-[0.08em] text-white/76 transition hover:border-redline hover:bg-redline/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Youtube className="size-5 text-redline" aria-hidden="true" />
                  {youtubeCopy.sectionCta}
                </a>
              </aside>
            </div>

            {locale === "ru" ? (
              <p className="mt-7 text-sm leading-6 text-white/60">
                Подробнее о подготовке поверхности, окраске деталей и полной покраске автомобиля — в разделе{" "}
                <Link
                  href="/ru/avtopokraska-torrevieja"
                  className="font-semibold text-white underline decoration-redline/80 underline-offset-4 transition hover:text-redline"
                >
                  услуги автопокраски
                </Link>
                .
              </p>
            ) : null}

            <div className="mt-8 grid gap-5 rounded-[6px] border border-white/15 bg-[#0a0a0a] p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-8">
              <div>
                <h2 className="text-xl font-semibold leading-7 text-white sm:text-2xl">{youtubeCopy.title}</h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">{youtubeCopy.text}</p>
              </div>
              <a
                href={youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-redline px-5 text-center text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-redline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-w-52"
              >
                <Youtube className="size-5" aria-hidden="true" />
                {youtubeCopy.button}
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer dictionary={dictionary} locale={locale} whatsappUrl={whatsappUrl} />
      <FloatingWhatsApp whatsappUrl={whatsappUrl} locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getProjectsStructuredData(locale, projects)) }} />
    </>
  );
}
