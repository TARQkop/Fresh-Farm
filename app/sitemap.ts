import type { MetadataRoute } from "next";
import { getProducts } from "@/lib/products";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/products", "/about", "/contact"].map((p) => ({
    url: site.url + p,
    lastModified: new Date(),
  }));

  return [
    ...pages,
    ...getProducts().map((p) => ({
      url: `${site.url}/products/${p.slug}`,
      lastModified: new Date(),
    })),
  ];
}