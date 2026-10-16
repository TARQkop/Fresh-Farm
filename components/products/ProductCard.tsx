import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/product";
import { getCategory } from "@/data/categories";
import { AppImage } from "@/components/ui/AppImage";
const DEFAULT_SIZES = "(min-width:1024px) 25vw, (min-width:640px) 50vw, 50vw";
// Compact on phones (square image, p-3, 2-line name, no description / "View" row); unchanged from sm up.
export function ProductCard({ product: p, priority, sizes = DEFAULT_SIZES, dup }: { product: Product; priority?: boolean; sizes?: string; dup?: boolean }) {
  return (
    <article className="card-lift zoom flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white shadow-card">
      <div className="relative aspect-square overflow-hidden rounded-t-[calc(var(--radius-card)-1px)] bg-cream sm:aspect-[4/5]">
        <AppImage src={p.image} alt={`${p.name} — ${p.description}`} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <p className="truncate text-[11px] font-semibold uppercase tracking-wider text-muted sm:text-xs">{getCategory(p.category)?.name}</p>
        <h3 className="mt-1 line-clamp-2 text-[15px] font-semibold leading-snug sm:text-lg"><Link href={`/products/${p.slug}`} tabIndex={dup ? -1 : undefined} className="after:absolute after:inset-0">{p.name}</Link></h3>
        <p className="mt-2 hidden line-clamp-2 text-sm text-muted sm:block">{p.description}</p>
        <div className="mt-auto hidden justify-end pt-5 sm:flex">
          <span className="card-view items-center gap-1 text-sm font-semibold">View <ArrowUpRight size={16} className="card-arrow" /></span>
        </div>
      </div>
    </article>
  );
}
