// All image URLs live here. Images are from Unsplash (free under the Unsplash License).
// For shop photos, use "/images/your-photo.jpg" (inside public/images) or another
// HTTPS URL, and add its domain to remotePatterns in next.config.mjs.
const u = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}`;

export const images = {
  hero: u("1609246280917-339404083c49"),
  story: u("1600609293375-ffef58157013"),
  about: u("1647813846512-2ebc1eb15628"),
  milkBottle: u("1609246280917-339404083c49"),
  milkGlass: u("1596151163116-98a5033814c2"),
  cheeseWhite: u("1661349008073-136bed6e6788"),
  cheeseBoard: u("1635910862522-7ee4806acf35"),
  yogurt: u("1633893215271-f7e1fca081ad"),
  butter: u("1589985269102-ff38adf6f00d"),
  ghee: u("1590147315472-e701a4775379"),
  eggs: u("1647813846512-2ebc1eb15628"),
  chickenWhole: u("1672787153652-b3b9d92f3e8c"),
  chickenCuts: u("1587593810167-a84920ea0781"),
  honey: u("1558642452-9d2a7deb7f62"),
} as const;
