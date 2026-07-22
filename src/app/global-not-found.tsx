import type { Metadata } from "next";
import Link from "next/link";
import "@/app/globals.css";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/ui/brand-logo";
import { interfaceTranslations } from "@/config/interface-i18n";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="es">
      <body className="font-sans">
        <main className="min-h-[70svh] bg-ink py-20">
          <Container>
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-signal">404</p>
              <BrandLogo className="mt-5 h-[6rem] w-[19rem]" />
              <Link
                href="/"
                className="mt-8 inline-flex h-11 items-center border border-redline bg-redline px-5 text-sm font-semibold text-white transition hover:bg-[#f00000]"
              >
                {interfaceTranslations.es.notFoundBack}
              </Link>
            </div>
          </Container>
        </main>
      </body>
    </html>
  );
}
