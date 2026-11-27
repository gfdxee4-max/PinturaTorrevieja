import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedServicePage } from "@/components/page/localized-service-page";
import {
  getLocalizedServicePage,
  localizedServicePages,
} from "@/config/localized-service-pages";
import { getLocalizedServiceMetadata } from "@/lib/localized-service-seo";
import { ArchitecturePage } from "@/components/page/architecture-page";
import { getArchitectureMetadata } from "@/config/architecture";
import { frameStraighteningPages, getFrameStraighteningPage } from "@/config/frame-straightening-pages";

type ServiceRouteProps = {
  params: Promise<{
    lang: string;
    serviceSlug: string;
  }>;
};

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return [...localizedServicePages.filter((page) => page.locale !== "es").map((page) => ({
    lang: page.locale,
    serviceSlug: page.slug,
  })), ...frameStraighteningPages.filter(p => p.locale !== "es").map(p => ({ lang: p.locale!, serviceSlug: p.path.split("/").at(-1)! }))];
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { lang, serviceSlug } = await params;
  const page = lang === "es" ? undefined : getLocalizedServicePage(lang, serviceSlug);

  if (page) return getLocalizedServiceMetadata(page);
  const frame = lang === "es" ? undefined : getFrameStraighteningPage(lang, serviceSlug);
  return frame ? getArchitectureMetadata(frame) : {};
}

export default async function LocalizedServiceRoute({ params }: ServiceRouteProps) {
  const { lang, serviceSlug } = await params;
  const page = lang === "es" ? undefined : getLocalizedServicePage(lang, serviceSlug);

  if (page) return <LocalizedServicePage page={page} />;
  const frame = lang === "es" ? undefined : getFrameStraighteningPage(lang, serviceSlug);
  if (frame) return <ArchitecturePage page={frame} />;
  notFound();
}

