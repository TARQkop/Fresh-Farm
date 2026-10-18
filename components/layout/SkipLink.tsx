"use client";
import { useI18n } from "@/lib/i18n/provider";
export function SkipLink() {
  const { t } = useI18n();
  return <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-orange focus:px-4 focus:py-2 focus:text-ink">{t("ui.skip")}</a>;
}
