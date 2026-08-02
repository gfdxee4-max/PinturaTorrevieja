import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Locale } from "@/config/i18n";
import { comparisonSectionTranslations, serviceSectionTranslations } from "@/config/service-section-i18n";

export function ServicesSection({ locale }: { locale: Locale }) {
  const copy = serviceSectionTranslations[locale];
  const comparison = comparisonSectionTranslations[locale];

  return (
    <Section id="services" className="relative isolate scroll-mt-24 overflow-hidden border-b border-white/[0.08] bg-[#030303] py-12 sm:py-16 lg:py-12">
      <Container className="!max-w-none !px-3 sm:!px-5 lg:!px-6">
        <header className="mx-auto mb-7 text-center sm:mb-9 lg:mb-7">
          <h2 className="font-serif text-[clamp(2.55rem,5.6vw,6.1rem)] font-normal uppercase leading-[0.94] tracking-normal text-white">
            <span className="text-redline">{comparison.titleStart}</span>{" "}
            <span className="silver-text">{comparison.titleMiddle}</span>{" "}
            <span className="text-redline">{comparison.titleEnd}</span>
          </h2>
          <span className="mx-auto mt-5 block h-px w-40 bg-[linear-gradient(90deg,transparent,#d60000,transparent)] sm:mt-6 sm:w-48" />
          <p className="mt-5 text-[0.62rem] font-medium uppercase tracking-[0.24em] text-white/58 sm:text-xs sm:tracking-[0.38em]">
            {comparison.subtitle}
          </p>
        </header>

        <BeforeAfterSlider
          beforeImage="/images/services/tesla-before.webp"
          afterImage="/images/services/tesla-after.webp"
          beforeAlt={copy.beforeAlt}
          afterAlt={copy.afterAlt}
          initialPosition={50}
          ariaLabel={copy.sliderLabel}
          beforeLabel={comparison.beforeLabel}
          afterLabel={comparison.afterLabel}
          aspectClassName="aspect-[4/3] sm:aspect-video lg:aspect-[3/1]"
          beforeImageClassName="object-cover object-[63%_center] lg:object-center"
          afterImageClassName="object-cover object-[63%_center] lg:object-center"
          imageQuality={100}
          sizes="(min-width: 1800px) calc(100vw - 3rem), (min-width: 768px) calc(100vw - 2.5rem), calc(100vw - 1.5rem)"
          className="shadow-[0_22px_70px_rgba(0,0,0,0.58)]"
        />

        <div className="mx-auto mt-7 max-w-3xl text-center sm:mt-8">
          <h3 className="text-[clamp(1.35rem,2.25vw,2rem)] font-semibold leading-tight text-white">
            {comparison.projectTitle}
          </h3>
          <p className="mt-2 text-base text-white/58 sm:text-lg">Tesla Model 3</p>
          <Link
            href="/trabajos-realizados"
            className="mx-auto mt-5 inline-flex min-h-14 w-full max-w-xl items-center justify-center gap-4 rounded-[7px] bg-redline px-6 text-sm font-semibold uppercase tracking-[0.04em] text-white transition hover:bg-[#ef0000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-redline focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:mt-6 sm:text-base"
          >
            {comparison.viewAllLabel}
            <ArrowRight className="size-5 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
