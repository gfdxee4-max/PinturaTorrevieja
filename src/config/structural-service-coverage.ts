import type { ArchitecturePage, ArchitectureSection } from "@/config/architecture";
import { bodyRestorationCopy } from "@/config/body-restoration-copy";
import { getLocalizedServicePath, localizedServicePages } from "@/config/localized-service-pages";
import { moneyServiceCopy } from "@/config/money-service-copy";
import { structuralServiceCopy } from "@/config/structural-service-copy";
import { underbodyCopy } from "@/config/underbody-copy";

export function addStructuralServiceCoverage(page: ArchitecturePage): ArchitecturePage {
  if (page.hubKind !== "services") return page;
  const locale = page.locale;
  if (!locale) throw new Error("Missing locale for structural body services");
  const copy = structuralServiceCopy[locale];
  const money = moneyServiceCopy[locale];
  const rustHeading = bodyRestorationCopy[locale].bodyHeading;
  const service = (key: "body" | "paint" | "insurance") => localizedServicePages.find((item) => item.locale === locale && item.key === key);
  const body = service("body");
  const paint = service("paint");
  const insurance = service("insurance");
  if (!insurance) throw new Error(`Missing insurance service: ${locale}`);
  const bodyHref = locale === "es" ? "/servicios/reparacion-carroceria" : body ? getLocalizedServicePath(body) : `${page.path}#body-repair`;
  const paintHref = locale === "es" ? "/servicios/pintura-coche" : paint ? getLocalizedServicePath(paint) : `${page.path}#car-painting`;
  const rustHref = page.sections.some((section) => section.heading === rustHeading) ? `${page.path}#rust-repair` : bodyHref;
  const sections = page.sections.map((section) => {
    const id = section.heading === money.body[0] ? "body-repair"
      : section.heading === money.paint[0] ? "car-painting"
      : section.heading === rustHeading ? "rust-repair" : undefined;
    return id ? { ...section, id: section.id ?? id } : section;
  });
  const additions: ArchitectureSection[] = [
    {
      id: "body-straightening", heading: copy.frame[1], paragraphs: [copy.frame[2], copy.frame[3]],
      links: [
        { href: bodyHref, label: body?.h1 ?? money.body[0] },
        { href: getLocalizedServicePath(insurance), label: insurance.h1 },
      ],
    },
    {
      id: "body-welding", heading: copy.welding[1], paragraphs: [copy.welding[2], copy.welding[3], copy.welding[4]],
      links: [
        { href: rustHref, label: rustHeading },
        { href: `${page.path}#underbody-protection`, label: underbodyCopy[locale].heading },
        { href: paintHref, label: paint?.h1 ?? money.paint[0] },
      ],
    },
  ];
  return { ...page, sections: [...sections, ...additions] };
}
