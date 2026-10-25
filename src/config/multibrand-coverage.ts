import type { Locale } from "@/config/i18n";
import { multibrandCopy } from "@/config/multibrand-i18n";
import { getProjectPath } from "@/config/projects-i18n";
import { projects } from "@/data/projects";

export const carBrandGroups = [
  { priority: "A", brands: ["Toyota", "Volkswagen", "Renault", "Peugeot", "SEAT", "Cupra", "Kia", "Hyundai", "Mercedes-Benz", "BMW", "Audi", "Škoda", "Citroën", "Nissan", "Tesla"] },
  { priority: "B", brands: ["Opel", "Ford", "Mazda", "Dacia", "Fiat", "Volvo", "MG", "BYD", "Lexus", "MINI", "Jeep", "Honda", "Suzuki", "Porsche", "DS Automobiles"] },
  { priority: "C", brands: ["Omoda", "Jaecoo", "Leapmotor", "XPeng", "Geely", "Polestar", "Ebro", "Smart", "Mitsubishi", "Land Rover / Range Rover"] },
] as const;

const proofSlugs = [
  "polnaya-pokraska-bmw-e46-cabriolet-torrevieja",
  "remont-pokraska-zadney-dveri-mercedes-v-class-torrevieja",
  "reparacion-pintura-aleta-trasera-tesla-model-3",
  "reparacion-aleta-delantera-nissan-qashqai",
  "fiat-500-reparacion-puerta-aleta-estribo",
] as const;

export function getMultibrandCoverage(locale: Locale, existingLinks: readonly { href: string }[]) {
  const copy = multibrandCopy[locale];
  return {
    heading: copy.heading,
    intro: copy.intro,
    groups: carBrandGroups.map((group, index) => ({ ...group, label: copy.groups[index] })),
    proofHeading: copy.proof,
    proofLinks: proofSlugs.flatMap((slug) => {
      const project = projects.find((item) => item.slug === slug);
      if (!project) return [];
      const href = getProjectPath(locale, project.slug);
      return existingLinks.some((link) => link.href === href) ? [] : [{ href, label: project.vehicle }];
    }),
  };
}

export type MultibrandContent = ReturnType<typeof getMultibrandCoverage>;
