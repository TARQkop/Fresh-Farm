import clsx, { type ClassValue } from "clsx";
export const cn = (...i: ClassValue[]) => clsx(i);
export const formatPrice = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
