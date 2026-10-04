import type { Category } from "@/types/category";
import { images } from "./images";
export const categories: Category[] = [
  { id: "milk", name: "Milk", description: "Fresh milk, every morning.", image: images.milkBottle, related: ["yogurt", "butter", "cheese"] },
  { id: "cheese", name: "Cheese", description: "Soft, fresh and aged cheeses.", image: images.cheeseWhite, related: ["milk", "yogurt", "butter"] },
  { id: "yogurt", name: "Yogurt & Laban", description: "Creamy yogurt and cooling laban.", image: images.yogurt, related: ["milk", "cheese", "butter"] },
  { id: "butter", name: "Butter & Ghee", description: "Rich, golden and churned with care.", image: images.butter, related: ["cheese", "milk", "eggs"] },
  { id: "eggs", name: "Eggs", description: "Farm eggs, sorted and packed fresh.", image: images.eggs, related: ["chicken", "butter", "farm"] },
  { id: "chicken", name: "Chicken", description: "Fresh chicken, cut to order.", image: images.chickenWhole, related: ["eggs", "farm"] },
  { id: "farm", name: "Farm Products", description: "Honey, preserves and pantry staples.", image: images.honey, related: ["eggs", "butter", "cheese"] },
];
export const getCategory = (id: string) => categories.find((c) => c.id === id);
