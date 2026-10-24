import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ChevronRight, MessageCircle } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { ProjectVideo } from "@/components/projects/project-video";
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

function LinkedSectionText({ text, links }: { text: string; links?: readonly { href: string; label: string }[] }) {
  if (!links?.length) return text;

  const pattern = new RegExp(`(${links.map((link) => link.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  return text.split(pattern).map((part, index) => {
    const link = links.find((item) => item.label === part);
    return link
      ? <Link key={`${link.href}-${index}`} href={link.href} className="font-medium text-white underline decoration-redline/70 underline-offset-4 transition hover:text-[#ff4d4d]">{part}</Link>
      : part;
  });
}

export function ProjectDetailPage({ locale, project }: ProjectDetailPageProps) {
  const copy = projectsTranslations[locale];
  const dictionary = dictionaries[locale];
  const whatsappUrl = createWhatsAppUrl(dictionary.whatsapp);
  const descriptions = project.fullDescription[locale];
  const relatedLinks = project.relatedLinks?.[locale];

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
          <Image src={project.mediaKind === "gallery" ? project.afterImage : "/images/hero-works-premium.webp"} alt="" fill priority quality={95} sizes="100vw" className="-z-30 object-cover object-[72%_center] opacity-70" />
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.96)_42%,rgba(5,5,5,0.45)_100%)]" />
          <Container className="flex min-h-[25rem] items-center py-14 sm:min-h-[29rem]">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff4d4d]">{copy.caseLabel}</p>
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
            {project.mediaKind === "gallery" ? (
              <section aria-labelledby="project-gallery-heading">
                <h2 id="project-gallery-heading" className="mb-6 text-xl font-semibold sm:text-2xl">{project.galleryTitle[locale]}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-project-gallery>
                  {project.gallery.map((photo) => (
                    <a key={photo.src} href={photo.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-[6px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-redline">
                      <Image
                        src={photo.src}
                        alt={photo.alt[locale]}
                        width={photo.width}
                        height={photo.height}
                        quality={project.imageQuality ?? 95}
                        loading="lazy"
                        sizes="(min-width: 1800px) 560px, (min-width: 1024px) 32vw, (min-width: 640px) 48vw, calc(100vw - 2.5rem)"
                        className="aspect-[3/4] h-auto w-full object-contain"
                      />
                    </a>
                  ))}
                </div>
              </section>
            ) : <div className={project.comparisons?.length ? "mx-auto max-w-3xl" : undefined}>
              {project.comparisonTitle ? <h2 className="mb-4 text-xl font-semibold">{project.comparisonTitle[locale]}</h2> : null}
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                beforeAlt={project.altBefore[locale]}
                afterAlt={project.altAfter[locale]}
                beforeLabel={copy.before}
                afterLabel={copy.after}
                ariaLabel={`${project.title[locale]} — ${copy.before} / ${copy.after}`}
                aspectClassName={project.comparisonLayout === "portrait" ? "aspect-[3/4]" : "aspect-[4/3] sm:aspect-video"}
                beforeImageClassName={project.beforeImageClassName ?? "object-contain"}
                afterImageClassName={project.afterImageClassName ?? "object-contain"}
                beforeObjectPosition={project.beforeObjectPosition ?? "50% 50%"}
                afterObjectPosition={project.afterObjectPosition ?? "50% 50%"}
                imageQuality={project.imageQuality ?? 90}
                sizes="(min-width: 1800px) 1728px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2rem)"
                priority
              />
            </div>}
            {project.comparisons?.length ? (
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {project.comparisons.map((comparison) => (
                  <section key={comparison.id}>
                    {comparison.showTitle !== false ? <h2 className="mb-4 text-xl font-semibold">{comparison.title[locale]}</h2> : null}
                    <BeforeAfterSlider
                      beforeImage={comparison.beforeImage}
                      afterImage={comparison.afterImage}
                      beforeAlt={comparison.altBefore[locale]}
                      afterAlt={comparison.altAfter[locale]}
                      beforeLabel={copy.before}
                      afterLabel={copy.after}
                      ariaLabel={`${comparison.title[locale]} — ${copy.before} / ${copy.after}`}
                      aspectClassName={project.comparisonLayout === "portrait" ? "aspect-[3/4]" : "aspect-[4/3] sm:aspect-video"}
                      beforeImageClassName="object-contain"
                      afterImageClassName="object-contain"
                      imageQuality={project.imageQuality ?? 90}
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </section>
                ))}
              </div>
            ) : null}

            {project.location ? (
              <p className="mt-5 text-sm font-medium text-white/64">
                {project.vehicle} <span className="mx-2 text-redline" aria-hidden="true">/</span> {project.location}
              </p>
            ) : null}

            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
              {project.mediaKind === "gallery" ? (
                <div>
                  <h2 className="text-xl font-semibold">{project.title[locale]}</h2>
                  {descriptions.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-7 text-white/70">{paragraph}</p>)}
                  {project.video ? (
                    <section className="mt-8" aria-labelledby="project-video-heading">
                      <h2 id="project-video-heading" className="mb-5 text-xl font-semibold">{project.video.title[locale]}</h2>
                      <ProjectVideo videoId={project.video.id} title={project.video.title[locale]} playLabel={project.video.playLabel[locale]} poster={project.afterImage} />
                    </section>
                  ) : null}
                </div>
              ) : project.detailSections?.length ? (
                <div>
                  {descriptions.map((paragraph) => <p key={paragraph} className="text-base leading-7 text-white/70">{paragraph}</p>)}
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {project.detailSections.map((section, index) => (
                      <article key={section.id} className="rounded-[6px] border border-white/14 bg-[#0a0a0a] p-6">
                        <span className="text-xs font-semibold tracking-[0.16em] text-[#ff4d4d]">{String(index + 1).padStart(2, "0")}</span>
                        <h2 className="mt-3 text-lg font-semibold leading-6 text-white">{section.title[locale]}</h2>
                        <p className="mt-4 text-sm leading-7 text-white/64">
                          <LinkedSectionText text={section.text[locale]} links={section.links?.[locale]} />
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              ) : <div className="grid gap-4 md:grid-cols-3">
                {[copy.beforeState, copy.workPerformed, copy.result].map((heading, index) => (
                  <article key={heading} className="rounded-[6px] border border-white/14 bg-[#0a0a0a] p-6">
                    <span className="text-xs font-semibold tracking-[0.16em] text-[#ff4d4d]">0{index + 1}</span>
                    <h2 className="mt-3 text-lg font-semibold leading-6 text-white">{heading}</h2>
                    <p className="mt-4 text-sm leading-7 text-white/64">{descriptions[index]}</p>
                  </article>
                ))}
              </div>}

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
                  {project.highlight ? (
                    <p className="mt-6 border-l-2 border-redline pl-4 text-sm font-semibold leading-6 text-white/82">
                      {project.highlight[locale]}
                    </p>
                  ) : null}
                </div>
                <div className="rounded-[6px] border border-white/14 bg-[#0a0a0a] p-6">
                  <h2 className="text-xl font-semibold leading-7 text-white">{copy.ctaTitle}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/60">{project.ctaText?.[locale] ?? copy.ctaText}</p>
                  <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-redline px-4 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#f00000]">
                    <MessageCircle className="size-5" aria-hidden="true" />
                    {copy.ctaButton}
                  </Link>
                </div>
                {relatedLinks?.length && project.relatedServicesTitle?.[locale] ? (
                  <nav className="rounded-[6px] border border-white/14 bg-[#0a0a0a] p-6" aria-label={project.relatedServicesTitle[locale]}>
                    <h2 className="text-lg font-semibold text-white">{project.relatedServicesTitle[locale]}</h2>
                    <div className="mt-4 grid gap-2">
                      {relatedLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center justify-between border-b border-white/10 py-2 text-sm text-white/68 transition hover:text-white">
                          {link.label}
                          <ChevronRight className="size-4 text-redline" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </nav>
                ) : null}
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
