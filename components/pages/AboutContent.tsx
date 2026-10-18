"use client";
import { Leaf, ShieldCheck, HeartHandshake, BadgeCheck, Sparkles } from "lucide-react";
import { AppImage } from "@/components/ui/AppImage";
import { images } from "@/data/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { stagger } from "@/lib/motion";
import { ContactCTA } from "@/components/sections/home-sections";
import { useI18n } from "@/lib/i18n/provider";

// Placeholder copy — replace with the owner's real story (text lives in lib/i18n/dict.ts). No dates, certifications or awards are claimed.
const valueIcons = [BadgeCheck, Leaf, HeartHandshake, ShieldCheck, Sparkles] as const;
export function AboutContent() {
  const { t } = useI18n();
  return (
    <>
      <section className="bg-ink py-10 text-white sm:py-20"><div className="container-x"><SectionHeading light eyebrow={t("about.eyebrow")} title={t("about.title")} /></div></section>
      <section className="py-10 sm:py-24"><div className="container-x grid gap-7 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start"><div className="relative aspect-[4/3] max-h-[42dvh] overflow-hidden rounded-2xl sm:aspect-[4/5] sm:max-h-none"><AppImage src={images.about} alt={t("about.alt")} fill priority sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></div></div>
        <div className="space-y-8 sm:space-y-10">{[1, 2, 3, 4].map((n, i) => <Reveal key={n} delay={stagger(i)}><h2 className="h-display text-[1.625rem] sm:text-3xl">{t(`about.b${n}.t`)}</h2><p className="mt-2 text-base sm:mt-3 sm:text-lg leading-relaxed text-muted">{t(`about.b${n}.d`)}</p></Reveal>)}</div>
      </div></section>
      <section className="bg-cream py-12 sm:py-20"><div className="container-x">
        <SectionHeading eyebrow={t("about.valuesEyebrow")} title={t("about.valuesTitle")} />
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-5">{valueIcons.map((Icon, i) => <li key={i} className="rounded-[var(--radius-card)] border border-line bg-white p-4 sm:p-5"><Icon className="text-orange" size={24} /><p className="mt-4 font-semibold">{t(`about.v${i + 1}`)}</p></li>)}</ul>
      </div></section>
      <ContactCTA />
    </>
  );
}
