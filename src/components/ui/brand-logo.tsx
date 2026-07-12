import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  href?: string;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ href = "/es", className, priority = false }: BrandLogoProps) {
  return (
    <Link
      href={href}
      aria-label="PaintLab Torrevieja"
      className={cn(
        "relative block h-[4.25rem] w-[13.5rem] shrink-0 sm:h-[4.75rem] sm:w-[15rem]",
        className,
      )}
    >
      <Image
        src="/images/paintlab-logo.png"
        alt="PaintLab Torrevieja - Auto Paint & Body Repair"
        fill
        priority={priority}
        sizes="(min-width: 640px) 240px, 216px"
        className="object-contain object-left"
      />
    </Link>
  );
}
