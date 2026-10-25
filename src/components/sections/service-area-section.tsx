import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import type { ServiceAreaContent } from "@/config/geo-coverage";

export function ServiceAreaSection({ content }: { content: ServiceAreaContent }) {
  return (
    <section id="service-area" className="border-b border-white/10 py-10 [overflow-wrap:anywhere] sm:py-12">
      <Container>
        <h2 className="max-w-4xl text-2xl font-black uppercase leading-tight text-white sm:text-3xl">{content.heading}</h2>
        <p className="mt-4 max-w-4xl text-base leading-7 text-white/75">{content.intro}</p>
        <p id="workshop-area-bridge" className="mt-3 max-w-4xl text-base leading-7 text-white/75">{content.workshop}</p>
        <p id="paint-specialist-area-bridge" className="mt-3 max-w-4xl text-base leading-7 text-white/75">{content.specialist}</p>
        <div id="multibrand-area-coverage" className="mt-7 border-y border-white/10 py-6">
          <h3 className="max-w-4xl text-xl font-bold leading-snug text-white">{content.multibrand.heading}</h3>
          <p className="mt-3 max-w-5xl text-base leading-7 text-white/75">{content.multibrand.intro}</p>
          <dl className="mt-4">
            {content.multibrand.groups.filter((group) => group.priority === "A").map((group) => (
              <div key={group.priority} className="min-w-0">
                <dt className="text-sm font-bold text-white">{group.label}</dt>
                <dd className="mt-1 max-w-5xl text-base leading-7 text-white/85">
                  {group.brands.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
          <details className="group mt-3 max-w-5xl">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm font-bold text-white/85 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
              {content.multibrand.groups[2].label}
              <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="pb-2 text-sm leading-6 text-white/70">
              {content.multibrand.groups.filter((group) => group.priority !== "A").flatMap((group) => group.brands).join(", ")}
            </p>
          </details>
          {content.multibrand.proofLinks.length > 0 ? (
            <div className="mt-4">
              <p className="text-sm font-bold text-white/85">{content.multibrand.proofHeading}</p>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                {content.multibrand.proofLinks.map((link) => (
                  <li key={link.href} className="min-w-0 max-w-full">
                    <Link href={link.href} className="text-sm font-bold text-[#ff4d4d] underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
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
