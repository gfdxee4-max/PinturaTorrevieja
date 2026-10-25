import Link from "next/link";
import type { Locale } from "@/config/i18n";
import { repairBridgeCopy } from "@/config/repair-bridge-i18n";
import { getArchitectureHubPath } from "@/config/architecture-hub-i18n";
import { getLocalizedServicePath, localizedServicePages } from "@/config/localized-service-pages";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function RepairBridgeSection({ locale }: { locale: Locale }) {
  const copy = repairBridgeCopy[locale];
  const servicePath = (key: "body" | "paint" | "insurance") => {
    if (locale === "es" && key === "body") return "/servicios/reparacion-carroceria";
    if (locale === "es" && key === "paint") return "/servicios/pintura-coche";
    const page = localizedServicePages.find((item) => item.locale === locale && item.key === key);
    return page ? getLocalizedServicePath(page) : undefined;
  };
  const paths = {
    body: servicePath("body"), paint: servicePath("paint"), insurance: servicePath("insurance"),
    services: getArchitectureHubPath(locale, "services"),
  };

  return (
    <Section id="car-repair-specialisation" aria-labelledby="car-repair-specialisation-heading" className="border-b border-white/[0.08] bg-[#050505] py-12 sm:py-16">
      <Container>
        <div className="max-w-5xl [overflow-wrap:anywhere]">
          <h2 id="car-repair-specialisation-heading" className="silver-text max-w-4xl text-2xl font-semibold uppercase leading-tight sm:text-3xl">
            {copy.heading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-white/70">
            {copy.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph.split(/(\{(?:body|paint|insurance|services)\})/g).map((part, partIndex) => {
                  const token = part.match(/^\{(body|paint|insurance|services)\}$/)?.[1] as keyof typeof paths | undefined;
                  if (!token) return part;
                  const href = paths[token];
                  return href ? <Link key={partIndex} href={href} className="font-medium text-white underline decoration-redline/70 underline-offset-4 transition hover:text-[#ff4d4d]">{copy.labels[token]}</Link> : copy.labels[token];
                })}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
