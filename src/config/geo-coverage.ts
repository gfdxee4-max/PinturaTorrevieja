import type { ArchitecturePage } from "@/config/architecture";
import type { Locale } from "@/config/i18n";
import { geoCoverageCopy } from "@/config/geo-coverage-i18n";
import { getLocalizedServicePath, localizedServicePages } from "@/config/localized-service-pages";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export const geoCityLocales: readonly Locale[] = ["es", "en", "ru", "uk", "de"];
export const geoAreaGroups = [
  ["La Mata", "Los Montesinos", "San Miguel de Salinas"],
  ["Guardamar del Segura", "Rojales", "Ciudad Quesada", "Benijófar", "Formentera del Segura", "San Fulgencio", "La Marina"],
  ["Algorfa", "Almoradí", "Dolores", "Benejúzar", "Daya Vieja", "Daya Nueva"],
  ["Bigastro", "Catral", "Rafal", "Callosa de Segura", "Cox", "Redován", "Orihuela", "Jacarilla"],
  ["Punta Prima", "Playa Flamenca", "La Zenia", "Cabo Roig", "Dehesa de Campoamor (Campoamor)", "Villamartín", "Los Dolses", "Lomas de Cabo Roig", "Las Filipinas", "Las Ramblas"],
  ["Pilar de la Horadada", "Torre de la Horadada", "Mil Palmeras", "Pinar de Campoverde"],
  ["San Pedro del Pinatar", "San Javier", "Los Alcázares"],
] as const;

export type ServiceAreaContent = {
  workshop: string;
  heading: string;
  intro: string;
  bridge: string;
  visit: string;
  groups: { label: string; places: readonly string[] }[];
  links: { href: string; label: string }[];
};

export function addHubGeoCoverage(page: ArchitecturePage): ArchitecturePage {
  const locale = page.locale ?? "es";
  const hasCityHub = geoCityLocales.includes(locale);
  if (page.hubKind !== (hasCityHub ? "cities" : "services")) return page;
  const copy = geoCoverageCopy[locale];
  const servicesPath = locale === "es" ? "/servicios" : `/${locale}/servicios`;
  const citiesPath = hasCityHub && locale !== "es" ? `/${locale}/ciudades` : "/ciudades";
  const links: ServiceAreaContent["links"] = [];
  if (page.path !== servicesPath) links.push({ href: servicesPath, label: copy.links[0] });
  for (const [key, label] of [["body", copy.links[1]], ["paint", copy.links[2]], ["insurance", copy.links[3]], ["wheels", copy.links[4]]] as const) {
    const service = localizedServicePages.find((item) => item.locale === locale && item.key === key);
    const href = service ? getLocalizedServicePath(service) : locale === "es"
      ? ({ body: "/servicios/reparacion-carroceria", paint: "/servicios/pintura-coche" } as Partial<Record<typeof key, string>>)[key] : undefined;
    if (href) links.push({ href, label });
  }
  if (page.path !== citiesPath) links.push({ href: citiesPath, label: `${copy.links[5]}${hasCityHub || locale === "es" ? "" : " (ES)"}` });
  links.push({ href: createWhatsAppUrl(""), label: copy.links[6] });
  return {
    ...page,
    serviceArea: {
      workshop: copy.workshop,
      heading: copy.heading, intro: copy.intro, bridge: copy.bridge, visit: copy.visit,
      groups: geoAreaGroups.map((places, index) => ({ label: copy.groups[index], places })), links,
    },
  };
}
