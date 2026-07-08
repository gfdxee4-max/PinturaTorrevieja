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
    <Section id="estimate" className="bg-black py-8 sm:py-10">
      <Container>
        <div className="grid gap-4 lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                id={card.id}
                key={card.id}
                className="grid gap-6 rounded border border-white/13 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.018))] p-7 shadow-soft sm:grid-cols-[5.5rem_1fr] sm:p-9"
              >
                <div className="flex size-20 items-center justify-center rounded bg-redline/24 text-white ring-1 ring-redline/45">
                  <Icon className="size-11" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-white/58">
                    {card.eyebrow}
                  </p>
                  <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                    {card.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/72">{card.text}</p>
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded bg-redline px-5 text-xs font-black uppercase tracking-[0.06em] text-white shadow-red transition hover:-translate-y-0.5 hover:bg-[#ff101b]"
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
