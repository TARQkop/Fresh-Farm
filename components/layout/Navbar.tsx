"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      <div className="container-x flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="h-display text-2xl">{site.name}<span className="text-orange">.</span></Link>
        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={active(n.href) ? "page" : undefined} className={cn("relative py-2 text-[15px] transition-colors hover:text-orange", active(n.href) ? "text-orange" : "text-white/80")}>
              {n.label}
              {active(n.href) && <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-orange" />}
            </Link>
          ))}
          <Button href="/contact" className="min-h-10 px-5">Contact Us</Button>
        </nav>
        <div className="flex items-center gap-1 lg:hidden">
          <a href={`tel:${site.phone}`} aria-label="Call us" className="grid size-11 place-items-center rounded-lg text-orange"><Phone size={20} /></a>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)} className="grid size-11 place-items-center rounded-lg hover:bg-white/10">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-nav" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-ink lg:hidden">
            <nav aria-label="Mobile" className="container-x flex flex-col py-6">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className={cn("h-display border-b border-white/10 py-5 text-3xl", active(n.href) ? "text-orange" : "text-white")}>{n.label}</Link>
              ))}
              <Button href="/contact" className="mt-8 w-full">Contact Us</Button>
              <Button href={`tel:${site.phone}`} variant="light" className="mt-3 w-full">Call {site.phone}</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
