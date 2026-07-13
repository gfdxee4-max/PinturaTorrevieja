import Link from "next/link";
import { ChevronDown, Globe2, Menu } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { LanguageLink } from "@/components/ui/language-link";
import {
  type Dictionary,
  languageNames,
  locales,
  type Locale,
  localizedPath,
  shortLanguageNames,
} from "@/config/i18n";
import { interfaceTranslations } from "@/config/interface-i18n";

type HeaderProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function Header({ dictionary, locale }: HeaderProps) {
  const ui = interfaceTranslations[locale];
  const homePath = localizedPath(locale);
  const navItems = [
    { label: dictionary.nav.home, href: homePath },
    { label: dictionary.nav.services, href: `${homePath}#services` },
    { label: dictionary.nav.booking, href: `${homePath}#booking` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.09] bg-[#050505]/95 backdrop-blur-xl">
      <Container className="flex h-[5.25rem] items-center justify-between gap-2 px-4 sm:px-8 lg:h-[6.5rem] lg:px-12 xl:px-16">
        <BrandLogo href={homePath} priority className="h-[3.2rem] w-[9.25rem] sm:w-[13rem] lg:h-[5rem] lg:w-[17rem]" />

        <nav aria-label={ui.mainNavigation} className="hidden min-w-0 items-center gap-8 lg:flex xl:gap-12">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-4 text-[0.78rem] font-medium uppercase tracking-[0.13em] text-white/76 transition duration-300 hover:text-white"
            >
              {item.label}
              <span
                className={`absolute inset-x-0 bottom-1 h-[2px] origin-left bg-redline transition duration-300 ${
                  index === 0 ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <details className="group relative">
            <summary className="flex h-10 cursor-pointer list-none items-center gap-1.5 border border-white/20 bg-black/60 px-2 text-xs font-semibold uppercase tracking-[0.08em] text-white outline-none transition hover:border-white/45 sm:h-11 sm:gap-2 sm:px-4 [&::-webkit-details-marker]:hidden">
              <Globe2 className="hidden size-4 text-white/68 sm:block" aria-hidden="true" />
              <span>{shortLanguageNames[locale]}</span>
              <ChevronDown className="size-3.5 text-white/55 transition group-open:rotate-180" aria-hidden="true" />
            </summary>
            <nav
              aria-label={ui.languageMenu}
              className="absolute right-0 top-[calc(100%+0.6rem)] z-[60] grid max-h-[min(70vh,32rem)] w-56 overflow-y-auto border border-white/16 bg-black/[0.98] p-1 shadow-soft backdrop-blur-xl"
            >
              {locales.map((item) => (
                <LanguageLink
                  key={item}
                  href={localizedPath(item)}
                  targetLocale={item}
                  hrefLang={item}
                  aria-current={item === locale ? "page" : undefined}
                  className="flex items-center justify-between px-3 py-3 text-xs font-semibold text-white/66 transition hover:bg-white/[0.07] hover:text-white aria-[current=page]:bg-redline/15 aria-[current=page]:text-white"
                >
                  <span>{languageNames[item]}</span>
                  <span className="font-bold uppercase tracking-[0.12em] text-white/42">
                    {shortLanguageNames[item]}
                  </span>
                </LanguageLink>
              ))}
            </nav>
          </details>

          <details className="group relative lg:hidden">
            <summary
              className="flex size-10 cursor-pointer list-none items-center justify-center border border-white/20 bg-black/60 text-white outline-none transition hover:border-white/45 sm:size-11 [&::-webkit-details-marker]:hidden"
              aria-label={ui.menu}
            >
              <Menu className="size-5" aria-hidden="true" />
            </summary>
            <nav
              aria-label={ui.mainNavigation}
              className="absolute right-0 top-[calc(100%+0.6rem)] z-[60] grid w-56 border border-white/16 bg-black/[0.98] p-2 shadow-soft"
            >
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={index === 0 ? "page" : undefined}
                  className="border-b border-white/[0.08] px-3 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white/72 transition last:border-b-0 hover:bg-white/[0.06] hover:text-white aria-[current=page]:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
