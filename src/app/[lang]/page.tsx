import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SitePage } from "@/components/page/site-page";
import { isLocale, locales, type Locale } from "@/config/i18n";
import { getPageMetadata } from "@/lib/seo";

type LocalizedPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({
    lang,
  }));
}

export async function generateMetadata({
  params,
}: LocalizedPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  return getPageMetadata(lang);
}

export default async function LocalizedPage({ params }: LocalizedPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return <SitePage locale={lang as Locale} />;
}
