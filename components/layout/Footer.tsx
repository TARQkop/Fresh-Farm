import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";
import { categories } from "@/data/categories";
export function Footer() {
  const h = "mb-4 text-xs font-semibold uppercase tracking-[.18em] text-orange";
  const l = "text-white/70 transition-colors hover:text-orange";
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <p className="h-display text-3xl">{site.name}<span className="text-orange">.</span></p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{site.description}</p>
          <div className="mt-5 flex gap-2">
            <a aria-label="Instagram" href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-lg border border-white/15 hover:border-orange hover:text-orange"><Instagram size={18} /></a>
            <a aria-label="Facebook" href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-lg border border-white/15 hover:border-orange hover:text-orange"><Facebook size={18} /></a>
          </div>
        </div>
        <nav aria-label="Footer"><h3 className={h}>Explore</h3><ul className="space-y-3 text-sm">{nav.map((n) => <li key={n.href}><Link className={l} href={n.href}>{n.label}</Link></li>)}</ul></nav>
        <div><h3 className={h}>Products</h3><ul className="space-y-3 text-sm">{categories.map((c) => <li key={c.id}><Link className={l} href={`/products?category=${c.id}`}>{c.name}</Link></li>)}</ul></div>
        <div><h3 className={h}>Visit &amp; contact</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-orange" />{site.address}</li>
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-orange" /><a className={l} href={`tel:${site.phone}`}>{site.phone}</a></li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-orange" /><a className={l} href={`mailto:${site.email}`}>{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10"><p className="container-x py-6 text-xs text-white/50">© {new Date().getFullYear()} {site.name}. All rights reserved.</p></div>
    </footer>
  );
}
