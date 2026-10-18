"use client";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/lib/i18n/provider";

export function ContactContent() {
  const { t } = useI18n();
  const row = "flex gap-4 border-b border-line py-4 sm:py-5";
  return (
    <>
      <section className="bg-ink py-10 text-white sm:py-20"><div className="container-x"><SectionHeading light eyebrow={t("contact.eyebrow")} title={t("contact.title")} text={t("contact.text")} /></div></section>
      <div className="container-x grid gap-8 py-8 sm:gap-10 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <div className="flex flex-col gap-3 sm:flex-row"><Button href={whatsappLink()} className="w-full sm:w-auto"><MessageCircle size={18} /> {t("ui.whatsapp")}</Button><Button href={`tel:${site.phone}`} variant="dark" className="w-full sm:w-auto"><Phone size={18} /> <span dir="ltr">{site.phone}</span></Button></div>
          <div className="mt-6">
            <div className={row}><MapPin className="mt-1 shrink-0 text-orange" size={20} /><div><h2 className="font-semibold">{t("contact.location")}</h2><p className="text-muted">{site.address}</p></div></div>
            <div className={row}><Clock className="mt-1 shrink-0 text-orange" size={20} /><div><h2 className="font-semibold">{t("contact.hours")}</h2><dl className="text-muted">{site.hours.map(([d, h]) => <div key={d} className="flex flex-wrap items-baseline justify-between gap-x-4 sm:justify-start"><dt className="sm:w-44">{t(d)}</dt><dd dir="ltr">{h}</dd></div>)}</dl></div></div>
            <div className={row}><SocialLinks tone="light" /></div>
          </div>
          <div className="mt-6 overflow-hidden rounded-[var(--radius-card)] border border-line">
            {site.mapEmbed ? <iframe title="Map" src={site.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="aspect-[4/3] w-full sm:aspect-video" /> : <div className="grid aspect-[4/3] place-items-center bg-cream sm:aspect-video text-center text-sm text-muted"><p><MapPin className="mx-auto mb-2 text-orange" />Google Maps embed goes here.<br />Set <code>mapEmbed</code> in lib/site.ts</p></div>}
          </div>
        </div>
        <div><h2 className="h-display mb-4 text-[1.75rem] sm:mb-5 sm:text-3xl">{t("contact.send")}</h2><ContactForm /></div>
      </div>
    </>
  );
}
