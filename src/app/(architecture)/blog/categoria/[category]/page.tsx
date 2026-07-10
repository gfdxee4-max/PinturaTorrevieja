import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogIndexPage } from "@/components/blog/blog-index-page";
import {
  blogCategories,
  getBlogCategory,
  getBlogCategoryMetadata,
} from "@/config/blog";

type BlogCategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return blogCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getBlogCategory(categorySlug);

  if (!category) {
    return {};
  }

  return getBlogCategoryMetadata(category);
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getBlogCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return <BlogIndexPage category={category} />;
}
