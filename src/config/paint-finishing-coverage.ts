import type { ArchitecturePage } from "@/config/architecture";
import { paintFinishingCopy } from "@/config/paint-finishing-copy";

export function addPaintFinishingCoverage(page: ArchitecturePage): ArchitecturePage {
  const locale = page.locale ?? "es";
  const copy = paintFinishingCopy[locale];

  if (page.path === "/servicios/pulido-carroceria") {
    const areaLink = { href: "/ciudades", label: "Zonas de servicio" };
    return {
      ...page,
      sections: page.sections.map((section, index) => index === 0
        ? { ...section, paragraphs: [...section.paragraphs, copy.polish] } : section),
      links: page.links.some((link) => link.href === areaLink.href) ? page.links : [...page.links, areaLink],
    };
  }

  if (locale === "es" || page.hubKind !== "services") return page;

  return {
    ...page,
    sections: [...page.sections,
      { heading: copy.polishHeading, paragraphs: [copy.polish] },
      { heading: copy.headlightsHeading, paragraphs: [copy.headlights] },
    ],
  };
}
