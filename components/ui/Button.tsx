import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
const variants = {
  primary: "bg-orange text-ink hover:bg-orange-dark hover:text-white",
  dark: "bg-ink text-white hover:bg-charcoal",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
  light: "border border-white/30 text-white hover:bg-white hover:text-ink",
};
type Props = { variant?: keyof typeof variants; href?: string } & ComponentProps<"button">;
export function Button({ variant = "primary", href, className, children, ...rest }: Props) {
  const cls = cn("inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 text-[15px] font-semibold transition-colors duration-200 active:scale-[.98] disabled:opacity-50", variants[variant], className);
  if (href) {
    if (/^https?:/.test(href)) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>;
    if (/^(tel:|mailto:)/.test(href)) return <a href={href} className={cls}>{children}</a>;
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <button className={cls} {...rest}>{children}</button>;
}
