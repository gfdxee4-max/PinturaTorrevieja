import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";
import { dictionaries, fallbackLocale, isLocale, locales, type Locale } from "@/config/i18n";
import { privacyTranslations } from "@/config/privacy-i18n";
import { siteConfig } from "@/config/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { getAbsoluteUrl } from "@/lib/seo";

type PrivacyPageProps = { params: Promise<{ lang: string }> };

export function generateStaticParams() { return locales.map((lang) => ({ lang })); }

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const canonical = getAbsoluteUrl(`/${lang}/privacy`);
  const copy = privacyTranslations[lang];
  const description = copy.paragraphs[0];
  const image = getAbsoluteUrl("/images/og-image.webp");
  return {
    title: copy.title,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(locales.map((locale) => [locale, getAbsoluteUrl(`/${locale}/privacy`)])),
        "x-default": getAbsoluteUrl(`/${fallbackLocale}/privacy`),
      },
    },
    openGraph: {
      type: "website",
      locale: dictionaries[lang].locale,
      alternateLocale: locales
        .filter((locale) => locale !== lang)
        .map((locale) => dictionaries[locale].locale),
      url: canonical,
      siteName: siteConfig.name,
      title: copy.title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description,
      images: [image],
    },
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dictionary = dictionaries[locale];
  const copy = privacyTranslations[locale];
  const whatsappUrl = createWhatsAppUrl(dictionary.whatsapp);

  return <><Header dictionary={dictionary} locale={locale} /><main className="min-h-[65vh] border-b border-white/[0.08] bg-[#050505] py-16 sm:py-24"><Container><div className="max-w-3xl"><h1 className="silver-text text-3xl font-semibold uppercase sm:text-5xl">{copy.title}</h1><span className="mt-5 block h-0.5 w-14 bg-redline" /><div className="mt-8 space-y-5 text-base leading-8 text-white/68">{copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><Link href={`/${locale}#reviews`} className="mt-10 inline-flex min-h-12 items-center border border-redline px-6 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-redline/10">{copy.back}</Link></div></Container></main><Footer dictionary={dictionary} locale={locale} whatsappUrl={whatsappUrl} /></>;
}
