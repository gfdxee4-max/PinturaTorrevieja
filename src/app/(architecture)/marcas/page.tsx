import type { Metadata } from "next";
import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata, getArchitecturePage } from "@/config/architecture";

const page = getArchitecturePage("/marcas")!;

export const metadata: Metadata = {
  ...getArchitectureMetadata(page),
  robots: { index: false, follow: true },
};

export default function BrandsHubPage() {
  return <ArchitecturePage page={page} />;
}
