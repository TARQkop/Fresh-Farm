"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Category } from "@/types/category";
import type { Product } from "@/types/product";
import { DEFAULT_LANG, LANGS, STORAGE_KEY, dict, type Lang } from "./dict";

type Vars = Record<string, string | number>;
type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  /** Translate a key. Falls back to English, then to the key itself (so English text can be used as a key). */
  t: (key: string, vars?: Vars) => string;
  /** Category / product text from data/*.ts, translated when a translation exists. */
  catName: (c: Category) => string;
  catDesc: (c: Category) => string;
  prodName: (p: Product) => string;
  prodDesc: (p: Product) => string;
};

const I18nContext = createContext<Ctx | null>(null);
const isLang = (v: unknown): v is Lang => LANGS.some((l) => l.code === v);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start in English so the server HTML and the first client render match; the saved choice is applied right after.
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
  const initialTitle = useRef<string | null>(null);
  useEffect(() => {
    try { const saved = localStorage.getItem(STORAGE_KEY); if (isLang(saved)) setLangState(saved); } catch {}
  }, []);
  const dir = LANGS.find((l) => l.code === lang)!.dir;
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    initialTitle.current ??= document.title;
    document.title = initialTitle.current.replaceAll("Bahik", dict[lang]["brand.name"]);
  }, [lang, dir]);
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
  }, []);

  const value = useMemo<Ctx>(() => {
    const raw = (key: string) => dict[lang][key] ?? dict.en[key];
    const t = (key: string, vars?: Vars) => {
      let s = raw(key) ?? key;
      if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
      return s;
    };
    return {
      lang, dir, setLang, t,
      catName: (c) => raw(`cat.${c.id}.name`) ?? c.name,
      catDesc: (c) => raw(`cat.${c.id}.desc`) ?? c.description,
      prodName: (p) => raw(`prod.${p.id}.name`) ?? p.name,
      prodDesc: (p) => raw(`prod.${p.id}.desc`) ?? p.description,
    };
  }, [lang, dir, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <LanguageProvider>");
  return ctx;
}
