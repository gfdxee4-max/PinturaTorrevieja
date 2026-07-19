import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectsPage } from "@/components/projects/projects-page";
import { isLocale, locales, type Locale } from "@/config/i18n";
import { projects } from "@/data/projects";
import { getProjectsMetadata } from "@/lib/project-seo";

type LocalizedProjectsPageProps = {
  params: Promise<{ lang: string }>;
};

export const revalidate = 86400;

export function generateStaticParams() {
  return locales.filter((locale) => locale !== "es").map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LocalizedProjectsPageProps): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? getProjectsMetadata(lang) : {};
}

export default async function LocalizedProjectsPage({ params }: LocalizedProjectsPageProps) {
  const { lang } = await params;
  if (!isLocale(lang) || lang === "es") notFound();

  return <ProjectsPage locale={lang as Locale} projects={projects} />;
}
