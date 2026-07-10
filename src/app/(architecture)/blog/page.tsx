import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata, getArchitecturePage } from "@/config/architecture";

const page = getArchitecturePage("/blog")!;

export const metadata = getArchitectureMetadata(page);

export default function BlogHubPage() {
  return <ArchitecturePage page={page} />;
}
