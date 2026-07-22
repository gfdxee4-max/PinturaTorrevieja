import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ChevronRight, MessageCircle } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Container } from "@/components/ui/container";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { dictionaries, type Locale } from "@/config/i18n";
import { getProjectPath, getProjectsPath, projectsTranslations } from "@/config/projects-i18n";
import type { Project } from "@/data/projects";
import { getProjectStructuredData } from "@/lib/project-seo";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type ProjectDetailPageProps = {
  locale: Locale;
  project: Project;
};

export function ProjectDetailPage({ locale, project }: ProjectDetailPageProps) {
  const copy = projectsTranslations[locale];
  const dictionary = dictionaries[locale];
  const whatsappUrl = createWhatsAppUrl(dictionary.whatsapp);
  const descriptions = project.fullDescription[locale];

  return (
    <>
      <Header
        dictionary={dictionary}
        locale={locale}
        activeItem="works"
        languagePath={(item) => getProjectPath(item, project.slug)}
      />
      <main className="min-h-screen bg-[#050505] text-white">
        <section className="relative isolate overflow-hidden border-b border-white/[0.08]">
          <Image src="/images/hero-works-premium.webp" alt="" fill priority quality={95} sizes="100vw" className="-z-30 object-cover object-[72%_center] opacity-70" />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.96)_42%,rgba(5,5,5,0.45)_100%)]" />
          <Container className="flex min-h-[25rem] items-center py-14 sm:min-h-[29rem]">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-redline">{copy.caseLabel}</p>
              <h1 className="mt-4 text-[clamp(2.25rem,5.2vw,5rem)] font-semibold leading-[1.02] tracking-normal text-white">
                {project.headline[locale]}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{project.shortDescription[locale]}</p>
              <nav className="mt-9 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/55" aria-label="Breadcrumb">
                <Link href={`/${locale}`} className="transition hover:text-white">{copy.home}</Link>
                <ChevronRight className="size-4 text-redline" aria-hidden="true" />
                <Link href={getProjectsPath(locale)} className="transition hover:text-white">{copy.pageTitle}</Link>
                <ChevronRight className="size-4 text-redline" aria-hidden="true" />
                <span className="text-white/88">{project.vehicle}</span>
              </nav>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-14 lg:py-16">
          <Container>
            <BeforeAfterSlider
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              beforeAlt={project.altBefore[locale]}
              afterAlt={project.altAfter[locale]}
              beforeLabel={copy.before}
              afterLabel={copy.after}
              ariaLabel={copy.sliderAria}
              aspectClassName="aspect-[4/3] sm:aspect-video"
              beforeImageClassName="object-contain"
              afterImageClassName="object-contain"
              beforeObjectPosition="50% 50%"
              afterObjectPosition="50% 50%"
              imageQuality={95}
              sizes="(min-width: 1800px) 1728px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2rem)"
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
              <div className="grid gap-4 md:grid-cols-3">
                {[copy.beforeState, copy.workPerformed, copy.result].map((heading, index) => (
                  <article key={heading} className="rounded-[6px] border border-white/14 bg-[#0a0a0a] p-6">
                    <span className="text-xs font-semibold tracking-[0.16em] text-redline">0{index + 1}</span>
                    <h2 className="mt-3 text-lg font-semibold leading-6 text-white">{heading}</h2>
                    <p className="mt-4 text-sm leading-7 text-white/64">{descriptions[index]}</p>
                  </article>
                ))}
              </div>

              <aside className="grid gap-4 lg:sticky lg:top-28">
                <div className="rounded-[6px] border border-white/14 bg-[#0a0a0a] p-6">
                  <h2 className="text-lg font-semibold text-white">{copy.services}</h2>
                  <ul className="mt-5 grid gap-3">
                    {project.services[locale].map((service) => (
                      <li key={service} className="grid grid-cols-[1.25rem_1fr] gap-3 text-sm leading-6 text-white/66">
                        <Check className="mt-0.5 size-4 text-redline" strokeWidth={2} aria-hidden="true" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[6px] border border-white/14 bg-[#0a0a0a] p-6">
                  <h2 className="text-xl font-semibold leading-7 text-white">{copy.ctaTitle}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/60">{copy.ctaText}</p>
                  <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-redline px-4 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#f00000]">
                    <MessageCircle className="size-5" aria-hidden="true" />
                    {copy.ctaButton}
                  </Link>
                </div>
              </aside>
            </div>

            <Link href={getProjectsPath(locale)} className="mt-10 inline-flex min-h-11 items-center gap-2 border border-white/18 px-4 text-xs font-semibold uppercase tracking-[0.08em] text-white/78 transition hover:border-redline hover:text-white">
              <ArrowLeft className="size-4 text-redline" aria-hidden="true" />
              {copy.backToWorks}
            </Link>
          </Container>
        </section>
      </main>
      <Footer dictionary={dictionary} locale={locale} whatsappUrl={whatsappUrl} />
      <FloatingWhatsApp whatsappUrl={whatsappUrl} locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getProjectStructuredData(project, locale)) }} />
    </>
  );
}
