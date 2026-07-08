import Link from "next/link";
import { Award, Car, Gauge, Medal, ThumbsUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { Dictionary } from "@/config/i18n";
import { siteConfig } from "@/config/site";

type FooterProps = {
  dictionary: Dictionary;
  whatsappUrl: string;
};

const icons = [Gauge, Medal, Car, Award, ThumbsUp] as const;

export function Footer({ dictionary, whatsappUrl }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container>
        <div className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-5">
          {dictionary.footerBenefits.map(([title, text], index) => {
            const Icon = icons[index];

            return (
              <div key={title} className="grid grid-cols-[3rem_1fr] gap-4">
                <Icon className="size-9 text-redline" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <p className="text-sm font-black uppercase leading-5 text-white">{title}</p>
                  <p className="mt-1 text-sm leading-5 text-white/58">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5 py-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-chrome">
            {siteConfig.name}
          </p>
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded bg-redline px-5 text-xs font-black uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#ff101b]"
          >
            WhatsApp
          </Link>
        </div>
      </Container>
    </footer>
  );
}
