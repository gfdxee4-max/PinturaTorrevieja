import Link from "next/link";
import { Award, Car, Gauge, Medal, ThumbsUp } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { footerHubLinks } from "@/config/architecture";
import type { Dictionary } from "@/config/i18n";

type FooterProps = {
  dictionary: Dictionary;
  whatsappUrl: string;
};

const icons = [Gauge, Medal, Car, Award, ThumbsUp] as const;

export function Footer({ dictionary, whatsappUrl }: FooterProps) {
  return (
    <footer className="bg-[#050505]">
      <Container>
        <div className="grid gap-7 border-b border-white/[0.08] py-10 sm:grid-cols-2 lg:grid-cols-5">
          {dictionary.footerBenefits.map(([title, text], index) => {
            const Icon = icons[index];

            return (
              <div key={title} className="grid grid-cols-[2.75rem_1fr] gap-3">
                <Icon className="size-8 text-redline" strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase leading-5 tracking-[0.04em] text-white">
                    {title}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-white/50">{text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-7 py-9 text-sm text-white/55 lg:flex-row lg:items-center lg:justify-between">
          <BrandLogo className="h-[4.25rem] w-[13rem]" />
          <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Secciones del sitio">
            {footerHubLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-white/52 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center border border-redline bg-redline px-5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#f00000]"
          >
            WhatsApp
          </Link>
        </div>
      </Container>
    </footer>
  );
}
