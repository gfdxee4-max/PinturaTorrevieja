import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedServicePage } from "@/components/page/localized-service-page";
import {
  getLocalizedServicePage,
  localizedServicePages,
} from "@/config/localized-service-pages";
import { getLocalizedServiceMetadata } from "@/lib/localized-service-seo";

type ServiceRouteProps = {
  params: Promise<{
    lang: string;
    serviceSlug: string;
  }>;
};

export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return localizedServicePages.map((page) => ({
    lang: page.locale,
    serviceSlug: page.slug,
  }));
}

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { lang, serviceSlug } = await params;
  const page = getLocalizedServicePage(lang, serviceSlug);

  return page ? getLocalizedServiceMetadata(page) : {};
}

export default async function LocalizedServiceRoute({ params }: ServiceRouteProps) {
  const { lang, serviceSlug } = await params;
  const page = getLocalizedServicePage(lang, serviceSlug);

  if (!page) notFound();

  return <LocalizedServicePage page={page} />;
}

