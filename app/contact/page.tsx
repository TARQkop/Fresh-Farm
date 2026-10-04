import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
export const metadata: Metadata = { title: "Contact", description: "Call, WhatsApp or message us to order fresh dairy and farm products. Find our location and opening hours.", alternates: { canonical: "/contact" } };
export default function ContactPage() {
  const row = "flex gap-4 border-b border-line py-5";
  return (
    <>
      <section className="bg-ink py-14 text-white sm:py-20"><div className="container-x"><SectionHeading light eyebrow="Contact" title="Let’s talk fresh." text="Call, message or visit — we’re happy to help you order." /></div></section>
      <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <div className="flex flex-col gap-3 sm:flex-row"><Button href={whatsappLink()}><MessageCircle size={18} /> WhatsApp</Button><Button href={`tel:${site.phone}`} variant="dark"><Phone size={18} /> {site.phone}</Button></div>
          <div className="mt-6">
            <div className={row}><MapPin className="mt-1 shrink-0 text-orange" size={20} /><div><h2 className="font-semibold">Location</h2><p className="text-muted">{site.address}</p></div></div>
            <div className={row}><Clock className="mt-1 shrink-0 text-orange" size={20} /><div><h2 className="font-semibold">Opening hours</h2><dl className="text-muted">{site.hours.map(([d, h]) => <div key={d} className="flex gap-4"><dt className="w-44">{d}</dt><dd>{h}</dd></div>)}</dl></div></div>
            <div className={row}><div className="flex gap-3"><a aria-label="Instagram" href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-lg border border-line hover:border-orange hover:text-orange-dark"><Instagram size={18} /></a><a aria-label="Facebook" href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-lg border border-line hover:border-orange hover:text-orange-dark"><Facebook size={18} /></a></div></div>
          </div>
          <div className="mt-6 overflow-hidden rounded-[var(--radius-card)] border border-line">
            {site.mapEmbed ? <iframe title="Map" src={site.mapEmbed} loading="lazy" className="aspect-video w-full" /> : <div className="grid aspect-video place-items-center bg-cream text-center text-sm text-muted"><p><MapPin className="mx-auto mb-2 text-orange" />Google Maps embed goes here.<br />Set <code>mapEmbed</code> in lib/site.ts</p></div>}
          </div>
        </div>
        <div><h2 className="h-display mb-5 text-3xl">Send us a message</h2><ContactForm /></div>
      </div>
    </>
  );
}
