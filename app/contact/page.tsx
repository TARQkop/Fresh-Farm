import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";
export const metadata: Metadata = { title: "Contact", description: "Call, WhatsApp or message us to order fresh dairy and farm products. Find our location and opening hours.", alternates: { canonical: "/contact" } };
export default function ContactPage() { return <ContactContent />; }
