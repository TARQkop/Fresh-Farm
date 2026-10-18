
import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { LanguageProvider } from "@/lib/i18n/provider";
import { assetPath, site } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Arabic-script font for Arabic and Kurdish.
const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

// Applies the saved language before first paint.
const langBoot = `try{var l=localStorage.getItem("ff-lang");if(l==="ar"||l==="ku"){var d=document.documentElement;d.lang=l;d.dir="rtl"}}catch(e){}`;

export const metadata: Metadata = {
  metadataBase: new URL(new URL(site.url).origin),
  title: {
    default: `${site.name} — Fresh dairy & farm products`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: assetPath("/images/img.png"),
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.url,
    images: [{
      url: assetPath("/images/img.png"),
      width: 1024,
      height: 1024,
      alt: "Bahik bakery logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [assetPath("/images/img.png")],
  },
  alternates: {
    canonical: `${site.url}/`,
  },
};

export const viewport: Viewport = {
  themeColor: "#161513",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${arabic.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: langBoot }} />
      </head>
      <body>
        <LanguageProvider>
          <SkipLink />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
