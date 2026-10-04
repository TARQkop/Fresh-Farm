import { products } from "@/data/products";
import { getCategory } from "@/data/categories";
import type { Product } from "@/types/product";
// Data-access layer: make these async and point them at a DB/API later.
export const getProducts = () => products;
export const getFeatured = () => products.filter((p) => p.featured);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export function getRelated(p: Product, limit = 4): Product[] {
  const explicit = (p.relatedSlugs ?? []).map(getProduct).filter(Boolean) as Product[];
  const cats = getCategory(p.category)?.related ?? [];
  const byRel = cats.map((c) => products.find((x) => x.category === c && x.id !== p.id)).filter(Boolean) as Product[];
  return [...explicit, ...byRel].filter((x, i, a) => a.findIndex((y) => y.id === x.id) === i).slice(0, limit);
}
