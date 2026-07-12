import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Dictionary } from "@/config/i18n";

type HeroSectionProps = {
  dictionary: Dictionary;
  whatsappUrl: string;
};

export function HeroSection({ dictionary, whatsappUrl }: HeroSectionProps) {
  return (
    <Section className="relative overflow-hidden border-b border-white/10 py-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_56%_38%,rgba(229,9,20,0.22),transparent_14rem),linear-gradient(180deg,#050505_0%,#050505_100%)]" />

      <Container className="relative">
        <div className="grid min-h-[calc(100svh-5.8rem)] gap-6 py-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:py-0">
          <div className="fade-up z-10 max-w-[38rem] pt-6 lg:pt-0">
            {dictionary.hero.eyebrow ? (
              <p className="mb-8 text-xs font-black uppercase tracking-[0.18em] text-white/70">
                {dictionary.hero.eyebrow}
              </p>
            ) : null}
            <h1 className="text-[clamp(2.45rem,5.7vw,4.95rem)] font-black uppercase leading-[0.95] tracking-normal text-white">
              <span className="block">{dictionary.hero.headlineTop}</span>
              <span className="block text-redline">{dictionary.hero.headlineAccent}</span>
              <span className="block">{dictionary.hero.headlineBottom}</span>
            </h1>
            <span className="mt-6 block h-[3px] w-16 bg-redline" />
            <p className="mt-6 max-w-[32rem] text-base leading-7 text-white/86 sm:text-lg">
              {dictionary.hero.text}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded bg-redline px-6 text-xs font-black uppercase tracking-[0.06em] text-white shadow-red transition duration-300 hover:-translate-y-0.5 hover:bg-[#ff101b]"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                {dictionary.hero.primary}
              </Link>
              <Link
                href="#services"
                className="inline-flex h-[3.25rem] items-center justify-center gap-2 rounded border border-white/24 bg-black/35 px-6 text-xs font-black uppercase tracking-[0.06em] text-white transition duration-300 hover:border-white/70 hover:bg-white/8"
              >
                {dictionary.nav.services}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="fade-up relative min-h-[23rem] overflow-hidden lg:-ml-24 lg:min-h-[42rem] xl:min-h-[47rem]">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-paint-repair.webp"
                alt={dictionary.hero.imageAlt}
                fill
                priority
                fetchPriority="high"
                loading="eager"
                sizes="(min-width: 1280px) 64vw, (min-width: 1024px) 60vw, 100vw"
                className="slow-zoom object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.88)_13%,rgba(5,5,5,0.25)_44%,rgba(5,5,5,0.05)_78%),linear-gradient(180deg,rgba(5,5,5,0.02)_0%,#050505_96%)]" />
            <div className="soft-pulse absolute bottom-8 left-[14%] h-[2px] w-[54%] origin-center bg-redline shadow-[0_0_38px_rgba(229,9,20,0.95)]" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
