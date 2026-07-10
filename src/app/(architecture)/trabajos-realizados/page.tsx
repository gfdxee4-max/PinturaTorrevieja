import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata, getArchitecturePage } from "@/config/architecture";

const page = getArchitecturePage("/trabajos-realizados")!;

export const metadata = getArchitectureMetadata(page);

export default function WorkHubPage() {
  return <ArchitecturePage page={page} />;
}
