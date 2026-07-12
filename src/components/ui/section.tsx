import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: "default" | "muted" | "dark";
};

export function Section({ className, tone = "default", ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-[var(--section-space)]",
        tone === "muted" && "bg-panel/70",
        tone === "dark" && "bg-black text-white",
        className,
      )}
      {...props}
    />
  );
}
