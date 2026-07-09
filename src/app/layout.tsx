import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/app/globals.css";
import { defaultLocale, isLocale } from "@/config/i18n";
import { siteConfig } from "@/config/site";
import { getDefaultMetadata } from "@/lib/seo";

const googleAnalyticsId = "G-P54KMBNC0Z";
const defaultMetadata = getDefaultMetadata();

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
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
