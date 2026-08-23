import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata } from "@/config/architecture";
import { getArchitectureHubPage } from "@/config/architecture-hub-i18n";

const page = getArchitectureHubPage("es", "cities");

export const metadata = getArchitectureMetadata(page);

export default function CitiesHubPage() {
  return <ArchitecturePage page={page} />;
}
