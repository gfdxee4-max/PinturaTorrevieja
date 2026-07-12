import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/config/i18n";

const localeCookieMaxAge = 60 * 60 * 24 * 365;

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/reviews-admin")) {
    const user = process.env.REVIEWS_ADMIN_USER;
    const password = process.env.REVIEWS_ADMIN_PASSWORD;
    if (!user || !password) return new NextResponse("Not Found", { status: 404 });
    const expected = `Basic ${btoa(`${user}:${password}`)}`;
    if (request.headers.get("authorization") !== expected) {
      return new NextResponse("Authentication required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="PaintLab reviews", charset="UTF-8"',
          "X-Robots-Tag": "noindex, nofollow",
        },
      });
    }
  }

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
  matcher: ["/((?!_next|favicon.ico|apple-touch-icon.png|icon.svg|robots.txt|sitemap.xml).*)"],
};
