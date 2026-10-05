"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import { getProduct } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/Button";

// Phone-only sticky "WhatsApp / Call" bar. Hidden on /contact (those actions are already there), while the
// mobile menu is open (html.menu-open, see globals.css) and while a text field is focused (on-screen keyboard).
export function MobileActionBar() {
  const path = usePathname();
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    const isField = (t: EventTarget | null) => t instanceof HTMLElement && t.matches("input, textarea, select, [contenteditable='true']");
    const on = (e: FocusEvent) => setTyping(isField(e.target));
    const off = () => setTyping(false);
    document.addEventListener("focusin", on);
    document.addEventListener("focusout", off);
    return () => { document.removeEventListener("focusin", on); document.removeEventListener("focusout", off); };
  }, []);
  if (path.startsWith("/contact")) return null;
  const slug = path.match(/^\/products\/([^/]+)/)?.[1];
  const product = slug ? getProduct(slug) : undefined;
  const href = whatsappLink(product ? `Hello, I'd like to order: ${product.name}` : undefined);
  return (
    <>
      {/* Spacer so the fixed bar never covers the footer (bar height 4rem + safe area, which the footer already pads). */}
      <div aria-hidden className="h-16 bg-ink lg:hidden" />
      <div className={`action-bar fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-[max(0.75rem,env(safe-area-inset-left))] pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur lg:hidden ${typing ? "hidden" : ""}`}>
        <div className="mx-auto flex max-w-xl gap-2">
          <Button href={href} className="min-w-0 flex-[1.4] px-4"><MessageCircle size={18} aria-hidden /> WhatsApp</Button>
          <Button href={`tel:${site.phone}`} variant="light" className="min-w-0 flex-1 px-4"><Phone size={18} aria-hidden /> Call</Button>
        </div>
      </div>
    </>
  );
}
