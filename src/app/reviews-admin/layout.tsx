import "@/app/globals.css";
import { RootDocument, rootMetadata, rootViewport } from "@/components/layout/root-document";

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function ReviewsAdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
