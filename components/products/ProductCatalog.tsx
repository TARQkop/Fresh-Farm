"use client";
import { useMemo, useState } from "react";
import { Search, X, PackageSearch } from "lucide-react";
import type { Product } from "@/types/product";
import type { Category } from "@/types/category";
import { cn } from "@/lib/utils";
import { ProductGrid } from "./ProductGrid";
export function ProductCatalog({ products, categories, initialCategory = "all" }: { products: Product[]; categories: Category[]; initialCategory?: string }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState(initialCategory);
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products.filter((p) => (cat === "all" || p.category === cat) && (!term || p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)));
  }, [products, q, cat]);
  const chip = (on: boolean) => cn("min-h-11 shrink-0 snap-start rounded-lg border px-4 text-sm font-semibold transition-colors active:bg-cream", on ? "border-ink bg-ink text-white active:bg-ink" : "border-line bg-white hover:border-ink");
  return (
    <div>
      <div className="contents lg:sticky lg:top-20 lg:z-30 lg:block lg:space-y-3 lg:bg-warm/95 lg:py-4">
        <div className="sticky top-[calc(4rem+env(safe-area-inset-top))] z-30 -mx-5 bg-warm/95 px-5 py-2.5 backdrop-blur sm:mx-0 sm:px-0 lg:static lg:p-0 lg:backdrop-blur-none">
          <div className="relative">
          <label htmlFor="search" className="sr-only">Search products</label>
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input id="search" type="search" inputMode="search" enterKeyHint="search" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search milk, cheese, eggs…" className="h-12 w-full rounded-lg border border-line bg-white pl-11 pr-12 text-base outline-none transition focus:border-ink focus:ring-2 focus:ring-orange/40 [&::-webkit-search-cancel-button]:appearance-none" />
          {q && <button type="button" aria-label="Clear search" onClick={() => setQ("")} className="absolute right-0.5 top-1/2 grid size-11 -translate-y-1/2 place-items-center text-muted hover:text-ink active:text-ink"><X size={18} /></button>}
          </div>
        </div>
        <div role="group" aria-label="Filter by category" className="no-scrollbar -mx-5 flex snap-x snap-proximity scroll-px-5 gap-2 overflow-x-auto overscroll-x-contain px-5 pb-1 pt-1 max-sm:[mask-image:linear-gradient(to_right,transparent,#000_1.25rem,#000_calc(100%-1.25rem),transparent)] sm:mx-0 sm:px-0 sm:pt-0">
          <button aria-pressed={cat === "all"} onClick={() => setCat("all")} className={chip(cat === "all")}>All</button>
          {categories.map((c) => <button key={c.id} aria-pressed={cat === c.id} onClick={() => setCat(c.id)} className={chip(cat === c.id)}>{c.name}</button>)}
        </div>
      </div>
      <p className="mb-4 mt-2 text-sm text-muted sm:mb-5" role="status" aria-live="polite">{results.length} {results.length === 1 ? "product" : "products"}</p>
      {results.length ? <ProductGrid products={results} priorityFirst /> : (
        <div className="grid place-items-center rounded-[var(--radius-card)] border border-dashed border-line bg-white px-6 py-12 text-center sm:py-20">
          <PackageSearch size={40} className="text-orange" />
          <h2 className="h-display mt-4 text-2xl">No products found</h2>
          <p className="mt-2 max-w-sm text-muted">We couldn’t find a match{q && <> for “{q}”</>}. Try another word or browse all categories.</p>
          <button onClick={() => { setQ(""); setCat("all"); }} className="mt-6 min-h-11 rounded-lg bg-ink px-5 text-sm font-semibold text-white hover:bg-charcoal">Reset filters</button>
        </div>
      )}
    </div>
  );
}
