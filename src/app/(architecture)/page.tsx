import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { fallbackLocale, isLocale, localizedPath } from "@/config/i18n";
import {
  detectLocaleFromAcceptLanguage,
  isSearchCrawler,
  manualLocaleCookieName,
} from "@/config/locales";

export default async function Home() {
  const headersList = await headers();

  if (isSearchCrawler(headersList.get("user-agent"))) {
    redirect(localizedPath(fallbackLocale));
  }

  const cookieStore = await cookies();
  const savedLocale = cookieStore.get(manualLocaleCookieName)?.value;

  if (savedLocale && isLocale(savedLocale)) {
    redirect(localizedPath(savedLocale));
  }

  const locale = detectLocaleFromAcceptLanguage(
    headersList.get("accept-language"),
    fallbackLocale,
  );

  redirect(localizedPath(locale));
}
