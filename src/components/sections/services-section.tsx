import Image from "next/image";
import { Car, Eye, Paintbrush, Pipette, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Dictionary } from "@/config/i18n";

const icons = [Paintbrush, Car, Sparkles, Eye, Pipette] as const;

type ServicesSectionProps = {
  dictionary: Dictionary;
};

export function ServicesSection({ dictionary }: ServicesSectionProps) {
  return (
    <Section id="services" className="border-b border-white/10 bg-black py-14 sm:py-16">
      <Container>
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/58">
            {dictionary.services.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-normal text-white sm:text-5xl">
            {dictionary.services.title}
          </h2>
          <span className="mx-auto mt-4 block h-[3px] w-16 bg-redline" />
          {dictionary.services.intro ? (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/62">
              {dictionary.services.intro}
            </p>
          ) : null}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {dictionary.services.items.map((service, index) => {
            const Icon = icons[index];

            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded border border-white/13 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))] transition duration-500 hover:-translate-y-1 hover:border-redline/70"
              >
                <div className="relative aspect-[1.05/1] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-90 grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.78))]" />
                </div>
                <div className="min-h-[13.5rem] p-6">
                  <Icon className="size-9 text-redline" strokeWidth={1.75} aria-hidden="true" />
                  <h3 className="mt-7 text-xl font-black uppercase leading-[1.12] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/68">{service.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
