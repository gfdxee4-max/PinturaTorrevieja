"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/ui/brand-logo";
import { fallbackLocale, isLocale } from "@/config/i18n";
import { interfaceTranslations } from "@/config/interface-i18n";

export default function NotFound() {
  const [locale, setLocale] = useState(fallbackLocale);

  useEffect(() => {
    const current = document.documentElement.lang;
    if (isLocale(current)) setLocale(current);
  }, []);
  return (
    <main className="min-h-[70svh] bg-ink py-20">
      <Container>
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-signal">404</p>
          <BrandLogo className="mt-5 h-[6rem] w-[19rem]" />
          <Link
            href="/"
            className="mt-8 inline-flex h-11 items-center border border-redline bg-redline px-5 text-sm font-semibold text-white transition hover:bg-[#f00000]"
          >
            {interfaceTranslations[locale].notFoundBack}
          </Link>
        </div>
      </Container>
    </main>
  );
}
