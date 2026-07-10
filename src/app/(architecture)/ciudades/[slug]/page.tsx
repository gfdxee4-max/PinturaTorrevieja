import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchitecturePage } from "@/components/page/architecture-page";
import {
  cityArchitecturePages,
  getArchitectureMetadata,
  getArchitecturePage,
} from "@/config/architecture";

type CityPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return cityArchitecturePages.map((page) => ({
    slug: page.path.split("/").at(-1)!,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getArchitecturePage(`/ciudades/${slug}`);

  if (!page) {
    return {};
  }

  return getArchitectureMetadata(page);
}

export default async function CityArchitecturePage({ params }: CityPageProps) {
  const { slug } = await params;
  const page = getArchitecturePage(`/ciudades/${slug}`);

  if (!page) {
    notFound();
  }

  return <ArchitecturePage page={page} />;
}
