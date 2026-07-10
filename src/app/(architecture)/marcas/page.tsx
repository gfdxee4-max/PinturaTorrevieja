import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata, getArchitecturePage } from "@/config/architecture";

const page = getArchitecturePage("/marcas")!;

export const metadata = getArchitectureMetadata(page);

export default function BrandsHubPage() {
  return <ArchitecturePage page={page} />;
}
