import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ruHomeSeoContent } from "@/config/ru-home-seo";

export function RuSeoSection() {
  return (
    <Section
      id="ru-auto-body-service"
      className="border-b border-white/[0.08] bg-[#050505] py-14 sm:py-20"
      aria-labelledby="ru-auto-body-heading"
    >
      <Container>
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff4d4d]">
            {ruHomeSeoContent.eyebrow}
          </p>
          <h2
            id="ru-auto-body-heading"
            className="silver-text mt-4 max-w-4xl text-3xl font-semibold uppercase leading-tight sm:text-5xl"
          >
            {ruHomeSeoContent.title}
          </h2>

          <div className="mt-8 grid gap-5 text-base leading-8 text-white/66 lg:grid-cols-3">
            {ruHomeSeoContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}

export function RuServiceAreaNote() {
  return (
    <section
      aria-label="География клиентов PaintLab"
      className="border-b border-white/[0.08] bg-[#050505] py-8 sm:py-10"
    >
      <Container>
        <p className="mx-auto max-w-5xl text-sm leading-7 text-white/64 sm:text-base sm:leading-8">
          {ruHomeSeoContent.areaText}
        </p>
      </Container>
    </section>
  );
}
