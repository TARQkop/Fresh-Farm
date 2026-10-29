// EDIT ME: replace every placeholder with the business's real details.
export const site = {
  name: "Bahik",
  tagline: "Fresh from the farm to your table",
  description: "Fresh milk, cheese, yogurt, butter, eggs and farm products from a local dairy — order by phone or WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tarqkop.github.io/Fresh-Farm",
  phone: "+964 751 440 5212", whatsapp: "9647514405212", email: "",
  address: "Duhok – Zerka, opposite Sabah Al-Atroushi Mosque (VW9J+9V6)", hours: [["Every day", "Open 24 hours"]],
  social: { instagram: "https://www.instagram.com/bakery.bahik/", tiktok: "https://www.tiktok.com/@bahikbakery", snapchat: "https://www.snapchat.com/add/bakery.bahik" },
  mapEmbed: "https://www.google.com/maps?q=36.8681684,42.9317363&z=17&output=embed",
  mapLink: "https://www.google.com/maps/place/Bahik+bakery/@36.8681684,42.9317363,743m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40088d72b3eeb307:0x76f81e12d72839d5!8m2!3d36.8681684!4d42.9317363!16s%2Fg%2F11kbfmlljw",
};
export const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
export const whatsappLink = (text = "Hello, I'd like to order.") => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
// `key` is the translation key suffix (nav.<key> in lib/i18n/dict.ts).
export const nav = [{ href: "/", key: "home" }, { href: "/about", key: "about" }, { href: "/contact", key: "contact" }];
