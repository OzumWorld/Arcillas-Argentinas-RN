import type { Product } from "../data/products";

export function getUnitPrice(p: Product, qty: number) {
  if (qty >= 20) return p.price20 ?? p.price10 ?? p.priceUnit;
  if (qty >= 10) return p.price10 ?? p.priceUnit;
  return p.priceUnit;
}
