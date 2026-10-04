# Fresh Farm — dairy & farm-food catalog
Next.js (App Router) · TypeScript · Tailwind v4 · Motion · Zod
```
npm install && npm run dev
```
**Edit first:** `lib/site.ts` (name, phone, WhatsApp, address, hours, socials, map), `data/products.ts` (catalog), `public/images/` (replace SVG placeholders with real photos; keep file names or update paths).
Set `NEXT_PUBLIC_SITE_URL` for correct sitemap/canonical URLs.
**Next steps:** replace `lib/products.ts` internals with a DB/API, and `submitInquiry` in `components/contact/ContactForm.tsx` with a Server Action.
