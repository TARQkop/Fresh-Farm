import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
// Colours and the slide-in fill live in globals.css (.btn / .btn-<variant>) so they share the motion tokens.
const variants = { primary: "btn-primary", dark: "btn-dark", outline: "btn-outline", light: "btn-light" };
type Props = { variant?: keyof typeof variants; href?: string } & ComponentProps<"button">;
export function Button({ variant = "primary", href, className, children, ...rest }: Props) {
  const cls = cn("btn inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 text-[15px] font-semibold disabled:opacity-50", variants[variant], className);
  if (href) {
    if (/^https?:/.test(href)) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>;
    if (/^(tel:|mailto:)/.test(href)) return <a href={href} className={cls}>{children}</a>;
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return <button className={cls} {...rest}>{children}</button>;
}
