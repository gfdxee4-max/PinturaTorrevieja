import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Clock3, MessageCircle, ShieldCheck, SprayCan } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Container } from "@/components/ui/container";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { dictionaries, type Locale } from "@/config/i18n";
import { getProjectPath, getProjectsPath, projectsTranslations } from "@/config/projects-i18n";
import type { Project } from "@/data/projects";
import { getProjectsStructuredData } from "@/lib/project-seo";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type ProjectsPageProps = {
  locale: Locale;
  projects: readonly Project[];
};

export function ProjectsPage({ locale, projects }: ProjectsPageProps) {
  const copy = projectsTranslations[locale];
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
          <Image
            src="/images/hero-works-premium.webp"
            alt=""
            fill
            priority
            quality={95}
            sizes="100vw"
            className="-z-30 object-cover object-[70%_center] sm:object-center"
          />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.95)_34%,rgba(5,5,5,0.58)_62%,rgba(5,5,5,0.18)_100%)]" />
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
              <div className="grid gap-6">
                {projects.map((project) => (
                  <article key={project.slug} className="overflow-hidden rounded-[6px] border border-white/15 bg-[#0a0a0a]">
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
                      sizes="(min-width: 1280px) calc(100vw - 24rem), (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2rem)"
                      className="rounded-none border-0 border-b border-white/15"
                    />
                    <div className="grid gap-5 p-5 sm:grid-cols-[1fr_auto] sm:items-end sm:p-7">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-redline">{project.category[locale]}</p>
                        <h2 className="mt-3 text-xl font-semibold leading-7 text-white sm:text-2xl">{project.title[locale]}</h2>
                        <p className="mt-2 text-sm text-white/52">{project.vehicle}</p>
                        <p className="mt-4 max-w-3xl text-sm leading-6 text-white/66">{project.shortDescription[locale]}</p>
                      </div>
                      <Link
                        href={getProjectPath(locale, project.slug)}
                        className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/18 px-4 text-xs font-semibold uppercase tracking-[0.09em] text-white transition hover:border-redline hover:text-white"
                      >
                        {copy.viewProject}
                        <ArrowUpRight className="size-4 text-redline" aria-hidden="true" />
                      </Link>
                    </div>
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
              </aside>
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
