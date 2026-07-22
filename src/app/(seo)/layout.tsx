import "@/app/globals.css";
import { RootDocument, rootMetadata, rootViewport } from "@/components/layout/root-document";

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function SpanishSeoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="es">{children}</RootDocument>;
}
