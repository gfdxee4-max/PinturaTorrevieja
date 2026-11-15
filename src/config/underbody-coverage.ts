import type { ArchitecturePage } from "@/config/architecture";
import { underbodyCopy } from "@/config/underbody-copy";

export function addUnderbodyCoverage(page: ArchitecturePage): ArchitecturePage {
  if (page.hubKind !== "services") return page;
  if (!page.locale) throw new Error("Missing locale for underbody service content");
  const copy = underbodyCopy[page.locale];
  return {
    ...page,
    sections: [...page.sections, { id: "underbody-protection", heading: copy.heading, paragraphs: [...copy.paragraphs] }],
  };
}
