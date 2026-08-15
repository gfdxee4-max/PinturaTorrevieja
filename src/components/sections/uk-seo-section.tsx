import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ukHomeSeoContent } from "@/config/uk-home-seo";

export function UkSeoSection() {
  return (
    <Section
      id="uk-auto-body-service"
      className="border-b border-white/[0.08] bg-[#050505] py-14 sm:py-20"
      aria-labelledby="uk-auto-body-heading"
    >
      <Container>
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ff4d4d]">
            {ukHomeSeoContent.eyebrow}
          </p>
          <h2
            id="uk-auto-body-heading"
            className="silver-text mt-4 max-w-4xl text-3xl font-semibold uppercase leading-tight sm:text-5xl"
          >
            {ukHomeSeoContent.title}
          </h2>

          <div className="mt-8 grid gap-5 text-base leading-8 text-white/66 lg:grid-cols-3">
            {ukHomeSeoContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <nav
            aria-label="Корисні розділи про фарбування авто"
            className="mt-7 flex flex-wrap gap-x-6 gap-y-3"
          >
            {ukHomeSeoContent.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center border-b border-redline/70 text-sm font-semibold text-white transition hover:border-redline hover:text-redline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </Section>
  );
}
