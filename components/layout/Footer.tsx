import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";
import { categories } from "@/data/categories";
export function Footer() {
  const h = "mb-2 text-xs font-semibold uppercase tracking-[.18em] text-orange lg:mb-4";
  const l = "t-hover inline-flex min-h-11 items-center text-white/70 hover:text-orange active:text-orange motion-safe:hover:translate-x-0.5 lg:min-h-0";
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-8 py-10 sm:gap-10 sm:py-14 lg:grid-cols-4 lg:py-20">
        <div className="col-span-2 sm:col-span-1">
          <p className="h-display text-3xl">{site.name}<span className="text-orange">.</span></p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{site.description}</p>
          <div className="mt-4 flex gap-2 lg:mt-5">
            <a aria-label="Instagram" href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="t-hover grid size-11 place-items-center rounded-lg border border-white/15 hover:border-orange hover:text-orange motion-safe:hover:-translate-y-0.5 active:scale-[.96]"><Instagram size={18} /></a>
            <a aria-label="Facebook" href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="t-hover grid size-11 place-items-center rounded-lg border border-white/15 hover:border-orange hover:text-orange motion-safe:hover:-translate-y-0.5 active:scale-[.96]"><Facebook size={18} /></a>
          </div>
        </div>
        <nav aria-label="Footer"><h3 className={h}>Explore</h3><ul className="space-y-1 text-sm lg:space-y-3">{nav.map((n) => <li key={n.href}><Link className={l} href={n.href}>{n.label}</Link></li>)}</ul></nav>
        <div><h3 className={h}>Products</h3><ul className="space-y-1 text-sm lg:space-y-3">{categories.map((c) => <li key={c.id}><Link className={l} href={`/products?category=${c.id}`}>{c.name}</Link></li>)}</ul></div>
        <div className="col-span-2 sm:col-span-1"><h3 className={h}>Visit &amp; contact</h3>
          <ul className="space-y-1 text-sm text-white/70 lg:space-y-3">
            <li className="flex gap-3 py-1.5 lg:py-0"><MapPin size={16} className="mt-0.5 shrink-0 text-orange" />{site.address}</li>
            <li className="flex items-center gap-3 lg:items-start"><Phone size={16} className="shrink-0 text-orange lg:mt-0.5" /><a className={l} href={`tel:${site.phone}`}>{site.phone}</a></li>
            <li className="flex items-center gap-3 lg:items-start"><Mail size={16} className="shrink-0 text-orange lg:mt-0.5" /><a className={l} href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pb-[env(safe-area-inset-bottom)]"><p className="container-x py-5 text-xs lg:py-6 text-white/50">© {new Date().getFullYear()} {site.name}. All rights reserved.</p></div>
    </footer>
  );
}
