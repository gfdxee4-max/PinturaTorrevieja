import { cookies } from "next/headers";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { fallbackLocale, isLocale, localizedPath } from "@/config/i18n";
import { detectLocaleFromAcceptLanguage, manualLocaleCookieName } from "@/config/locales";

export default async function Home() {
  const cookieStore = await cookies();
  const savedLocale = cookieStore.get(manualLocaleCookieName)?.value;

  if (savedLocale && isLocale(savedLocale)) {
    redirect(localizedPath(savedLocale));
  }

  const headersList = await headers();
  const locale = detectLocaleFromAcceptLanguage(headersList.get("accept-language"), fallbackLocale);

  redirect(localizedPath(locale));
}
