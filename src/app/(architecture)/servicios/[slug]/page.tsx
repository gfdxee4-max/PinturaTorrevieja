import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchitecturePage } from "@/components/page/architecture-page";
import {
  getArchitectureMetadata,
  getArchitecturePage,
  serviceArchitecturePages,
} from "@/config/architecture";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return serviceArchitecturePages.map((page) => ({
    slug: page.path.split("/").at(-1)!,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getArchitecturePage(`/servicios/${slug}`);

  if (!page) {
    return {};
  }

  return getArchitectureMetadata(page);
}

export default async function ServiceArchitecturePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = getArchitecturePage(`/servicios/${slug}`);

  if (!page) {
    notFound();
  }

  return <ArchitecturePage page={page} />;
}
