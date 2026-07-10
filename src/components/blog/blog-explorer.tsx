"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import type { BlogArticle, BlogCategory, BlogCategorySlug } from "@/config/blog";
import { ArticleCard } from "@/components/blog/article-card";

type BlogExplorerProps = {
  articles: BlogArticle[];
  categories: BlogCategory[];
  activeCategory?: BlogCategorySlug;
};

export function BlogExplorer({ articles, categories, activeCategory }: BlogExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlogCategorySlug | "all">(activeCategory ?? "all");

  const visibleArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory = category === "all" || article.category === category;
      const matchesQuery =
        !normalizedQuery ||
        [article.title, article.description, article.excerpt]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [articles, category, query]);

  return (
    <div className="rounded border border-white/12 bg-white/[0.035] p-5 sm:p-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="relative block">
          <span className="sr-only">Buscar articulos</span>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-white/42"
            aria-hidden="true"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por tema, servicio o duda"
            className="h-12 w-full rounded border border-white/14 bg-black/50 pl-12 pr-4 text-sm font-bold text-white outline-none transition placeholder:text-white/36 focus:border-redline"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`h-10 rounded border px-4 text-xs font-black uppercase tracking-[0.08em] transition ${
              category === "all"
                ? "border-redline bg-redline text-white"
                : "border-white/14 bg-black/40 text-white/62 hover:border-white/45 hover:text-white"
            }`}
          >
            Todas
          </button>
          {categories.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setCategory(item.slug)}
              className={`h-10 rounded border px-4 text-xs font-black uppercase tracking-[0.08em] transition ${
                category === item.slug
                  ? "border-redline bg-redline text-white"
                  : "border-white/14 bg-black/40 text-white/62 hover:border-white/45 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((item) => (
          <Link
            key={item.slug}
            href={`/blog/categoria/${item.slug}`}
            className="rounded border border-white/12 px-3 py-2 text-xs font-bold text-white/58 transition hover:border-redline/70 hover:text-white"
          >
            /{item.slug}
          </Link>
        ))}
      </div>

      {visibleArticles.length ? (
        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="mt-7 rounded border border-white/12 bg-black/35 p-6">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-white/48">
            Sin articulos publicados
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-white/68">
            La arquitectura del blog esta lista para publicar contenido real. No se han creado
            articulos automaticos ni textos ficticios.
          </p>
        </div>
      )}
    </div>
  );
}
