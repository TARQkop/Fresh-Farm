import type { Metadata } from "next";
import { getProducts } from "@/lib/products";
import { categories } from "@/data/categories";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse fresh milk, cheese, yogurt, butter, eggs, chicken and farm products.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-ink py-12 text-white sm:py-16">
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="Catalog"
            title="Our products"
            text="Browse, search and filter — then contact us to order."
          />
        </div>
      </section>

      <div className="container-x py-8 sm:py-12">
        <ProductCatalog
          products={getProducts()}
          categories={categories}
          initialCategory="all"
        />
      </div>
    </>
  );
}