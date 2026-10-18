// All image URLs live here. Images are from Unsplash (free under the Unsplash License).
// For shop photos, use "/images/your-photo.jpg" (inside public/images) or another
// HTTPS URL, and add its domain to remotePatterns in next.config.mjs.
const u = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}`;

  export const images = {
  hero: "/images/WhatsApp Image 2026-10-15 at 4.37.22 PM (3).jpeg",
  story: "/images/WhatsApp Image 2026-10-15 at 4.37.21 PM (1).jpeg",
  about: "/images/WhatsApp Image 2026-10-15 at 4.37.21 PM (2).jpeg",
  milkBottle: "/images/WhatsApp Image 2026-10-15 at 4.37.21 PM.jpeg",
  milkGlass: "/images/WhatsApp Image 2026-10-15 at 4.37.22 PM (1).jpeg",
  cheeseWhite: "/images/WhatsApp Image 2026-10-15 at 4.37.22 PM (2).jpeg",
  cheeseBoard: "/images/WhatsApp Image 2026-10-15 at 4.37.22 PM (4).jpeg",
  yogurt: "/images/WhatsApp Image 2026-10-15 at 4.37.22 PM.jpeg",
  butter: "/images/WhatsApp Image 2026-10-15 at 4.37.23 PM (1).jpeg",
  ghee: "/images/WhatsApp Image 2026-10-15 at 4.37.23 PM (2).jpeg",
  eggs: "/images/WhatsApp Image 2026-10-15 at 4.37.23 PM (3).jpeg",
  chickenWhole: "/images/WhatsApp Image 2026-10-15 at 4.37.23 PM (4).jpeg",
  chickenCuts: "/images/WhatsApp Image 2026-10-15 at 4.37.23 PM.jpeg",
  honey: "/images/WhatsApp Image 2026-10-15 at 4.37.24 PM (2).jpeg",
} as const;
