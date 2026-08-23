import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata } from "@/config/architecture";
import {
  getArchitectureHubPage,
  isArchitectureHubLocale,
} from "@/config/architecture-hub-i18n";

type LocalizedCitiesHubPageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }, { lang: "uk" }];
}

function getPage(lang: string) {
  if (!isArchitectureHubLocale(lang) || lang === "es") notFound();
  return getArchitectureHubPage(lang, "cities");
}

export async function generateMetadata({
  params,
}: LocalizedCitiesHubPageProps): Promise<Metadata> {
  const { lang } = await params;
  return getArchitectureMetadata(getPage(lang));
}

export default async function LocalizedCitiesHubPage({ params }: LocalizedCitiesHubPageProps) {
  const { lang } = await params;
  return <ArchitecturePage page={getPage(lang)} />;
}
