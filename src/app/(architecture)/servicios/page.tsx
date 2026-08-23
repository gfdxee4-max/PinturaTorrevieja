import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata } from "@/config/architecture";
import { getArchitectureHubPage } from "@/config/architecture-hub-i18n";

const page = getArchitectureHubPage("es", "services");

export const metadata = getArchitectureMetadata(page);

export default function ServicesHubPage() {
  return <ArchitecturePage page={page} />;
}
