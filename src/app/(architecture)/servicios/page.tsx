import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata, getArchitecturePage } from "@/config/architecture";

const page = getArchitecturePage("/servicios")!;

export const metadata = getArchitectureMetadata(page);

export default function ServicesHubPage() {
  return <ArchitecturePage page={page} />;
}
