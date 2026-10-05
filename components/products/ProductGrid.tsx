import type { Product } from "@/types/product";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { stagger } from "@/lib/motion";
// variant="carousel": horizontal snap-scroller on phones (next card peeks as a scroll hint); grid from sm up.
// variant="grid": 2-column grid on phones. Only `priorityFirst` (the first visible image on a page) is eager.
export function ProductGrid({ products, variant = "grid", label, priorityFirst }: { products: Product[]; variant?: "grid" | "carousel"; label?: string; priorityFirst?: boolean }) {
  if (variant === "carousel") {
    return (
      <div role="region" aria-label={label ?? "Products"} tabIndex={0} className="no-scrollbar -mx-5 snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-px-5 px-5 pb-4 pt-1 sm:mx-0 sm:snap-none sm:overflow-visible sm:p-0">
        <ul role="list" className="flex gap-3 sm:grid sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {products.map((p, i) => <li key={p.id} className="w-[64%] max-w-64 min-w-[9.5rem] shrink-0 snap-start sm:w-auto sm:max-w-none sm:min-w-0 sm:shrink"><Reveal delay={stagger(i)} className="h-full"><ProductCard product={p} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 64vw" /></Reveal></li>)}
        </ul>
      </div>
    );
  }
  return <ul role="list" className={cn("grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6")}>{products.map((p, i) => <li key={p.id}><Reveal eager={!!priorityFirst && i < 4} delay={stagger(i)} className="h-full"><ProductCard product={p} priority={!!priorityFirst && i === 0} /></Reveal></li>)}</ul>;
}
