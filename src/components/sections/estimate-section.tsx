import Link from "next/link";
import { CalendarDays, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Dictionary } from "@/config/i18n";

type EstimateSectionProps = {
  dictionary: Dictionary;
  whatsappUrl: string;
};

export function EstimateSection({ dictionary, whatsappUrl }: EstimateSectionProps) {
  const cards = [
    {
      id: "estimate",
      icon: MessageCircle,
      eyebrow: dictionary.estimate.eyebrow,
      title: dictionary.estimate.title,
      text: dictionary.estimate.text,
      cta: dictionary.estimate.cta,
    },
    {
      id: "booking",
      icon: CalendarDays,
      eyebrow: dictionary.booking.eyebrow,
      title: dictionary.booking.title,
      text: dictionary.booking.text,
      cta: dictionary.booking.cta,
    },
  ];

  return (
    <Section id="estimate" className="border-b border-white/[0.08] bg-[#050505] py-12 sm:py-16">
      <Container>
        <div className="grid gap-4 lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                id={card.id}
                key={card.id}
                className="premium-card relative grid gap-6 overflow-hidden p-7 sm:grid-cols-[5.25rem_1fr] sm:p-9"
              >
                <div className="flex size-20 items-center justify-center border border-redline/70 bg-[linear-gradient(145deg,rgba(214,0,0,0.32),rgba(90,0,0,0.22))] text-white">
                  <Icon className="size-10" strokeWidth={1.4} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-redline">
                    {card.eyebrow}
                  </p>
                  <h2 className="silver-text mt-3 text-2xl font-semibold uppercase leading-tight sm:text-3xl">
                    {card.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/62">{card.text}</p>
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 border border-redline bg-[linear-gradient(135deg,#d60000,#850000)] px-5 py-3 text-center text-xs font-semibold uppercase leading-5 tracking-[0.07em] text-white shadow-red transition hover:-translate-y-0.5 hover:bg-redline"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    {card.cta}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
