import { cookies } from "next/headers";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { fallbackLocale, isLocale, localizedPath, type Locale } from "@/config/i18n";

const localeCookieName = "pt_locale";

function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return fallbackLocale;
  }

  const candidates = acceptLanguage
    .split(",")
    .map((entry) => entry.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  for (const candidate of candidates) {
    const primary = candidate.split("-")[0] === "no" ? "nb" : candidate.split("-")[0];

    if (isLocale(primary)) {
      return primary;
    }
  }

  return fallbackLocale;
}

export default async function Home() {
  const cookieStore = await cookies();
  const savedLocale = cookieStore.get(localeCookieName)?.value;

  if (savedLocale && isLocale(savedLocale)) {
    redirect(localizedPath(savedLocale));
  }

  const headersList = await headers();
  const locale = detectLocale(headersList.get("accept-language"));

  redirect(localizedPath(locale));
}
