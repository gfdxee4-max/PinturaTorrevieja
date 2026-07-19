import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/projects/project-detail-page";
import { isLocale, locales, type Locale } from "@/config/i18n";
import { getProject, projects } from "@/data/projects";
import { getProjectMetadata } from "@/lib/project-seo";

type LocalizedProjectPageProps = {
  params: Promise<{ lang: string; slug: string }>;
};

export const revalidate = 86400;

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "es")
    .flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug })));
}

export async function generateMetadata({ params }: LocalizedProjectPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = getProject(slug);
  return isLocale(lang) && lang !== "es" && project ? getProjectMetadata(project, lang) : {};
}

export default async function LocalizedProjectPage({ params }: LocalizedProjectPageProps) {
  const { lang, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(lang) || lang === "es" || !project) notFound();

  return <ProjectDetailPage locale={lang as Locale} project={project} />;
}
