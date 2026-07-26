import { Facebook, Instagram } from "lucide-react";
import { socialLinks } from "@/config/social-links";

type SocialLinksProps = {
  variant: "desktop" | "mobile";
};

const icons = {
  facebook: Facebook,
  instagram: Instagram,
} as const;

export function SocialLinks({ variant }: SocialLinksProps) {
  const isDesktop = variant === "desktop";

  return (
    <div
      className={
        isDesktop
          ? "hidden items-center gap-1 lg:flex"
          : "mt-1 grid grid-cols-2 gap-2 pt-2"
      }
    >
      {socialLinks.map((item) => {
        const Icon = icons[item.id];

        return (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            className={
              isDesktop
                ? "flex size-9 items-center justify-center border border-white/12 bg-white/[0.025] text-white/62 transition hover:border-redline/70 hover:bg-redline/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                : "flex min-h-11 items-center justify-center gap-2 border border-white/12 bg-white/[0.025] px-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-white/72 transition hover:border-redline/70 hover:bg-redline/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            }
          >
            <Icon className="size-4" aria-hidden="true" />
            {isDesktop ? <span className="sr-only">{item.name}</span> : <span>{item.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
