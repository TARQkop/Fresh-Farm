import type { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";
export function ProductGrid({ products }: { products: Product[] }) {
  return <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">{products.map((p, i) => <li key={p.id}><ProductCard product={p} priority={i < 4} /></li>)}</ul>;
}
