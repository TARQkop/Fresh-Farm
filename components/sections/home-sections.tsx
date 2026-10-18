"use client";
import { Leaf, ShieldCheck, MapPin, Sparkles, HeartHandshake, BadgeCheck, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
import { images } from "@/data/images";
import { getFeatured } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { stagger } from "@/lib/motion";
import { AppImage } from "@/components/ui/AppImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { useI18n } from "@/lib/i18n/provider";

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="container-x grid items-center gap-8 pb-10 pt-7 short:py-6 sm:gap-10 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <Reveal eager>
          <p className="mb-4 inline-flex sm:mb-5 items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.16em] text-orange"><Leaf size={14} /> {t("hero.badge")}</p>
          <h1 className="h-display text-[2.1rem] sm:text-6xl lg:text-7xl">{t("hero.title1")} <span className="text-orange">{t("hero.title2")}</span></h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">{t("hero.text")}</p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Button href="/#products" className="w-full sm:w-auto">{t("hero.cta")} <ArrowRight size={18} className="rtl:-scale-x-100" /></Button>
            <Button href="/contact" variant="light" className="w-full sm:w-auto">{t("ui.contactUs")}</Button>
          </div>
        </Reveal>
        <Reveal eager delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[16/9] max-h-[32dvh] overflow-hidden rounded-2xl sm:aspect-[5/6] sm:max-h-none">
            <AppImage src={images.hero} alt={t("hero.alt")} fill priority sizes="(min-width:1024px) 45vw, 90vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-4 start-4 rounded-xl bg-orange px-4 py-2 sm:px-5 sm:py-3 text-ink shadow-xl sm:-start-6"><p className="h-display text-xl">{t("hero.made")}</p><p className="text-xs font-medium">{t("hero.packed")}</p></div>
        </Reveal>
      </div>
    </section>
  );
}

// Thin dark belt directly under the Hero (belt a): slow, 55s per pass, orange separators.
export function HighlightStrip() {
  const { t } = useI18n();
  return (
    <section aria-label="Highlights" className="border-t border-white/10 bg-ink text-white">
      <Marquee label={t("strip.label")} speed={55} repeat={3} className="py-3 [--marquee-gap:1.5rem] sm:py-4 sm:[--marquee-gap:2.5rem]" itemClassName="flex shrink-0 items-center gap-[var(--marquee-gap)]"
        items={[1, 2, 3, 4, 5].map((n) => (<><span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[.16em] text-white/70 sm:text-[13px] sm:tracking-[.18em]">{t(`strip.${n}`)}</span><span aria-hidden className="size-1 shrink-0 rounded-full bg-orange" /></>))} />
    </section>
  );
}

export function FeaturedProducts() {
  const { t } = useI18n();
  const featured = getFeatured().slice(0, 6);
  return (
    <section id="products" className="scroll-mt-24 py-12 sm:py-24">
      <div className="container-x">
        <div className="mb-6 sm:mb-10">
          <SectionHeading eyebrow={t("feat.eyebrow")} title={t("feat.title")} />
        </div>
      </div>
      {/* Product belt: slow, 90s per pass, full-bleed; pauses on hover / while touched so a card can be opened. */}
      <Marquee label={t("feat.label")} speed={90} repeat={3} className="pb-8 pt-2 [--marquee-gap:.75rem] sm:[--marquee-gap:1.25rem]" itemClassName="w-[10.5rem] shrink-0 sm:w-64"
        items={featured.map((p) => (dup: boolean) => <ProductCard product={p} dup={dup} sizes="(min-width:640px) 256px, 168px" />)} />
    </section>
  );
}

export function CategoriesSection() {
  const { t, dir, catName, catDesc } = useI18n();
  return (
    <section className="bg-cream py-12 sm:py-24"><div className="container-x">
      <SectionHeading eyebrow={t("cats.eyebrow")} title={t("cats.title")} text={t("cats.text")} />
      <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-5 md:grid-cols-4">
        {categories.map((c, i) => (
          <li key={c.id}><Reveal delay={stagger(i)} className="h-full">
            <div className="zoom relative block aspect-square rounded-xl sm:aspect-[4/5] sm:rounded-[var(--radius-card)]">
              <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
                <AppImage src={c.image} alt="" fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4"><h3 className="h-display text-lg leading-tight sm:text-xl">{catName(c)}</h3><p className="mt-1 hidden text-xs text-white/75 sm:block">{catDesc(c)}</p></div>
              </div>
            </div>
          </Reveal></li>
        ))}
      </ul>
    </div>
    {/* Belt b: category belt, opposite direction, 70s per pass, full-bleed on the cream background. */}
    <div className="mt-10 sm:mt-16">
      <Marquee label={t("cats.label")} speed={70} reverse repeat={2} className="py-2 [--marquee-gap:.75rem] sm:[--marquee-gap:1rem]" itemClassName="shrink-0"
        items={categories.map((c) => () => (
          <span dir={dir} className="zoom inline-flex min-h-12 items-center gap-2.5 whitespace-nowrap rounded-full border border-ink/10 bg-warm p-1.5 pe-4 sm:gap-3 sm:p-2 sm:pe-6">
            <span className="relative size-9 shrink-0 overflow-hidden rounded-full sm:size-11"><AppImage src={c.image} alt="" fill sizes="44px" className="object-cover" /></span>
            <span className="h-display text-base sm:text-xl">{catName(c)}</span>
          </span>
        ))} />
    </div></section>
  );
}

const reasonIcons = [Leaf, BadgeCheck, MapPin, ShieldCheck, HeartHandshake, Sparkles] as const;
export function WhyChooseUs() {
  const { t } = useI18n();
  return (
    <section className="py-12 sm:py-24"><div className="container-x">
      <SectionHeading eyebrow={t("why.eyebrow")} title={t("why.title")} />
      <ul className="mt-6 grid gap-x-8 gap-y-3 sm:mt-10 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3">
        {reasonIcons.map((Icon, i) => (
          <li key={i}><Reveal delay={stagger(i)} className="flex gap-3 border-t border-line pt-4 sm:gap-4 sm:pt-6">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-ink text-orange"><Icon size={20} /></span>
            <div><h3 className="font-semibold">{t(`why.${i + 1}.t`)}</h3><p className="mt-1 text-sm text-muted">{t(`why.${i + 1}.d`)}</p></div>
          </Reveal></li>
        ))}
      </ul>
    </div></section>
  );
}

export function StorySection() {
  const { t } = useI18n();
  return (
    <section className="bg-ink py-12 text-white sm:py-24"><div className="container-x grid items-center gap-7 sm:gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      <Reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl"><AppImage src={images.story} alt={t("story.alt")} fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" /></Reveal>
      <Reveal delay={0.1}>
        <SectionHeading light eyebrow={t("story.eyebrow")} title={t("story.title")} />
        <p className="mt-5 leading-relaxed text-white/70">{t("story.text")} <span className="text-white/40">{t("story.note")}</span></p>
        <Button href="/about" variant="light" className="mt-6 w-full sm:mt-7 sm:w-auto">{t("story.cta")}</Button>
      </Reveal>
    </div></section>
  );
}

export function AboutPreview() {
  const { t } = useI18n();
  return (
    <section className="py-12 sm:py-24"><div className="container-x grid items-center gap-7 sm:gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal><SectionHeading eyebrow={t("aboutPrev.eyebrow")} title={t("aboutPrev.title")} text={t("aboutPrev.text")} /><Button href="/about" variant="dark" className="mt-6 w-full sm:mt-7 sm:w-auto">{t("aboutPrev.cta", { name: t("brand.name") })}</Button></Reveal>
      <Reveal delay={0.1} className="relative aspect-[5/4] overflow-hidden rounded-2xl"><AppImage src={images.about} alt={t("aboutPrev.alt")} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></Reveal>
    </div></section>
  );
}

export function ContactCTA() {
  const { t } = useI18n();
  return (
    <section className="bg-orange py-12 text-ink sm:py-20"><div className="container-x text-center">
      <h2 className="h-display mx-auto max-w-2xl text-[2rem] sm:text-5xl">{t("cta.title")}</h2>
      <p className="mx-auto mt-4 max-w-lg text-ink/75">{t("cta.text")}</p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row">
        <Button href={whatsappLink()} variant="dark" className="w-full sm:w-auto"><MessageCircle size={18} /> {t("ui.whatsapp")}</Button>
        <Button href={`tel:${site.phone}`} variant="outline" className="w-full sm:w-auto"><Phone size={18} /> {t("ui.callNow")}</Button>
        <Button href="/contact" variant="outline" className="w-full sm:w-auto">{t("cta.contactPage")}</Button>
      </div>
    </div></section>
  );
}
