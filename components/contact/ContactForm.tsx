"use client";
import { useState } from "react";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/Button";
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  contact: z.string().trim().refine((v) => /^\S+@\S+\.\S+$/.test(v) || v.replace(/\D/g, "").length >= 7, "Enter a valid phone number or email."),
  subject: z.string().trim().min(3, "Please add a subject."),
  message: z.string().trim().min(10, "Please write at least 10 characters."),
});
type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;
// Swap this stub for a Server Action / API route (email, CRM, database) when a backend exists.
async function submitInquiry(_v: Values): Promise<{ ok: boolean }> { return { ok: true }; }

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<Values | null>(null);
  const [busy, setBusy] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!parsed.success) {
      const f = parsed.error.flatten().fieldErrors;
      setErrors({ name: f.name?.[0], contact: f.contact?.[0], subject: f.subject?.[0], message: f.message?.[0] });
      return;
    }
    setErrors({}); setBusy(true);
    await submitInquiry(parsed.data);
    setBusy(false); setSent(parsed.data);
  }
  if (sent) return (
    <div role="status" className="rounded-[var(--radius-card)] border border-line bg-white p-8">
      <h3 className="h-display text-2xl">Thanks, {sent.name}.</h3>
      <p className="mt-2 text-muted">Online sending isn’t connected yet. To reach us right away, send this same message on WhatsApp.</p>
      <Button href={whatsappLink(`${sent.subject}\n\n${sent.message}\n\n— ${sent.name} (${sent.contact})`)} className="mt-6"><MessageCircle size={18} /> Send via WhatsApp</Button>
    </div>
  );
  const field = (id: keyof Values, label: string, props: React.ComponentProps<"input"> = {}, area = false) => {
    const cls = "w-full rounded-lg border bg-white px-4 text-base outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/30 " + (errors[id] ? "border-red-600" : "border-line");
    const common = { id, name: id, "aria-invalid": !!errors[id], "aria-describedby": errors[id] ? `${id}-err` : undefined };
    return (
      <div>
        <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>
        {area ? <textarea {...common} rows={5} className={cls + " py-3"} /> : <input {...common} {...props} className={cls + " h-12"} />}
        {errors[id] && <p id={`${id}-err`} className="mt-1.5 text-sm text-red-700">{errors[id]}</p>}
      </div>
    );
  };
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-[var(--radius-card)] border border-line bg-white p-6 sm:p-8">
      {field("name", "Name", { autoComplete: "name" })}
      {field("contact", "Phone or email", { autoComplete: "email" })}
      {field("subject", "Subject")}
      {field("message", "Message", {}, true)}
      <Button type="submit" disabled={busy} className="w-full sm:w-auto">{busy ? "Sending…" : "Send message"}</Button>
    </form>
  );
}
