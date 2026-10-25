import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata } from "@/config/architecture";
import {
  getArchitectureHubPage,
  architectureHubLocales,
  isArchitectureHubLocale,
} from "@/config/architecture-hub-i18n";

type LocalizedServicesHubPageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return architectureHubLocales.filter((lang) => lang !== "es").map((lang) => ({ lang }));
}

function getPage(lang: string) {
  if (!isArchitectureHubLocale(lang) || lang === "es") notFound();
  return getArchitectureHubPage(lang, "services");
}

export async function generateMetadata({
  params,
}: LocalizedServicesHubPageProps): Promise<Metadata> {
  const { lang } = await params;
  return getArchitectureMetadata(getPage(lang));
}

export default async function LocalizedServicesHubPage({ params }: LocalizedServicesHubPageProps) {
  const { lang } = await params;
  return <ArchitecturePage page={getPage(lang)} />;
}
