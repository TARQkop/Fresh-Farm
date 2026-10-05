import Link from "next/link";
import { Leaf, ShieldCheck, MapPin, Sparkles, HeartHandshake, BadgeCheck, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { images } from "@/data/images";
import { getFeatured } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AppImage } from "@/components/ui/AppImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductGrid } from "@/components/products/ProductGrid";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="container-x grid items-center gap-8 pb-10 pt-7 short:py-6 sm:gap-10 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <Reveal eager>
          <p className="mb-4 inline-flex sm:mb-5 items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.16em] text-orange"><Leaf size={14} /> Local · Fresh · Daily</p>
          <h1 className="h-display text-[2.1rem] sm:text-6xl lg:text-7xl">Fresh from the farm, <span className="text-orange">to your table.</span></h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">Milk, cheese, yogurt, butter, eggs and farm products — carefully selected and handled with care, straight from our local kitchen to yours.</p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button href="/products" className="w-full sm:w-auto">Explore Products <ArrowRight size={18} /></Button>
            <Button href="/contact" variant="light" className="w-full sm:w-auto">Contact Us</Button>
          </div>
        </Reveal>
        <Reveal eager delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[16/9] max-h-[32dvh] overflow-hidden rounded-2xl sm:aspect-[5/6] sm:max-h-none">
            <AppImage src={images.hero} alt="Fresh dairy and farm products" fill priority sizes="(min-width:1024px) 45vw, 90vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-xl bg-orange px-4 py-2 sm:px-5 sm:py-3 text-ink shadow-xl sm:-left-6"><p className="h-display text-xl">Made fresh</p><p className="text-xs font-medium">Packed every day</p></div>
        </Reveal>
      </div>
    </section>
  );
}

export function FeaturedProducts() {
  return (
    <section className="py-12 sm:py-24"><div className="container-x">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-x-4 gap-y-1 sm:mb-10">
        <SectionHeading eyebrow="Our selection" title="Favourites from our shelves" />
        <Link href="/products" className="inline-flex min-h-11 items-center gap-1 font-semibold hover:text-orange-dark">All products <ArrowRight size={16} /></Link>
      </div>
      <ProductGrid variant="carousel" label="Featured products" products={getFeatured().slice(0, 4)} />
    </div></section>
  );
}

export function CategoriesSection() {
  return (
    <section className="bg-cream py-12 sm:py-24"><div className="container-x">
      <SectionHeading eyebrow="Browse" title="Shop by category" text="Everything we make and sell, organised the way you shop." />
      <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-5 md:grid-cols-4">
        {categories.map((c) => (
          <li key={c.id}>
            <Link href={`/products?category=${c.id}`} className="group relative block aspect-square overflow-hidden rounded-xl transition-transform active:scale-[.98] sm:aspect-[4/5] sm:rounded-[var(--radius-card)]">
              <AppImage src={c.image} alt="" fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4"><h3 className="h-display text-lg leading-tight sm:text-xl">{c.name}</h3><p className="mt-1 hidden text-xs text-white/75 sm:block">{c.description}</p></div>
            </Link>
          </li>
        ))}
      </ul>
    </div></section>
  );
}

const reasons = [
  [Leaf, "Fresh products", "Prepared and packed in small batches."], [BadgeCheck, "Quality ingredients", "Carefully selected, simply made."],
  [MapPin, "Local production", "Close to home, close to you."], [ShieldCheck, "High hygiene standards", "Cleanliness in every step."],
  [HeartHandshake, "Trusted service", "Friendly help with every order."], [Sparkles, "Carefully selected", "Only products we’d serve at home."],
] as const;
export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-24"><div className="container-x">
      <SectionHeading eyebrow="Why choose us" title="Good food starts with good habits" />
      <ul className="mt-6 grid gap-x-8 gap-y-3 sm:mt-10 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3">
        {reasons.map(([Icon, t, d], i) => (
          <li key={t}><Reveal delay={i * 0.05} className="flex gap-3 border-t border-line pt-4 sm:gap-4 sm:pt-6">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-ink text-orange"><Icon size={20} /></span>
            <div><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm text-muted">{d}</p></div>
          </Reveal></li>
        ))}
      </ul>
    </div></section>
  );
}

export function StorySection() {
  return (
    <section className="bg-ink py-12 text-white sm:py-24"><div className="container-x grid items-center gap-7 sm:gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl"><AppImage src={images.story} alt="Our farm and dairy" fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" /></Reveal>
      <Reveal delay={0.1}>
        <SectionHeading light eyebrow="Freshness & care" title="Quality you can taste, care you can trust." />
        <p className="mt-5 leading-relaxed text-white/70">Freshness is the first thing we check and the last thing we promise. From local sourcing to careful packing, every product is handled with the attention we’d want for our own family’s table. <span className="text-white/40">(Edit this story with the business’s real details.)</span></p>
        <Button href="/about" variant="light" className="mt-6 w-full sm:mt-7 sm:w-auto">Read our story</Button>
      </Reveal>
    </div></section>
  );
}

export function AboutPreview() {
  return (
    <section className="py-12 sm:py-24"><div className="container-x grid items-center gap-7 sm:gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal><SectionHeading eyebrow="About us" title="A local business, run with care" text="We’re a neighbourhood dairy and farm-food shop. We believe good food should be fresh, honest and easy to order — with a real person on the other end." /><Button href="/about" variant="dark" className="mt-6 w-full sm:mt-7 sm:w-auto">About {site.name}</Button></Reveal>
      <Reveal delay={0.1} className="relative aspect-[5/4] overflow-hidden rounded-2xl"><AppImage src={images.about} alt="Our shop" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></Reveal>
    </div></section>
  );
}

export function ContactCTA() {
  return (
    <section className="bg-orange py-12 text-ink sm:py-20"><div className="container-x text-center">
      <h2 className="h-display mx-auto max-w-2xl text-[2rem] sm:text-5xl">Looking for fresh products?</h2>
      <p className="mx-auto mt-4 max-w-lg text-ink/75">Message or call us to place an order — we’ll confirm availability and delivery or pickup.</p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row">
        <Button href={whatsappLink()} variant="dark" className="w-full sm:w-auto"><MessageCircle size={18} /> WhatsApp</Button>
        <Button href={`tel:${site.phone}`} variant="outline" className="w-full sm:w-auto"><Phone size={18} /> Call now</Button>
        <Button href="/contact" variant="outline" className="w-full sm:w-auto">Contact page</Button>
      </div>
    </div></section>
  );
}
