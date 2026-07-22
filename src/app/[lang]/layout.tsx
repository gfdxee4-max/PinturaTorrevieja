import "@/app/globals.css";
import { RootDocument, rootMetadata, rootViewport } from "@/components/layout/root-document";
import { defaultLocale, isLocale } from "@/config/i18n";

export const metadata = rootMetadata;
export const viewport = rootViewport;

type LocalizedLayoutProps = Readonly<{
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}>;

export default async function LocalizedLayout({ params, children }: LocalizedLayoutProps) {
  const { lang } = await params;
  const documentLanguage = isLocale(lang) ? lang : defaultLocale;

  return <RootDocument lang={documentLanguage}>{children}</RootDocument>;
}
