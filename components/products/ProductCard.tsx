import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/product";
import { getCategory } from "@/data/categories";
import { formatPrice } from "@/lib/utils";
import { AppImage } from "@/components/ui/AppImage";
export function ProductCard({ product: p, priority }: { product: Product; priority?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <AppImage src={p.image} alt={`${p.name} — ${p.description}`} fill priority={priority} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">{getCategory(p.category)?.name}</p>
        <h3 className="mt-1 text-lg font-semibold leading-snug"><Link href={`/products/${p.slug}`} className="after:absolute after:inset-0">{p.name}</Link></h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{p.description}</p>
        <div className="mt-auto flex items-end justify-between pt-5">
          <p><span className="text-xl font-bold text-orange-dark">{formatPrice(p.price)}</span> <span className="text-xs text-muted">{p.unit}</span></p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold group-hover:text-orange-dark">View <ArrowUpRight size={16} /></span>
        </div>
      </div>
    </article>
  );
}
