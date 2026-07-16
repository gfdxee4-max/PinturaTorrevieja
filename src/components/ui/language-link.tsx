"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { locales, type Locale } from "@/config/i18n";
import { manualLocaleCookieMaxAge, manualLocaleCookieName } from "@/config/locales";

type LanguageLinkProps = ComponentProps<typeof Link> & { targetLocale: Locale };

export function LanguageLink({ targetLocale, onClick, ...props }: LanguageLinkProps) {
  return <Link {...props} onClick={(event) => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const segments = window.location.pathname.split("/");
    if (!locales.includes(segments[1] as Locale)) return;
    event.preventDefault();
    segments[1] = targetLocale;
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${manualLocaleCookieName}=${targetLocale}; Path=/; Max-Age=${manualLocaleCookieMaxAge}; SameSite=Lax${secure}`;
    window.location.assign(`${segments.join("/")}${window.location.search}${window.location.hash}`);
  }} />;
}
