import { EstimateSection } from "@/components/sections/estimate-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { dictionaries, type Locale } from "@/config/i18n";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { getStructuredData } from "@/lib/seo";

type SitePageProps = {
  locale: Locale;
};

export function SitePage({ locale }: SitePageProps) {
  const dictionary = dictionaries[locale];
  const whatsappUrl = createWhatsAppUrl(dictionary.whatsapp);

  return (
    <>
      <Header dictionary={dictionary} locale={locale} />
      <main>
        <HeroSection dictionary={dictionary} whatsappUrl={whatsappUrl} />
        <ServicesSection locale={locale} />
        <ReviewsSection locale={locale} />
        <EstimateSection dictionary={dictionary} whatsappUrl={whatsappUrl} />
        <FaqSection locale={locale} />
      </main>
      <Footer dictionary={dictionary} whatsappUrl={whatsappUrl} />
      <FloatingWhatsApp whatsappUrl={whatsappUrl} />
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(locale)};`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData(locale)),
        }}
      />
    </>
  );
}
