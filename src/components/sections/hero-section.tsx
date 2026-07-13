import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Gauge, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { Dictionary } from "@/config/i18n";

type HeroSectionProps = {
  dictionary: Dictionary;
  whatsappUrl: string;
};

const benefitIcons = [Award, Gauge, ShieldCheck] as const;

const heroContent: Record<string, { benefits: readonly string[]; headline: readonly [string, string] }> = {
  es_ES: {
    headline: ["Pintura y reparación", "de vehículos"],
    benefits: ["Materiales premium", "Rápido y fiable", "Garantía de calidad"],
  },
  en_GB: {
    headline: ["Car body repair", "& painting"],
    benefits: ["Premium materials", "Fast and reliable", "Quality guarantee"],
  },
  ru_RU: {
    headline: ["Автопокраска", "и кузовной ремонт"],
    benefits: ["Премиальные материалы", "Быстро и надёжно", "Гарантия качества"],
  },
  uk_UA: {
    headline: ["Фарбування авто", "та кузовний ремонт"],
    benefits: ["Преміальні матеріали", "Швидко та надійно", "Гарантія якості"],
  },
  de_DE: {
    headline: ["Autolackierung", "& Karosseriereparatur"],
    benefits: ["Premium-Materialien", "Schnell und zuverlässig", "Qualitätsgarantie"],
  },
  fr_FR: {
    headline: ["Peinture automobile", "et carrosserie"],
    benefits: ["Matériaux premium", "Rapide et fiable", "Garantie qualité"],
  },
  pl_PL: {
    headline: ["Lakierowanie aut", "i naprawa blacharska"],
    benefits: ["Materiały premium", "Szybko i niezawodnie", "Gwarancja jakości"],
  },
  nl_NL: {
    headline: ["Auto spuiten", "& schadeherstel"],
    benefits: ["Premium materialen", "Snel en betrouwbaar", "Kwaliteitsgarantie"],
  },
  it_IT: {
    headline: ["Verniciatura auto", "e carrozzeria"],
    benefits: ["Materiali premium", "Rapido e affidabile", "Garanzia di qualità"],
  },
  nb_NO: { headline: ["Billakkering", "og karosserireparasjon"], benefits: ["Premium materialer", "Raskt og pålitelig", "Kvalitet i arbeidet"] },
  fi_FI: { headline: ["Automaalaus", "ja korikorjaus"], benefits: ["Laadukkaat materiaalit", "Nopea ja luotettava", "Tarkastettu työnjälki"] },
  da_DK: { headline: ["Autolakering", "og karrosserireparation"], benefits: ["Kvalitetsmaterialer", "Hurtigt og pålideligt", "Kontrolleret kvalitet"] },
  sv_SE: { headline: ["Billackering", "och karossreparation"], benefits: ["Kvalitetsmaterial", "Snabbt och pålitligt", "Kontrollerat resultat"] },
  sk_SK: { headline: ["Lakovanie áut", "a oprava karosérie"], benefits: ["Kvalitné materiály", "Rýchlo a spoľahlivo", "Kontrolovaný výsledok"] },
  hu_HU: { headline: ["Autófényezés", "és karosszériajavítás"], benefits: ["Minőségi anyagok", "Gyors és megbízható", "Ellenőrzött eredmény"] },
  bg_BG: { headline: ["Автобоядисване", "и ремонт на каросерия"], benefits: ["Качествени материали", "Бързо и надеждно", "Проверен резултат"] },
  pt_PT: { headline: ["Pintura automóvel", "e reparação de carroçaria"], benefits: ["Materiais de qualidade", "Rápido e fiável", "Resultado verificado"] },
  el_GR: { headline: ["Βαφή αυτοκινήτου", "και επισκευή αμαξώματος"], benefits: ["Ποιοτικά υλικά", "Γρήγορα και αξιόπιστα", "Ελεγμένο αποτέλεσμα"] },
  cs_CZ: { headline: ["Lakování aut", "a oprava karoserie"], benefits: ["Kvalitní materiály", "Rychle a spolehlivě", "Zkontrolovaný výsledek"] },
};

export function HeroSection({ dictionary, whatsappUrl }: HeroSectionProps) {
  const content = heroContent[dictionary.locale] ?? heroContent.es_ES;

  return (
    <section className="relative isolate min-h-[calc(100svh-5.25rem)] overflow-hidden border-b border-white/[0.08] bg-[#050505] lg:min-h-[calc(100svh-6.5rem)]">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[70%]">
        <Image
          src="/images/hero-approved-car.png"
          alt={dictionary.hero.imageAlt}
          fill
          priority
          fetchPriority="high"
          loading="eager"
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="slow-zoom object-cover object-[58%_center] opacity-90 lg:object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,#050505_26%,rgba(5,5,5,0.93)_40%,rgba(5,5,5,0.5)_63%,rgba(5,5,5,0.2)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(5,5,5,0.8)_0%,rgba(5,5,5,0.9)_38%,#050505_82%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,transparent_62%,#050505_100%)]" />

      <Container className="relative z-10 flex min-h-[calc(100svh-5.25rem)] flex-col justify-center pb-8 pt-12 lg:min-h-[calc(100svh-6.5rem)] lg:pb-10 lg:pt-16">
        <div className="fade-up max-w-[58rem] lg:w-[62%]">
          <h1 className="silver-text text-[clamp(1.6rem,7.4vw,1.9rem)] font-extrabold uppercase leading-[1.02] tracking-normal drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)] sm:text-[clamp(2.2rem,4.4vw,4.35rem)]">
            <span className="block [overflow-wrap:anywhere] sm:whitespace-nowrap">{content.headline[0]}</span>
            <span className="block [overflow-wrap:anywhere] sm:whitespace-nowrap">{content.headline[1]}</span>
          </h1>

          <div className="mt-6 flex max-w-[38rem] items-center gap-6 sm:mt-7">
            <p className="shrink-0 text-sm font-medium uppercase tracking-[0.48em] text-white/82 sm:text-lg sm:tracking-[0.62em]">
              Torrevieja
            </p>
            <span className="h-px flex-1 bg-gradient-to-r from-redline to-transparent" />
          </div>

          <p className="mt-6 max-w-[34rem] text-sm leading-7 text-white/68 sm:text-base">
            {dictionary.hero.text}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 items-center justify-center gap-4 border border-redline bg-[linear-gradient(135deg,#d60000,#850000)] px-5 py-4 text-center text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-white shadow-red transition duration-300 hover:-translate-y-0.5 hover:border-[#ff2020] hover:bg-redline focus-visible:outline-white sm:min-w-[17rem] sm:gap-7 sm:px-7 sm:text-sm"
            >
              {dictionary.estimate.cta}
              <ArrowRight className="size-5 shrink-0 transition group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="#services"
              className="inline-flex min-h-14 items-center justify-center border border-white/45 bg-black/30 px-8 text-xs font-medium uppercase tracking-[0.1em] text-white transition duration-300 hover:border-white hover:bg-white/[0.06] sm:min-w-[14rem] sm:text-sm"
            >
              {dictionary.nav.services}
            </Link>
          </div>
        </div>

        <div className="mt-10 grid max-w-[52rem] gap-6 sm:grid-cols-3 lg:w-[62%]">
          {content.benefits.map((title, index) => {
            const Icon = benefitIcons[index];

            return (
              <div key={title} className="grid grid-cols-[2.75rem_1fr] items-center gap-4">
                <Icon className="size-9 text-white/90" strokeWidth={1.35} aria-hidden="true" />
                <p className="text-xs font-semibold uppercase leading-5 tracking-[0.04em] text-white/90">
                  {title}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
