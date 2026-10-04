import type { CategoryId } from "./category";
export interface Product {
  id: string; slug: string; name: string; category: CategoryId; description: string;
  details?: string; price: number; unit: string; image: string; images?: string[]; sizes?: string[];
  ingredients?: string; storage?: string; featured?: boolean; relatedSlugs?: string[];
}
