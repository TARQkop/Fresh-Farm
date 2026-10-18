"use client";
import { useMemo, useState } from "react";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/provider";
// Validation messages come from the dictionary so they follow the selected language.
const makeSchema = (t: (k: string) => string) => z.object({
  name: z.string().trim().min(2, t("err.name")),
  contact: z.string().trim().refine((v) => /^\S+@\S+\.\S+$/.test(v) || v.replace(/\D/g, "").length >= 7, t("err.contact")),
  subject: z.string().trim().min(3, t("err.subject")),
  message: z.string().trim().min(10, t("err.message")),
});
type Values = z.infer<ReturnType<typeof makeSchema>>;
type Errors = Partial<Record<keyof Values, string>>;
const ORDER: (keyof Values)[] = ["name", "contact", "subject", "message"];
type Fieldish = React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
// Swap this stub for a Server Action / API route (email, CRM, database) when a backend exists.
async function submitInquiry(_v: Values): Promise<{ ok: boolean }> { return { ok: true }; }

export function ContactForm() {
  const { t } = useI18n();
  const schema = useMemo(() => makeSchema(t), [t]);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<Values | null>(null);
  const [busy, setBusy] = useState(false);
  // Phone vs email: each gets the right on-screen keyboard (tel / email) and autofill.
  const [mode, setMode] = useState<"phone" | "email">("phone");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!parsed.success) {
      const f = parsed.error.flatten().fieldErrors;
      setErrors({ name: f.name?.[0], contact: f.contact?.[0], subject: f.subject?.[0], message: f.message?.[0] });
      // Bring the first invalid field into view and focus it (centered, clear of the sticky header / keyboard).
      const first = ORDER.find((k) => f[k]?.[0]);
      const el = first ? document.getElementById(first) : null;
      if (el) {
        el.focus({ preventScroll: true });
        el.scrollIntoView({ block: "center", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      }
      return;
    }
    setErrors({}); setBusy(true);
    await submitInquiry(parsed.data);
    setBusy(false); setSent(parsed.data);
  }
  if (sent) return (
    <div role="status" className="rounded-[var(--radius-card)] border border-line bg-white p-5 sm:p-8">
      <h3 className="h-display text-2xl">{t("form.thanks", { name: sent.name })}</h3>
      <p className="mt-2 text-muted">{t("form.notConnected")}</p>
      <Button href={whatsappLink(`${sent.subject}\n\n${sent.message}\n\n— ${sent.name} (${sent.contact})`)} className="mt-6 w-full sm:w-auto"><MessageCircle size={18} /> {t("form.viaWhatsapp")}</Button>
    </div>
  );
  const field = (id: keyof Values, label: string, props: Fieldish = {}, area = false) => {
    const cls = "w-full rounded-lg border bg-white px-4 text-base outline-none t-hover focus:border-ink focus:ring-2 focus:ring-orange/40 " + (errors[id] ? "border-red-600" : "border-line");
    const common = { id, name: id, "aria-invalid": !!errors[id], "aria-describedby": errors[id] ? `${id}-err` : undefined };
    return (
      <div>
        <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>
        {area ? <textarea {...common} {...props} rows={5} className={cls + " py-3"} /> : <input {...common} {...props} className={cls + " h-12"} />}
        {errors[id] && <p id={`${id}-err`} className="mt-1.5 text-sm text-red-700">{errors[id]}</p>}
      </div>
    );
  };
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-[var(--radius-card)] border border-line bg-white p-4 sm:space-y-5 sm:p-8">
      {field("name", t("form.name"), { autoComplete: "name", autoCapitalize: "words", enterKeyHint: "next" })}
      <div>
        <div role="group" aria-label={t("form.group")} className="mb-3 flex gap-2">
          {(["phone", "email"] as const).map((m) => (
            <button key={m} type="button" aria-pressed={mode === m} onClick={() => setMode(m)} className={cn("t-hover min-h-11 flex-1 rounded-lg border px-4 text-sm font-semibold active:scale-[.98] sm:flex-none", mode === m ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink active:bg-cream")}>{m === "phone" ? t("form.tabPhone") : t("form.tabEmail")}</button>
          ))}
        </div>
        {mode === "phone"
          ? <div key="phone">{field("contact", t("form.phone"), { type: "tel", dir: "ltr", inputMode: "tel", autoComplete: "tel", autoCapitalize: "off", enterKeyHint: "next" })}</div>
          : <div key="email">{field("contact", t("form.email"), { type: "email", dir: "ltr", inputMode: "email", autoComplete: "email", autoCapitalize: "off", autoCorrect: "off", spellCheck: false, enterKeyHint: "next" })}</div>}
      </div>
      {field("subject", t("form.subject"), { autoComplete: "off", autoCapitalize: "sentences", enterKeyHint: "next" })}
      {field("message", t("form.message"), { autoComplete: "off", autoCapitalize: "sentences" }, true)}
      <Button type="submit" disabled={busy} className="w-full sm:w-auto">{busy ? t("form.sending") : t("form.submit")}</Button>
    </form>
  );
}
