import { BlogIndexPage } from "@/components/blog/blog-index-page";
import { blogIndexMetadata } from "@/config/blog";

export const metadata = blogIndexMetadata;

export default function BlogHubPage() {
  return <BlogIndexPage />;
}
