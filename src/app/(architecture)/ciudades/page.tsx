import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata, getArchitecturePage } from "@/config/architecture";

const page = getArchitecturePage("/ciudades")!;

export const metadata = getArchitectureMetadata(page);

export default function CitiesHubPage() {
  return <ArchitecturePage page={page} />;
}
