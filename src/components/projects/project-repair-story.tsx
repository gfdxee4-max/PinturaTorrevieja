import Link from "next/link";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Container } from "@/components/ui/container";
import { getProjectsPath, projectsTranslations } from "@/config/projects-i18n";
import type { Locale } from "@/config/locales";
import type { Project } from "@/data/projects";

type ComparisonProject = Extract<Project, { beforeImage: string }>;

export function ProjectRepairStory({ project, locale, whatsappUrl }: { project: ComparisonProject; locale: Locale; whatsappUrl: string }) {
  const copy = projectsTranslations[locale];
  return (
    <section className="py-10 sm:py-14 lg:py-16" data-project-story>
      <Container>
        <div className="mx-auto max-w-3xl space-y-10">
          <div data-main-comparison>
            <BeforeAfterSlider
              beforeImage={project.beforeImage} afterImage={project.afterImage}
              beforeAlt={project.altBefore[locale]} afterAlt={project.altAfter[locale]}
              beforeLabel={copy.before} afterLabel={copy.after}
              ariaLabel={`${project.title[locale]} — ${copy.before} / ${copy.after}`}
              aspectClassName="aspect-[3/4]" beforeImageClassName="object-contain" afterImageClassName="object-contain"
              imageQuality={project.imageQuality ?? 90} sizes="(min-width: 832px) 768px, calc(100vw - 2.5rem)" priority
            />
          </div>
          <div className="space-y-4 text-base leading-8 text-white/70" data-project-description>
            {project.fullDescription[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <section data-project-services>
            <h2 className="text-xl font-semibold">{copy.services}</h2>
            <ul className="mt-5 grid gap-3">
              {project.services[locale].map((service) => (
                <li key={service} className="grid grid-cols-[1.25rem_1fr] gap-3 text-sm leading-6 text-white/66">
                  <Check className="mt-0.5 size-4 text-redline" aria-hidden="true" />{service}
                </li>
              ))}
            </ul>
          </section>
          {project.comparisons?.map((comparison) => (
            <section key={comparison.id} data-additional-comparison>
              <h2 className="mb-5 text-xl font-semibold">{comparison.title[locale]}</h2>
              <BeforeAfterSlider
                beforeImage={comparison.beforeImage} afterImage={comparison.afterImage}
                beforeAlt={comparison.altBefore[locale]} afterAlt={comparison.altAfter[locale]}
                beforeLabel={copy.before} afterLabel={copy.after}
                ariaLabel={`${comparison.title[locale]} — ${copy.before} / ${copy.after}`}
                aspectClassName="aspect-[3/4]" beforeImageClassName="object-contain" afterImageClassName="object-contain"
                imageQuality={project.imageQuality ?? 90} sizes="(min-width: 832px) 768px, calc(100vw - 2.5rem)"
              />
            </section>
          ))}
          <section className="rounded-[6px] border border-white/14 bg-[#0a0a0a] p-6" data-project-cta>
            <h2 className="text-xl font-semibold">{copy.ctaTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">{project.ctaText?.[locale] ?? copy.ctaText}</p>
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-redline px-4 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#f00000]">
              <MessageCircle className="size-5" aria-hidden="true" />{copy.ctaButton}
            </Link>
          </section>
          <Link href={getProjectsPath(locale)} className="inline-flex min-h-11 items-center gap-2 border border-white/18 px-4 text-xs font-semibold uppercase tracking-[0.08em] text-white/78 transition hover:border-redline hover:text-white">
            <ArrowLeft className="size-4 text-redline" aria-hidden="true" />{copy.backToWorks}
          </Link>
        </div>
      </Container>
    </section>
  );
}
