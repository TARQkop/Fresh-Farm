"use client";
import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LANGS, type Lang } from "@/lib/i18n/dict";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

// Name shown on the button itself (short, in the language's own script).
const SHORT: Record<Lang, string> = { en: "English", ar: "العربية", ku: "کوردی" };

// Language picker. `dropdown` (default): globe + current language, opens a small menu — used in the desktop header.
// `inline`: three large buttons side by side — used inside the mobile menu. The choice is remembered by the provider.
export function LanguageSwitcher({ variant = "dropdown", className }: { variant?: "dropdown" | "inline"; className?: string }) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  // Close on outside click / Escape (Escape returns focus to the button).
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btn.current?.focus(); } };
    document.addEventListener("pointerdown", away);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("pointerdown", away); document.removeEventListener("keydown", esc); };
  }, [open]);

  if (variant === "inline") {
    return (
      <div role="group" aria-label={t("ui.language")} className={cn("grid grid-cols-3 gap-2", className)}>
        {LANGS.map((l) => (
          <button key={l.code} type="button" lang={l.code} aria-pressed={lang === l.code} onClick={() => setLang(l.code)}
            className={cn("t-hover inline-flex min-h-12 items-center justify-center gap-1.5 rounded-lg border px-2 text-[15px] font-semibold active:scale-[.97]",
              lang === l.code ? "border-orange bg-orange text-ink" : "border-white/15 text-white hover:border-orange active:bg-white/10")}>
            {lang === l.code && <Check size={16} aria-hidden />}{SHORT[l.code]}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={root} className={cn("relative", className)}>
      <button ref={btn} type="button" aria-haspopup="listbox" aria-expanded={open} aria-controls={menuId} aria-label={t("ui.language")} onClick={() => setOpen((o) => !o)}
        className={cn("t-hover inline-flex h-10 min-w-[8.5rem] items-center justify-between gap-2 rounded-full border px-3.5 text-sm font-semibold hover:border-orange hover:text-orange active:scale-[.98]",
          open ? "border-orange text-orange" : "border-white/20 text-white/85")}>
        <span className="inline-flex items-center gap-2"><Globe size={16} aria-hidden /><span lang={lang}>{SHORT[lang]}</span></span>
        <ChevronDown size={14} aria-hidden className={cn("transition-transform duration-300", open && "rotate-180")} />
      </button>
      {open && (
        <ul id={menuId} role="listbox" aria-label={t("ui.language")} className="absolute end-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-xl border border-white/10 bg-charcoal p-1.5 shadow-2xl shadow-black/40">
          {LANGS.map((l) => {
            const on = lang === l.code;
            return (
              <li key={l.code} role="presentation">
                <button type="button" role="option" aria-selected={on} lang={l.code} onClick={() => { setLang(l.code); setOpen(false); btn.current?.focus(); }}
                  className={cn("t-hover flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 text-start text-[15px]", on ? "bg-white/10 font-semibold text-orange" : "text-white/85 hover:bg-white/5 hover:text-white")}>
                  <span>{l.name}</span>
                  {on ? <Check size={16} aria-hidden /> : <span aria-hidden className="text-xs font-semibold uppercase text-white/35">{l.code}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
