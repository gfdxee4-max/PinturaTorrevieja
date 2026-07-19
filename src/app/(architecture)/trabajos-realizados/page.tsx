import { ProjectsPage } from "@/components/projects/projects-page";
import { projects } from "@/data/projects";
import { getProjectsMetadata } from "@/lib/project-seo";

export const metadata = getProjectsMetadata("es");
export const revalidate = 86400;

export default function SpanishProjectsPage() {
  return <ProjectsPage locale="es" projects={projects} />;
}
