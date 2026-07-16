import { NextResponse, type NextRequest } from "next/server";
import {
  detectLocaleFromAcceptLanguage,
  isSupportedLocale,
  manualLocaleCookieName,
} from "@/config/locales";

export function middleware(request: NextRequest) {
  const isReviewsAdmin = request.nextUrl.pathname.startsWith("/reviews-admin");

  if (isReviewsAdmin) {
    const user = process.env.REVIEWS_ADMIN_USER;
    const password = process.env.REVIEWS_ADMIN_PASSWORD;
    if (!user || !password) return new NextResponse("Not Found", { status: 404 });
    const expected = `Basic ${btoa(`${user}:${password}`)}`;
    if (request.headers.get("authorization") !== expected) {
      return new NextResponse("Authentication required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="PaintLab reviews", charset="UTF-8"',
          "Cache-Control": "private, no-store, max-age=0",
          "X-Robots-Tag": "noindex, nofollow, noarchive",
        },
      });
    }
  }

  if (request.nextUrl.pathname === "/") {
    const savedLocale = request.cookies.get(manualLocaleCookieName)?.value;
    const locale = savedLocale && isSupportedLocale(savedLocale)
      ? savedLocale
      : detectLocaleFromAcceptLanguage(request.headers.get("accept-language"));
    const forwardedHost = request.headers.get("x-forwarded-host");
    const host = forwardedHost ?? request.headers.get("host") ?? request.nextUrl.host;
    const forwardedProtocol = request.headers.get("x-forwarded-proto");
    const protocol = forwardedProtocol ?? request.nextUrl.protocol.replace(":", "");
    const destination = new URL(`/${locale}${request.nextUrl.search}`, `${protocol}://${host}`);
    const redirectResponse = NextResponse.redirect(destination, 307);
    redirectResponse.headers.set("Cache-Control", "private, no-store");
    redirectResponse.headers.set("Vary", "Cookie, Accept-Language");
    return redirectResponse;
  }

  const response = NextResponse.next();

  if (isReviewsAdmin) {
    response.headers.set("Cache-Control", "private, no-store, max-age=0");
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

export const config = {
  matcher: ["/", "/reviews-admin/:path*"],
};
