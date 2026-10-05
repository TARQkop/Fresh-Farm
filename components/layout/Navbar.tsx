"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { DUR_MENU, EASE_LUX, MENU_STAGGER } from "@/lib/motion";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const menuBtn = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const wasOpen = useRef(false);
  const reduce = useReducedMotion();
  const menuT = { duration: reduce ? 0 : DUR_MENU, ease: EASE_LUX };
  // Staggered fade for the menu content (60ms apart); instant under reduced motion.
  const item = (i: number) => ({ initial: { opacity: 0, y: reduce ? 0 : 8 }, animate: { opacity: 1, y: 0 }, transition: { ...menuT, delay: reduce ? 0 : 0.12 + i * MENU_STAGGER } });
  useEffect(() => setOpen(false), [path]);
  // Scroll lock (html.menu-open: overflow hidden + stable scrollbar gutter = no layout shift), inert page behind
  // the menu, Escape to close, close when the viewport grows to desktop.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const behind = [document.getElementById("main"), document.querySelector("footer")];
    root.classList.add("menu-open");
    behind.forEach((el) => el?.setAttribute("inert", ""));
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 64rem)");
    const grow = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", esc);
    mq.addEventListener("change", grow);
    firstLink.current?.focus({ preventScroll: true });
    return () => {
      root.classList.remove("menu-open");
      behind.forEach((el) => el?.removeAttribute("inert"));
      window.removeEventListener("keydown", esc);
      mq.removeEventListener("change", grow);
    };
  }, [open]);
  // Return focus to the menu button when the menu closes.
  useEffect(() => {
    if (wasOpen.current && !open) menuBtn.current?.focus({ preventScroll: true });
    wasOpen.current = open;
  }, [open]);
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className="sticky top-0 z-50 bg-ink pt-[env(safe-area-inset-top)] text-white">
      <div className="container-x relative z-10 flex h-16 items-center justify-between bg-ink lg:h-20">
        <Link href="/" className="h-display inline-flex min-h-11 items-center text-2xl">{site.name}<span className="text-orange">.</span></Link>
        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={active(n.href) ? "page" : undefined} className={cn("nav-link t-hover py-2 text-[15px] hover:text-orange", active(n.href) ? "text-orange" : "text-white/80")}>{n.label}</Link>
          ))}
          <Button href="/contact" className="min-h-10 px-5">Contact Us</Button>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <a href={`tel:${site.phone}`} aria-label="Call us" className="t-hover grid size-11 place-items-center rounded-lg text-orange active:bg-white/10"><Phone size={20} /></a>
          <button ref={menuBtn} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)} className={cn("t-hover grid size-11 place-items-center rounded-lg border active:bg-white/15", open ? "border-orange text-orange" : "border-white/15")}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-nav" initial={{ opacity: 0, y: reduce ? 0 : -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduce ? 0 : -8 }} transition={menuT} className="fixed inset-x-0 top-0 h-dvh overflow-y-auto overscroll-contain bg-ink pt-[calc(4rem+env(safe-area-inset-top))] lg:hidden">
            <nav aria-label="Mobile" className="container-x flex flex-col pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-2">
              {nav.map((n, i) => (
                <motion.div key={n.href} {...item(i)}>
                  <Link ref={i === 0 ? firstLink : undefined} href={n.href} aria-current={active(n.href) ? "page" : undefined} onClick={() => setOpen(false)} className={cn("t-hover h-display flex min-h-16 items-center justify-between border-b border-white/10 py-3 text-3xl active:bg-white/5", active(n.href) ? "text-orange" : "text-white")}>
                    {n.label}<ChevronRight size={22} aria-hidden className="text-white/40" />
                  </Link>
                </motion.div>
              ))}
              <motion.div {...item(nav.length)} className="mt-6 flex flex-col gap-3">
                <Button href="/contact" className="w-full">Contact Us</Button>
                <Button href={`tel:${site.phone}`} variant="light" className="w-full">Call {site.phone}</Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
