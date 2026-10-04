export type CategoryId = "milk" | "cheese" | "yogurt" | "butter" | "eggs" | "chicken" | "farm";
export interface Category { id: CategoryId; name: string; description: string; image: string; related: CategoryId[]; }
