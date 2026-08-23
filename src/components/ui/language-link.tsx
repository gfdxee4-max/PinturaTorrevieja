"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { locales, type Locale } from "@/config/i18n";
import { manualLocaleCookieMaxAge, manualLocaleCookieName } from "@/config/locales";

type LanguageLinkProps = ComponentProps<typeof Link> & {
  targetLocale: Locale;
  preservePath?: boolean;
};

export function LanguageLink({
  targetLocale,
  preservePath = true,
  onClick,
  ...props
}: LanguageLinkProps) {
  return <Link {...props} onClick={(event) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${manualLocaleCookieName}=${targetLocale}; Path=/; Max-Age=${manualLocaleCookieMaxAge}; SameSite=Lax${secure}`;

    const segments = window.location.pathname.split("/");
    if (preservePath && locales.includes(segments[1] as Locale)) {
      segments[1] = targetLocale;
      window.location.assign(`${segments.join("/")}${window.location.search}${window.location.hash}`);
      return;
    }

    const destination = new URL(event.currentTarget.href);
    if (!destination.search) destination.search = window.location.search;
    if (!destination.hash) destination.hash = window.location.hash;
    window.location.assign(destination.toString());
  }} />;
}
