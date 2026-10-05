import type { Metadata } from "next";
import { Leaf, ShieldCheck, HeartHandshake, BadgeCheck, Sparkles } from "lucide-react";
import { AppImage } from "@/components/ui/AppImage";
import { images } from "@/data/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { stagger } from "@/lib/motion";
import { ContactCTA } from "@/components/sections/home-sections";
export const metadata: Metadata = { title: "About", description: "Our story, our focus on freshness and quality, and the values behind our local dairy and farm-food business.", alternates: { canonical: "/about" } };
// Placeholder copy — replace with the owner's real story. No dates, certifications or awards are claimed.
const blocks = [
  ["Our story", "We started with a simple idea: good food should be fresh, honest and easy to get. Today we bring local dairy and farm products to our neighbours, one order at a time."],
  ["Quality", "We choose what we sell carefully and handle it with care, because quality is the reason people come back."],
  ["Freshness", "Our products are prepared and packed with freshness in mind, so what reaches your table tastes the way it should."],
  ["Local", "We’re part of the community we serve. Staying local keeps our food close to its source and our service personal."],
];
const values = [[BadgeCheck, "Quality"], [Leaf, "Freshness"], [HeartHandshake, "Trust"], [ShieldCheck, "Cleanliness"], [Sparkles, "Customer satisfaction"]] as const;
export default function AboutPage() {
  return (
    <>
      <section className="bg-ink py-10 text-white sm:py-20"><div className="container-x"><SectionHeading light eyebrow="About us" title="Honest food, made close to home." /></div></section>
      <section className="py-10 sm:py-24"><div className="container-x grid gap-7 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] max-h-[42dvh] overflow-hidden rounded-2xl sm:aspect-[4/5] sm:max-h-none lg:sticky lg:top-28 lg:self-start"><AppImage src={images.about} alt="Our shop and team" fill priority sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" /></div>
        <div className="space-y-8 sm:space-y-10">{blocks.map(([t, d], i) => <Reveal key={t} delay={stagger(i)}><h2 className="h-display text-[1.625rem] sm:text-3xl">{t}</h2><p className="mt-2 text-base sm:mt-3 sm:text-lg leading-relaxed text-muted">{d}</p></Reveal>)}</div>
      </div></section>
      <section className="bg-cream py-12 sm:py-20"><div className="container-x">
        <SectionHeading eyebrow="Values" title="What we stand for" />
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-5">{values.map(([Icon, t]) => <li key={t} className="rounded-[var(--radius-card)] border border-line bg-white p-4 sm:p-5"><Icon className="text-orange" size={24} /><p className="mt-4 font-semibold">{t}</p></li>)}</ul>
      </div></section>
      <ContactCTA />
    </>
  );
}
