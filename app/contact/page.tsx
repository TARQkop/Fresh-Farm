import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
export const metadata: Metadata = { title: "Contact", description: "Call, WhatsApp or message us to order fresh dairy and farm products. Find our location and opening hours.", alternates: { canonical: "/contact" } };
export default function ContactPage() {
  const row = "flex gap-4 border-b border-line py-4 sm:py-5";
  return (
    <>
      <section className="bg-ink py-10 text-white sm:py-20"><div className="container-x"><SectionHeading light eyebrow="Contact" title="Let’s talk fresh." text="Call, message or visit — we’re happy to help you order." /></div></section>
      <div className="container-x grid gap-8 py-8 sm:gap-10 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <div className="flex flex-col gap-3 sm:flex-row"><Button href={whatsappLink()} className="w-full sm:w-auto"><MessageCircle size={18} /> WhatsApp</Button><Button href={`tel:${site.phone}`} variant="dark" className="w-full sm:w-auto"><Phone size={18} /> {site.phone}</Button></div>
          <div className="mt-6">
            <div className={row}><MapPin className="mt-1 shrink-0 text-orange" size={20} /><div><h2 className="font-semibold">Location</h2><p className="text-muted">{site.address}</p></div></div>
            <div className={row}><Clock className="mt-1 shrink-0 text-orange" size={20} /><div><h2 className="font-semibold">Opening hours</h2><dl className="text-muted">{site.hours.map(([d, h]) => <div key={d} className="flex flex-wrap items-baseline justify-between gap-x-4 sm:justify-start"><dt className="sm:w-44">{d}</dt><dd>{h}</dd></div>)}</dl></div></div>
            <div className={row}><div className="flex gap-2"><a aria-label="Instagram" href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-lg border border-line hover:border-orange hover:text-orange-dark active:border-orange"><Instagram size={18} /></a><a aria-label="Facebook" href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="grid size-11 place-items-center rounded-lg border border-line hover:border-orange hover:text-orange-dark"><Facebook size={18} /></a></div></div>
          </div>
          <div className="mt-6 overflow-hidden rounded-[var(--radius-card)] border border-line">
            {site.mapEmbed ? <iframe title="Map" src={site.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="aspect-[4/3] w-full sm:aspect-video" /> : <div className="grid aspect-[4/3] place-items-center bg-cream sm:aspect-video text-center text-sm text-muted"><p><MapPin className="mx-auto mb-2 text-orange" />Google Maps embed goes here.<br />Set <code>mapEmbed</code> in lib/site.ts</p></div>}
          </div>
        </div>
        <div><h2 className="h-display mb-4 text-[1.75rem] sm:mb-5 sm:text-3xl">Send us a message</h2><ContactForm /></div>
      </div>
    </>
  );
}
