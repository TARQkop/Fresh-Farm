import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MessageCircle, Phone, Droplets, Package } from "lucide-react";
import { getProducts, getProduct, getRelated } from "@/lib/products";
import { getCategory } from "@/data/categories";
import { formatPrice } from "@/lib/utils";
import { site, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
type Params = { params: Promise<{ slug: string }> };
export const generateStaticParams = () => getProducts().map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = getProduct((await params).slug);
  if (!p) return {};
  return { title: p.name, description: p.description, alternates: { canonical: `/products/${p.slug}` }, openGraph: { title: p.name, description: p.description, images: [p.image] } };
}
export default async function ProductPage({ params }: Params) {
  const p = getProduct((await params).slug);
  if (!p) notFound();
  const cat = getCategory(p.category);
  const related = getRelated(p);
  const ld = { "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.description, image: new URL(p.image, site.url).href, category: cat?.name, offers: { "@type": "Offer", price: p.price, priceCurrency: "USD", availability: "https://schema.org/InStock", url: `${site.url}/products/${p.slug}` } };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="container-x py-8 sm:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-muted">
          <Link href="/products" className="hover:text-ink">Products</Link><ChevronRight size={14} />
          <Link href={`/products?category=${p.category}`} className="hover:text-ink">{cat?.name}</Link><ChevronRight size={14} /><span className="text-ink" aria-current="page">{p.name}</span>
        </nav>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream lg:sticky lg:top-28 lg:self-start">
            <AppImage src={p.image} alt={p.name} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-orange-dark">{cat?.name}</p>
            <h1 className="h-display mt-2 text-4xl sm:text-5xl">{p.name}</h1>
            <p className="mt-4 text-3xl font-bold text-orange-dark">{formatPrice(p.price)} <span className="text-sm font-normal text-muted">{p.unit}</span></p>
            <p className="mt-5 text-lg leading-relaxed text-muted">{p.details ?? p.description}</p>
            {p.sizes && <div className="mt-7"><h2 className="mb-2 text-sm font-semibold">Available sizes</h2><ul className="flex flex-wrap gap-2">{p.sizes.map((s) => <li key={s} className="rounded-lg border border-line bg-white px-4 py-2 text-sm">{s}</li>)}</ul></div>}
            {/* Future: quantity selector, add-to-cart and availability go here. */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappLink(`Hello, I'd like to order: ${p.name}`)}><MessageCircle size={18} /> Order via WhatsApp</Button>
              <Button href={`tel:${site.phone}`} variant="outline"><Phone size={18} /> Call us</Button>
            </div>
            <dl className="mt-10 divide-y divide-line border-y border-line text-sm">
              {p.ingredients && <div className="flex gap-4 py-4"><dt className="flex w-36 shrink-0 items-center gap-2 font-semibold"><Droplets size={16} className="text-orange" />Ingredients</dt><dd className="text-muted">{p.ingredients}</dd></div>}
              {p.storage && <div className="flex gap-4 py-4"><dt className="flex w-36 shrink-0 items-center gap-2 font-semibold"><Package size={16} className="text-orange" />Storage</dt><dd className="text-muted">{p.storage}</dd></div>}
            </dl>
          </div>
        </div>
      </div>
      {related.length > 0 && <section className="bg-cream py-14 sm:py-20"><div className="container-x"><SectionHeading title="You may also like" className="mb-8" /><ProductGrid products={related} /></div></section>}
    </>
  );
}
