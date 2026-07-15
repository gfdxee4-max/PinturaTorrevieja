import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Locale } from "@/config/i18n";
import { comparisonSectionTranslations, serviceSectionTranslations } from "@/config/service-section-i18n";

export function ServicesSection({ locale }: { locale: Locale }) {
  const copy = serviceSectionTranslations[locale];
  const comparison = comparisonSectionTranslations[locale];

  return (
    <Section id="services" className="relative isolate scroll-mt-24 overflow-hidden border-b border-white/[0.08] bg-[#050505] py-10 sm:py-12 lg:py-6">
      <Container className="!max-w-none !px-3 sm:!px-4 lg:!px-3">
        <header className="mx-auto mb-5 text-center sm:mb-7 lg:mb-4">
          <div className="mx-auto w-fit uppercase" aria-label="PaintLab Torrevieja">
            <p className="text-lg font-medium tracking-[0.46em] text-white sm:text-2xl">
              Paint<span className="text-redline">Lab</span>
            </p>
            <p className="mt-1 text-[0.55rem] tracking-[0.7em] text-white/72 sm:text-[0.65rem]">Torrevieja</p>
          </div>

          <h2 className="mt-5 font-serif text-[clamp(2.25rem,5.2vw,4.9rem)] font-normal uppercase leading-[0.98] tracking-normal text-white sm:mt-7">
            <span className="text-redline">{comparison.titleStart}</span>{" "}
            <span className="silver-text">{comparison.titleMiddle}</span>{" "}
            <span className="text-redline">{comparison.titleEnd}</span>
          </h2>
          <span className="mx-auto mt-4 block h-px w-36 bg-[linear-gradient(90deg,transparent,#d60000,transparent)] sm:mt-5" />
          <p className="mt-4 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-white/48 sm:text-xs sm:tracking-[0.38em]">
            {comparison.subtitle}
          </p>
        </header>

        <BeforeAfterSlider
          beforeImage="/images/services/before.webp"
          afterImage="/images/services/after.webp"
          beforeAlt={copy.beforeAlt}
          afterAlt={copy.afterAlt}
          initialPosition={50}
          ariaLabel={copy.sliderLabel}
          beforeLabel={comparison.beforeLabel}
          afterLabel={comparison.afterLabel}
        />
      </Container>
    </Section>
  );
}
