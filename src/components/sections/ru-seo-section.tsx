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

          <div className="mt-9 border-l-2 border-redline pl-5 sm:pl-7">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
              {ruHomeSeoContent.areaTitle}
            </h3>
            <p className="mt-3 max-w-5xl text-sm leading-7 text-white/60 sm:text-base">
              {ruHomeSeoContent.areaText}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
