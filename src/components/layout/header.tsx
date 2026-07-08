import Link from "next/link";
import { Container } from "@/components/ui/container";
import {
  type Dictionary,
  languageNames,
  locales,
  type Locale,
  localizedPath,
  shortLanguageNames,
} from "@/config/i18n";

type HeaderProps = {
  dictionary: Dictionary;
  locale: Locale;
};

export function Header({ dictionary, locale }: HeaderProps) {
  const navItems = [
    { label: dictionary.nav.home, href: "#" },
    { label: dictionary.nav.services, href: "#services" },
    { label: dictionary.nav.booking, href: "#booking" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/88 backdrop-blur-xl">
      <Container className="flex min-h-[5.8rem] items-center justify-between gap-3 py-3">
        <Link
          href="/"
          className="group shrink-0"
          aria-label="PINTURA TORREVIEJA"
        >
          <span className="mb-1 block h-[2px] w-24 bg-redline transition group-hover:w-32" />
          <span className="block text-[1.2rem] font-black uppercase leading-none tracking-[0.04em] text-chrome sm:text-[1.65rem] lg:text-[1.9rem]">
            PINTURA
          </span>
          <span className="block text-[1.05rem] font-black uppercase leading-none tracking-[0.08em] text-redline sm:text-[1.38rem] lg:text-[1.55rem]">
            TORREVIEJA
          </span>
        </Link>
        <nav aria-label="Navegacion principal" className="hidden min-w-0 items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-3 text-xs font-black uppercase tracking-[0.12em] text-white/82 transition hover:text-white"
            >
              {item.label}
              <span
                className={`absolute inset-x-0 -bottom-1 h-[2px] origin-left bg-redline transition duration-300 ${
                  index === 0 ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>
        <details className="group relative shrink-0">
          <summary className="flex h-11 cursor-pointer list-none items-center gap-2 rounded border border-white/18 bg-black/70 px-3 text-xs font-black uppercase tracking-[0.08em] text-white outline-none transition hover:border-white/45 sm:px-4 [&::-webkit-details-marker]:hidden">
            <span aria-hidden="true">🌐</span>
            <span>{shortLanguageNames[locale]}</span>
            <span className="text-[0.65rem] text-white/60 transition group-open:rotate-180" aria-hidden="true">
              ▼
            </span>
          </summary>
          <nav
            aria-label="Language"
            className="absolute right-0 top-[calc(100%+0.6rem)] z-[60] grid w-56 overflow-hidden rounded border border-white/14 bg-black/96 p-1 shadow-soft backdrop-blur-xl"
          >
            {locales.map((item) => (
              <Link
                key={item}
                href={localizedPath(item)}
                hrefLang={item}
                aria-current={item === locale ? "page" : undefined}
                className="flex items-center justify-between rounded px-3 py-3 text-xs font-bold text-white/68 transition hover:bg-white/8 hover:text-white aria-[current=page]:bg-redline/18 aria-[current=page]:text-white"
              >
                <span>{languageNames[item]}</span>
                <span className="font-black uppercase tracking-[0.12em] text-white/50">
                  {shortLanguageNames[item]}
                </span>
              </Link>
            ))}
          </nav>
        </details>
      </Container>
    </header>
  );
}
