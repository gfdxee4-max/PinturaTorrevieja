import type { NextConfig } from "next";

const languages = ["es", "en", "ru", "uk", "de", "fr", "pl", "ro", "nl", "it"];
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

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      ...languages.map((language) => ({
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
    ];
  },
};

export default nextConfig;
