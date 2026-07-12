import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { BlogExplorer } from "@/components/blog/blog-explorer";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/ui/brand-logo";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import {
  blogArticles,
  blogCategories,
  blogWhatsappUrl,
  getBlogIndexStructuredData,
  type BlogCategory,
} from "@/config/blog";
import { siteConfig } from "@/config/site";

type BlogIndexPageProps = {
  category?: BlogCategory;
};

export function BlogIndexPage({ category }: BlogIndexPageProps) {
  const title = category ? `Blog: ${category.name}` : "Blog de pintura y carroceria";
  const lead = category
    ? category.description
    : "Sistema preparado para guias profesionales sobre precios, pintura, reparacion, pulido, consejos, seguros, marcas y ciudades.";

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/88 backdrop-blur-xl">
        <Container className="flex min-h-[5.8rem] items-center justify-between gap-4 py-3">
          <BrandLogo priority />
          <nav className="hidden items-center gap-5 sm:flex" aria-label="Blog">
            <Link className="text-xs font-black uppercase tracking-[0.12em] text-white/70 hover:text-white" href="/blog">
              Blog
            </Link>
            <Link className="text-xs font-black uppercase tracking-[0.12em] text-white/70 hover:text-white" href="/servicios">
              Servicios
            </Link>
            <Link className="text-xs font-black uppercase tracking-[0.12em] text-white/70 hover:text-white" href="/contacto">
              Contacto
            </Link>
          </nav>
        </Container>
      </header>

      <main className="bg-black text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(229,9,20,0.22),transparent_28%),linear-gradient(90deg,#000_0%,rgba(0,0,0,0.95)_45%,rgba(0,0,0,0.5)_100%)]" />
          <Container className="relative py-14 sm:py-20">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-redline">
              Guias
            </p>
            <h1 className="silver-text mt-5 max-w-4xl text-[clamp(2.6rem,6.2vw,5.8rem)] font-black uppercase leading-[0.92] tracking-normal">
              {title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/76 sm:text-xl">
              {lead}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={blogWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-3 rounded bg-redline px-6 text-sm font-black uppercase tracking-[0.06em] text-white shadow-red transition hover:-translate-y-0.5 hover:bg-[#ff101b]"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Consultar por WhatsApp
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

        <section className="border-b border-white/10 py-12 sm:py-16">
          <Container>
            <BlogExplorer
              articles={blogArticles}
              categories={blogCategories}
              activeCategory={category?.slug}
            />
          </Container>
        </section>
      </main>

      <FloatingWhatsApp whatsappUrl={blogWhatsappUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogIndexStructuredData(category)) }}
      />
    </>
  );
}
