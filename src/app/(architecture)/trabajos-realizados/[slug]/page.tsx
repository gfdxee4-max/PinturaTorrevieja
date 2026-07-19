import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/projects/project-detail-page";
import { getProject, projects } from "@/data/projects";
import { getProjectMetadata } from "@/lib/project-seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 86400;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? getProjectMetadata(project, "es") : {};
}

export default async function SpanishProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return <ProjectDetailPage locale="es" project={project} />;
}
