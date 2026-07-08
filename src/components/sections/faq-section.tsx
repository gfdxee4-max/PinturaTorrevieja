import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getFaqItems } from "@/config/faq";
import type { Locale } from "@/config/i18n";

type FaqSectionProps = {
  locale: Locale;
};

const headings: Record<Locale, string> = {
  es: "Preguntas frecuentes",
  en: "Frequently asked questions",
  ru: "Частые вопросы",
  uk: "Часті запитання",
  de: "Häufige Fragen",
  fr: "Questions fréquentes",
  pl: "Najczęstsze pytania",
  ro: "Întrebări frecvente",
  nl: "Veelgestelde vragen",
  it: "Domande frequenti",
};

export function FaqSection({ locale }: FaqSectionProps) {
  const items = getFaqItems(locale);

  return (
    <Section id="faq" className="border-t border-white/10 bg-black py-12 sm:py-14">
      <Container>
        <h2 className="text-2xl font-black uppercase tracking-normal text-white sm:text-3xl">
          {headings[locale]}
        </h2>
        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.question}
              className="rounded border border-white/12 bg-white/[0.035] p-5"
            >
              <h3 className="text-base font-black leading-6 text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-white/68">{item.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
