"use client";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/product";
import { getCategory } from "@/data/categories";
import { AppImage } from "@/components/ui/AppImage";
import { whatsappLink } from "@/lib/site";
import { useI18n } from "@/lib/i18n/provider";
const DEFAULT_SIZES = "(min-width:1024px) 25vw, (min-width:640px) 50vw, 50vw";
// Compact on phones (square image, p-3, 2-line name, no description / "View" row); unchanged from sm up.
export function ProductCard({ product: p, priority, sizes = DEFAULT_SIZES, dup }: { product: Product; priority?: boolean; sizes?: string; dup?: boolean }) {
  const { dir, t, catName, prodName, prodDesc } = useI18n();
  const name = prodName(p), desc = prodDesc(p), cat = getCategory(p.category);
  return (
    <article dir={dir} className="card-lift zoom flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white shadow-card">
      <div className="relative aspect-square overflow-hidden rounded-t-[calc(var(--radius-card)-1px)] bg-cream sm:aspect-[4/5]">
        <AppImage src={p.image} alt={`${name} — ${desc}`} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <p className="truncate text-[11px] font-semibold uppercase tracking-wider text-muted sm:text-xs">{cat ? catName(cat) : null}</p>
        <h3 className="mt-1 line-clamp-2 text-[15px] font-semibold leading-snug sm:text-lg"><a href={whatsappLink(`Hello, I'd like to order: ${p.name}`)} target="_blank" rel="noopener noreferrer" tabIndex={dup ? -1 : undefined} className="after:absolute after:inset-0">{name}</a></h3>
        <p className="mt-2 hidden line-clamp-2 text-sm text-muted sm:block">{desc}</p>
        <div className="mt-auto hidden justify-end pt-5 sm:flex">
          <span className="card-view items-center gap-1 text-sm font-semibold">{t("ui.order")} <ArrowUpRight size={16} className="card-arrow rtl:-scale-x-100" /></span>
        </div>
      </div>
    </article>
  );
}
