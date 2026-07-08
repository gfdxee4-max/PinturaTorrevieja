"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import type { Locale } from "@/config/i18n";

const maxAge = 60 * 60 * 24 * 365;

type LanguageLinkProps = ComponentProps<typeof Link> & {
  locale: Locale;
};

export function LanguageLink({ locale, onClick, ...props }: LanguageLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        document.cookie = `pt_locale=${locale}; path=/; max-age=${maxAge}; SameSite=Lax`;
        onClick?.(event);
      }}
    />
  );
}
