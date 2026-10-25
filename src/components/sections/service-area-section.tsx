import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { ServiceAreaContent } from "@/config/geo-coverage";

export function ServiceAreaSection({ content }: { content: ServiceAreaContent }) {
  return (
    <section id="service-area" className="border-b border-white/10 py-10 [overflow-wrap:anywhere] sm:py-12">
      <Container>
        <h2 className="max-w-4xl text-2xl font-black uppercase leading-tight text-white sm:text-3xl">{content.heading}</h2>
        <p className="mt-4 max-w-4xl text-base leading-7 text-white/75">{content.intro}</p>
        <p id="workshop-area-bridge" className="mt-3 max-w-4xl text-base leading-7 text-white/75">{content.workshop}</p>
        <dl className="mt-6 grid gap-x-8 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
          {content.groups.map((group) => (
            <div key={group.label} className="min-w-0">
              <dt className="text-base font-bold text-white">{group.label}</dt>
              <dd className="mt-1 text-sm leading-6 text-white/75">{group.places.join(", ")}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-5xl text-base leading-7 text-white/75">{content.bridge}</p>
        <p className="mt-3 max-w-5xl text-sm leading-6 text-white/75">{content.visit}</p>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
          {content.links.map((link) => (
            <Link key={link.href} href={link.href}
              target={link.href.startsWith("https://") ? "_blank" : undefined}
              rel={link.href.startsWith("https://") ? "noopener noreferrer" : undefined}
              className="inline-flex max-w-full items-center gap-2 text-sm font-bold text-[#ff4d4d] underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              {link.label}<ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
