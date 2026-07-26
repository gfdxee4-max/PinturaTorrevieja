export const serviceAreaNames = [
  "Torrevieja",
  "Orihuela Costa",
  "Guardamar del Segura",
  "Ciudad Quesada",
  "La Mata",
] as const;

export function getServiceAreaSchema() {
  return serviceAreaNames.map((name) => ({
    "@type": "City",
    name,
  }));
}
