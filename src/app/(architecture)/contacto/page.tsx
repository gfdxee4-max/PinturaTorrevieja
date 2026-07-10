import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata, getArchitecturePage } from "@/config/architecture";

const page = getArchitecturePage("/contacto")!;

export const metadata = getArchitectureMetadata(page);

export default function ContactPage() {
  return <ArchitecturePage page={page} />;
}
