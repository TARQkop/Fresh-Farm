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
  const chip = (on: boolean) => cn("min-h-11 shrink-0 rounded-lg border px-4 text-sm font-semibold transition-colors", on ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink");
  return (
    <div>
      <div className="sticky top-16 z-30 -mx-5 space-y-3 bg-warm/95 px-5 py-4 sm:mx-0 sm:px-0 lg:top-20">
        <div className="relative">
          <label htmlFor="search" className="sr-only">Search products</label>
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input id="search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search milk, cheese, eggs…" className="h-12 w-full rounded-lg border border-line bg-white pl-11 pr-11 text-base outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/30" />
          {q && <button aria-label="Clear search" onClick={() => setQ("")} className="absolute right-1 top-1/2 grid size-10 -translate-y-1/2 place-items-center text-muted hover:text-ink"><X size={18} /></button>}
        </div>
        <div role="group" aria-label="Filter by category" className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          <button aria-pressed={cat === "all"} onClick={() => setCat("all")} className={chip(cat === "all")}>All</button>
          {categories.map((c) => <button key={c.id} aria-pressed={cat === c.id} onClick={() => setCat(c.id)} className={chip(cat === c.id)}>{c.name}</button>)}
        </div>
      </div>
      <p className="mb-5 mt-2 text-sm text-muted" role="status" aria-live="polite">{results.length} {results.length === 1 ? "product" : "products"}</p>
      {results.length ? <ProductGrid products={results} /> : (
        <div className="grid place-items-center rounded-[var(--radius-card)] border border-dashed border-line bg-white px-6 py-20 text-center">
          <PackageSearch size={40} className="text-orange" />
          <h2 className="h-display mt-4 text-2xl">No products found</h2>
          <p className="mt-2 max-w-sm text-muted">We couldn’t find a match{q && <> for “{q}”</>}. Try another word or browse all categories.</p>
          <button onClick={() => { setQ(""); setCat("all"); }} className="mt-6 min-h-11 rounded-lg bg-ink px-5 text-sm font-semibold text-white hover:bg-charcoal">Reset filters</button>
        </div>
      )}
    </div>
  );
}
