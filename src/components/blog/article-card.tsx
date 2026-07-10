import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getBlogCategory, getReadingTime, type BlogArticle } from "@/config/blog";

type ArticleCardProps = {
  article: BlogArticle;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const category = getBlogCategory(article.category);
  const readingTime = getReadingTime(article);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex min-h-[18rem] flex-col justify-between rounded border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))] p-5 transition hover:-translate-y-1 hover:border-redline/70"
    >
      <div>
        <p className="text-xs font-black uppercase tracking-[0.16em] text-redline">
          {category?.name ?? "Blog"}
        </p>
        <h2 className="mt-4 text-2xl font-black uppercase leading-tight text-white">
          {article.title}
        </h2>
        <p className="mt-4 text-sm leading-6 text-white/68">{article.excerpt}</p>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4 text-xs font-black uppercase tracking-[0.08em] text-white/50">
        <span className="inline-flex items-center gap-2">
          <Clock className="size-4" aria-hidden="true" />
          {readingTime} min
        </span>
        <ArrowRight className="size-5 text-redline transition group-hover:translate-x-1" aria-hidden="true" />
      </div>
    </Link>
  );
}
