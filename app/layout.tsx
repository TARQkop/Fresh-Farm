import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { images } from "@/data/images";
import { site } from "@/lib/site";
const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Fresh dairy & farm products`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, title: site.name, description: site.description, images: [images.hero] },
  alternates: { canonical: "/" },
};
export const viewport: Viewport = { themeColor: "#161513", width: "device-width", initialScale: 1, viewportFit: "cover" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-orange focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
        <Navbar /><main id="main">{children}</main><Footer /><MobileActionBar />
      </body>
    </html>
  );
}
