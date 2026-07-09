import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/config/i18n";

export function middleware(request: NextRequest) {
  const [, segment] = request.nextUrl.pathname.split("/");
  const response = NextResponse.next();

  if (isLocale(segment)) {
    response.headers.set("Content-Language", segment);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|apple-touch-icon.png|icon.svg|robots.txt|sitemap.xml).*)",
  ],
};
