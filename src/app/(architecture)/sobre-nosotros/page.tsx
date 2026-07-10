import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata, getArchitecturePage } from "@/config/architecture";

const page = getArchitecturePage("/sobre-nosotros")!;

export const metadata = getArchitectureMetadata(page);

export default function AboutPage() {
  return <ArchitecturePage page={page} />;
}
