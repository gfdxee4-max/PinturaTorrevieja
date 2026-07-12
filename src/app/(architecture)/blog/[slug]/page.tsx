import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, MessageCircle, Phone } from "lucide-react";
import { ArticleCard } from "@/components/blog/article-card";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/ui/brand-logo";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import {
  blogArticles,
  blogWhatsappUrl,
  getBlogArticle,
  getBlogArticleMetadata,
  getBlogArticleStructuredData,
  getBlogCategory,
  getReadingTime,
  getRelatedArticles,
} from "@/config/blog";
import { siteConfig } from "@/config/site";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {};
  }

  return getBlogArticleMetadata(article);
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const category = getBlogCategory(article.category);
  const readingTime = getReadingTime(article);
  const relatedArticles = getRelatedArticles(article);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/88 backdrop-blur-xl">
        <Container className="flex min-h-[5.8rem] items-center justify-between gap-4 py-3">
          <BrandLogo priority />
          <Link
            href="/blog"
            className="text-xs font-black uppercase tracking-[0.12em] text-white/70 transition hover:text-white"
          >
            Blog
          </Link>
        </Container>
      </header>

      <main className="bg-black text-white">
        <article>
          <section className="border-b border-white/10 py-14 sm:py-20">
            <Container>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-redline">
                {category?.name ?? "Blog"}
              </p>
              <h1 className="silver-text mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5.4rem)] font-black uppercase leading-[0.94] tracking-normal">
                {article.h1}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/76 sm:text-xl">
                {article.excerpt}
              </p>
              <div className="mt-7 flex flex-wrap gap-4 text-xs font-black uppercase tracking-[0.12em] text-white/52">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  {article.dateModified}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4" aria-hidden="true" />
                  {readingTime} min
                </span>
                <span>{article.author.name}</span>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={blogWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded bg-redline px-6 text-sm font-black uppercase tracking-[0.06em] text-white shadow-red transition hover:-translate-y-0.5 hover:bg-[#ff101b]"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  WhatsApp
                </Link>
                <Link
                  href={`tel:${siteConfig.telephone.replace(/\s/g, "")}`}
                  className="inline-flex h-14 items-center justify-center gap-3 rounded border border-white/22 px-6 text-sm font-black uppercase tracking-[0.06em] text-white transition hover:border-white/55"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  Llamar
                </Link>
              </div>
            </Container>
          </section>

          <Container className="grid gap-8 py-12 lg:grid-cols-[18rem_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded border border-white/12 bg-white/[0.035] p-5">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-white/48">
                  Contenido
                </p>
                <nav className="mt-4 grid gap-2" aria-label="Tabla de contenidos">
                  {article.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-sm font-bold leading-6 text-white/62 transition hover:text-white"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="space-y-6">
              {article.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 rounded border border-white/12 bg-white/[0.03] p-6 sm:p-8"
                >
                  <h2 className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-white/72">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </Container>

          {article.faq?.length ? (
            <section className="border-t border-white/10 py-12">
              <Container>
                <h2 className="text-3xl font-black uppercase leading-tight text-white">
                  Preguntas frecuentes
                </h2>
                <div className="mt-7 grid gap-3 md:grid-cols-2">
                  {article.faq.map((item) => (
                    <article
                      key={item.question}
                      className="rounded border border-white/12 bg-white/[0.035] p-5"
                    >
                      <h3 className="text-base font-black leading-6 text-white">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/68">{item.answer}</p>
                    </article>
                  ))}
                </div>
              </Container>
            </section>
          ) : null}

          {relatedArticles.length ? (
            <section className="border-t border-white/10 py-12">
              <Container>
                <h2 className="text-3xl font-black uppercase leading-tight text-white">
                  Articulos relacionados
                </h2>
                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  {relatedArticles.map((item) => (
                    <ArticleCard key={item.slug} article={item} />
                  ))}
                </div>
              </Container>
            </section>
          ) : null}
        </article>
      </main>

      <FloatingWhatsApp whatsappUrl={blogWhatsappUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogArticleStructuredData(article)) }}
      />
    </>
  );
}
