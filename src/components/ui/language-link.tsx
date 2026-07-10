import Link from "next/link";
import type { ComponentProps } from "react";

type LanguageLinkProps = ComponentProps<typeof Link>;

export function LanguageLink(props: LanguageLinkProps) {
  return <Link {...props} />;
}
