import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata, getArchitecturePage } from "@/config/architecture";

const page = getArchitecturePage("/faq")!;

export const metadata = getArchitectureMetadata(page);

export default function FaqHubPage() {
  return <ArchitecturePage page={page} />;
}
