import { EstimateSection } from "@/components/sections/estimate-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { RuSeoSection, RuServiceAreaNote } from "@/components/sections/ru-seo-section";
import { UkSeoSection } from "@/components/sections/uk-seo-section";
import { EsSeoSection } from "@/components/sections/es-seo-section";
import { DeSeoSection } from "@/components/sections/de-seo-section";
import { EnSeoSection } from "@/components/sections/en-seo-section";
import { RepairBridgeSection } from "@/components/sections/repair-bridge-section";
import { dictionaries, type Locale } from "@/config/i18n";
import { reportMissingTranslationsInDevelopment } from "@/config/i18n-validation";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { getStructuredData } from "@/lib/seo";

type SitePageProps = {
  locale: Locale;
};

export function SitePage({ locale }: SitePageProps) {
  reportMissingTranslationsInDevelopment();
  const dictionary = dictionaries[locale];
  const whatsappUrl = createWhatsAppUrl(dictionary.whatsapp);

  return (
    <>
      <Header dictionary={dictionary} locale={locale} />
      <main>
        <HeroSection dictionary={dictionary} whatsappUrl={whatsappUrl} />
        <ServicesSection locale={locale} />
        {locale === "en" ? <EnSeoSection /> : null}
        {locale === "de" ? <DeSeoSection /> : null}
        {locale === "es" ? <EsSeoSection /> : null}
        {locale === "ru" ? <RuSeoSection /> : null}
        {locale === "uk" ? <UkSeoSection /> : null}
        <RepairBridgeSection locale={locale} />
        <ReviewsSection locale={locale} />
        <EstimateSection dictionary={dictionary} whatsappUrl={whatsappUrl} />
        <FaqSection locale={locale} />
        {locale === "ru" ? <RuServiceAreaNote /> : null}
      </main>
      <Footer dictionary={dictionary} locale={locale} whatsappUrl={whatsappUrl} />
      <FloatingWhatsApp whatsappUrl={whatsappUrl} locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData(locale)),
        }}
      />
    </>
  );
}
