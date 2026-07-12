import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Locale } from "@/config/i18n";
import { serviceSectionTranslations } from "@/config/service-section-i18n";

export function ServicesSection({ locale }: { locale: Locale }) {
  const copy = serviceSectionTranslations[locale];

  return (
    <Section id="services" className="scroll-mt-24 border-b border-white/[0.08] bg-[#050505]">
      <Container>
        <header className="mx-auto mb-10 max-w-[84rem] text-center sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-redline">{copy.eyebrow}</p>
          <span className="mx-auto mt-4 block h-px w-40 bg-[linear-gradient(90deg,transparent,#d60000,transparent)]" />
          <h2 className="silver-text mt-7 text-[clamp(2rem,3.1vw,3.5rem)] font-medium uppercase leading-[1.08]">
            <span>{copy.titleBase} </span>
            <span className="text-redline [-webkit-text-fill-color:#d60000]">{copy.titleAccent}</span>
          </h2>
        </header>

        <BeforeAfterSlider
          beforeImage="/images/services/before.webp"
          afterImage="/images/services/after.webp"
          beforeAlt={copy.beforeAlt}
          afterAlt={copy.afterAlt}
          initialPosition={50}
          ariaLabel={copy.sliderLabel}
        />

        <div className="mx-auto mt-9 grid max-w-6xl gap-5 lg:mt-10">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph} className="border-l border-redline/90 pl-5 text-sm leading-7 text-white/62 sm:pl-7 sm:text-base sm:leading-8">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
