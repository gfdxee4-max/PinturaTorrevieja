import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getFaqItems } from "@/config/faq";
import type { Locale } from "@/config/i18n";
import { interfaceTranslations } from "@/config/interface-i18n";

type FaqSectionProps = {
  locale: Locale;
};

export function FaqSection({ locale }: FaqSectionProps) {
  const items = getFaqItems(locale);

  return (
    <Section id="faq" className="border-b border-white/[0.08] bg-[#080808]">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ed3333]">FAQ</p>
          <h2 className="silver-text mt-4 text-3xl font-semibold uppercase leading-tight sm:text-5xl">
            {interfaceTranslations[locale].faqHeading}
          </h2>
        </div>
        <div className="mt-9 grid gap-3 lg:grid-cols-2">
          {items.map((item, index) => (
            <details
              key={item.question}
              className="group border border-white/15 bg-white/[0.025] transition open:border-white/35 open:bg-white/[0.04]"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-left text-sm font-semibold leading-6 text-white outline-none sm:text-base [&::-webkit-details-marker]:hidden">
                <span className="flex items-start gap-4">
                  <span className="pt-0.5 text-xs font-medium tracking-[0.12em] text-[#ed3333]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.question}
                </span>
                <ChevronDown className="size-5 shrink-0 text-white/52 transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="border-t border-white/[0.08] px-5 py-5 pl-[4.1rem] text-sm leading-7 text-white/60">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
