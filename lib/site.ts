// EDIT ME: replace every placeholder with the business's real details.
export const site = {
  name: "Bahik",
  tagline: "Fresh from the farm to your table",
  description: "Fresh milk, cheese, yogurt, butter, eggs and farm products from a local dairy — order by phone or WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  phone: "+000 000 000 0000", whatsapp: "000000000000", email: "hello@example.com",
  address: "Your street address, City", hours: [["Saturday – Thursday", "7:00 – 21:00"], ["Friday", "9:00 – 21:00"]],
  social: { instagram: "https://instagram.com/", facebook: "https://facebook.com/", snapchat: "https://snapchat.com/add/" },
  mapEmbed: "",
};
export const whatsappLink = (text = "Hello, I'd like to order.") => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
// `key` is the translation key suffix (nav.<key> in lib/i18n/dict.ts).
export const nav = [{ href: "/", key: "home" }, { href: "/about", key: "about" }, { href: "/contact", key: "contact" }];
