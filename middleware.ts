import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/config/i18n";

const localeCookieMaxAge = 60 * 60 * 24 * 365;

export function middleware(request: NextRequest) {
  const [, segment] = request.nextUrl.pathname.split("/");
  const response = NextResponse.next();

  if (isLocale(segment)) {
    response.headers.set("Content-Language", segment);
    response.cookies.set("pt_locale", segment, {
      path: "/",
      maxAge: localeCookieMaxAge,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|apple-touch-icon.png|icon.svg|robots.txt|sitemap.xml).*)",
  ],
};
