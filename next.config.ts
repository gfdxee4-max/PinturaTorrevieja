import type { NextConfig } from "next";
import { locales } from "./src/config/locales";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-Frame-Options", value: "DENY" },
];
const spanishSeoPages = [
  "pintura-coche-torrevieja",
  "reparacion-carroceria",
  "pintura-parachoques",
  "pintura-puerta",
  "pintura-capo",
  "pintura-aleta",
  "pulido-faros",
  "pulido-carroceria",
];
const architectureSpanishPages = [
  "servicios",
  "servicios/pintura-coche",
  "servicios/pintar-coche-completo",
  "servicios/pintar-paragolpes",
  "servicios/reparacion-carroceria",
  "servicios/reparacion-aranazos-coche",
  "servicios/pulido-carroceria",
  "servicios/pulido-faros",
  "ciudades",
  "ciudades/torrevieja",
  "ciudades/orihuela-costa",
  "ciudades/guardamar-del-segura",
  "ciudades/ciudad-quesada",
  "ciudades/la-mata",
  "marcas",
  "trabajos-realizados",
  "blog",
  "blog/categoria/precios",
  "blog/categoria/pintura",
  "blog/categoria/reparacion",
  "blog/categoria/pulido",
  "blog/categoria/consejos",
  "blog/categoria/seguros",
  "blog/categoria/marcas",
  "blog/categoria/ciudades",
  "faq",
  "contacto",
  "sobre-nosotros",
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    globalNotFound: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      {
        source: "/reviews-admin/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
          {
            key: "Cache-Control",
            value: "private, no-store, max-age=0",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
        ],
      },
      ...locales.map((language) => ({
        source: `/${language}`,
        headers: [
          {
            key: "Content-Language",
            value: language,
          },
        ],
      })),
      ...spanishSeoPages.map((slug) => ({
        source: `/${slug}`,
        headers: [
          {
            key: "Content-Language",
            value: "es",
          },
        ],
      })),
      ...architectureSpanishPages.map((slug) => ({
        source: `/${slug}`,
        headers: [
          {
            key: "Content-Language",
            value: "es",
          },
        ],
      })),
    ];
  },
  async redirects() {
    return [
      {
        source: "/pintura-coche-torrevieja",
        destination: "/servicios/pintura-coche",
        permanent: true,
      },
      {
        source: "/pintura-parachoques",
        destination: "/servicios/pintar-paragolpes",
        permanent: true,
      },
      {
        source: "/reparacion-carroceria",
        destination: "/servicios/reparacion-carroceria",
        permanent: true,
      },
      {
        source: "/pulido-carroceria",
        destination: "/servicios/pulido-carroceria",
        permanent: true,
      },
      {
        source: "/pulido-faros",
        destination: "/servicios/pulido-faros",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
