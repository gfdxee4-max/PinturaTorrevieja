import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/app/globals.css";
import { defaultLocale, isLocale } from "@/config/i18n";
import { siteConfig } from "@/config/site";
import { getDefaultMetadata, getLocalBusinessStructuredData } from "@/lib/seo";

const googleAnalyticsId = "G-P54KMBNC0Z";
const iconVersion = "20260715-210907";
const defaultMetadata = getDefaultMetadata();
const localBusinessStructuredData = getLocalBusinessStructuredData();

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: [
      { url: `/favicon.ico?v=${iconVersion}`, sizes: "any" },
      { url: `/favicon-16x16.png?v=${iconVersion}`, sizes: "16x16", type: "image/png" },
      { url: `/favicon-32x32.png?v=${iconVersion}`, sizes: "32x32", type: "image/png" },
      { url: `/icon.png?v=${iconVersion}`, sizes: "512x512", type: "image/png" },
    ],
    shortcut: `/favicon.ico?v=${iconVersion}`,
    apple: [
      { url: `/apple-touch-icon.png?v=${iconVersion}`, sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: `/manifest.webmanifest?v=${iconVersion}`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params?: Promise<{
    lang?: string;
  }>;
  children: React.ReactNode;
}>) {
  const resolvedParams = params ? await params : undefined;
  const lang =
    resolvedParams?.lang && isLocale(resolvedParams.lang)
      ? resolvedParams.lang
      : defaultLocale;

  return (
    <html lang={lang}>
      <body className="font-sans">
        {children}
        <script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessStructuredData),
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  );
}
