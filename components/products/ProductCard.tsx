import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/product";
import { getCategory } from "@/data/categories";
import { formatPrice } from "@/lib/utils";
import { AppImage } from "@/components/ui/AppImage";
const DEFAULT_SIZES = "(min-width:1024px) 25vw, (min-width:640px) 50vw, 50vw";
// Compact on phones (square image, p-3, 2-line name, no description / "View" row); unchanged from sm up.
export function ProductCard({ product: p, priority, sizes = DEFAULT_SIZES }: { product: Product; priority?: boolean; sizes?: string }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[.985] active:shadow-sm">
      <div className="relative aspect-square overflow-hidden bg-cream sm:aspect-[4/5]">
        <AppImage src={p.image} alt={`${p.name} — ${p.description}`} fill priority={priority} sizes={sizes} className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <p className="truncate text-[11px] font-semibold uppercase tracking-wider text-muted sm:text-xs">{getCategory(p.category)?.name}</p>
        <h3 className="mt-1 line-clamp-2 text-[15px] font-semibold leading-snug sm:text-lg"><Link href={`/products/${p.slug}`} className="after:absolute after:inset-0">{p.name}</Link></h3>
        <p className="mt-2 hidden line-clamp-2 text-sm text-muted sm:block">{p.description}</p>
        <div className="mt-auto flex items-end justify-between pt-3 sm:pt-5">
          <p><span className="text-lg font-bold text-orange-dark sm:text-xl">{formatPrice(p.price)}</span> <span className="block text-[13px] text-muted sm:inline sm:text-xs">{p.unit}</span></p>
          <span className="hidden items-center gap-1 text-sm font-semibold group-hover:text-orange-dark sm:inline-flex">View <ArrowUpRight size={16} /></span>
        </div>
      </div>
    </article>
  );
}
