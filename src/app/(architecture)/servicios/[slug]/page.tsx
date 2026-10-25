import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchitecturePage } from "@/components/page/architecture-page";
import { LocalizedServicePage } from "@/components/page/localized-service-page";
import { getLocalizedServicePage, localizedServicePages } from "@/config/localized-service-pages";
import { getLocalizedServiceMetadata } from "@/lib/localized-service-seo";
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
  return [...serviceArchitecturePages.map((page) => ({
    slug: page.path.split("/").at(-1)!,
  })), ...localizedServicePages.filter((page) => page.locale === "es").map((page) => ({ slug: page.slug }))];
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const localizedPage = getLocalizedServicePage("es", slug);
  if (localizedPage) return getLocalizedServiceMetadata(localizedPage);
  const page = getArchitecturePage(`/servicios/${slug}`);

  if (!page) {
    return {};
  }

  return getArchitectureMetadata(page);
}

export default async function ServiceArchitecturePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const localizedPage = getLocalizedServicePage("es", slug);
  if (localizedPage) return <LocalizedServicePage page={localizedPage} />;
  const page = getArchitecturePage(`/servicios/${slug}`);

  if (!page) {
    notFound();
  }

  return <ArchitecturePage page={page} />;
}
