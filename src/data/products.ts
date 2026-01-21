export type Category = "Pastas" | "Barbotina";

export type Product = {
  id: string;
  name: string;
  category: Category;
  unitLabel: string;     // "10 kg", "5 kg", "bidón 9 kg"
  priceUnit: number;     // precio unitario
  price10?: number;      // precio x10
  price20?: number;      // precio x20
};

export const products: Product[] = [
  { id: "p-lisa-blanca-10", name: "Lisa blanca", category: "Pastas", unitLabel: "10 kg", priceUnit: 15000, price10: 14500, price20: 14000 },
  { id: "p-blanca-chamote-5", name: "Blanca con chamote", category: "Pastas", unitLabel: "5 kg", priceUnit: 12000, price10: 11500, price20: 11000 },
  { id: "p-gres-claro-5", name: "Gres tostado claro", category: "Pastas", unitLabel: "5 kg", priceUnit: 12000, price10: 11500, price20: 11000 },
  { id: "p-gres-oscuro-5", name: "Gres tostado oscuro", category: "Pastas", unitLabel: "5 kg", priceUnit: 12000, price10: 11500, price20: 11000 },
  { id: "p-gres-blanco-5", name: "Gres blanco", category: "Pastas", unitLabel: "5 kg", priceUnit: 12000, price10: 11500, price20: 11000 },
  { id: "p-roja-lisa-5", name: "Roja lisa", category: "Pastas", unitLabel: "5 kg", priceUnit: 12000, price10: 11500, price20: 11000 },
  { id: "p-roja-chamote-5", name: "Roja con chamote", category: "Pastas", unitLabel: "5 kg", priceUnit: 12000, price10: 11500, price20: 11000 },
  { id: "p-fuego-directo-5", name: "Fuego directo", category: "Pastas", unitLabel: "5 kg", priceUnit: 12000, price10: 11500, price20: 11000 },
  { id: "p-raku-5", name: "Raku", category: "Pastas", unitLabel: "5 kg", priceUnit: 14500, price10: 14000, price20: 13000 },

  { id: "b-con-bidon", name: "Barbotina con bidón", category: "Barbotina", unitLabel: "unidad", priceUnit: 14500, price10: 13500 },
  { id: "b-sin-bidon", name: "Barbotina sin bidón (con canje)", category: "Barbotina", unitLabel: "unidad", priceUnit: 12500, price10: 11500 },
  { id: "b-gres-9", name: "Barbotina para gres (bidón 9 kg)", category: "Barbotina", unitLabel: "bidón 9 kg", priceUnit: 16500, price10: 15500 },
];
