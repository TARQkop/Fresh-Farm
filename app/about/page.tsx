import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "About", description: "Our story, our focus on freshness and quality, and the values behind our local dairy and farm-food business.", alternates: { canonical: `${site.url}/about` } };
export default function AboutPage() { return <AboutContent />; }
