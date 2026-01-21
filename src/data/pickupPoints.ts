export type PickupPoint = {
    id: string;
    name: string;
    address: string;
    hours?: string;
    notes?: string;
    whatsapp?: string;
  };
  
  export const pickupPoints: PickupPoint[] = [
    {
      id: "ingeniero-maschwitz",
      name: "Ingeniero Maschwitz",
      address: "Ing. Maschwitz, Buenos Aires",
      hours: "A coordinar",
      notes: "Agostina",
      whatsapp: "+54 9 11 6042-9954",
    },
    {
      id: "martinez",
      name: "Martínez",
      notes: "Paola",
      whatsapp: "+5491130413331",
      address: "Castro Barros 1250, Martínez",
    },
    {
      id: "tigre",
      name: "Tigre",
      notes: "Carlos",
      whatsapp: "+5491149800005",
      address: "Barrio El Atardecer Lote 268, Rincón de Milberg, Tigre",
    },
    {
      id: "maschwitz",
      name: "Ingeniero Maschwitz",
      notes: "Agostina",
      whatsapp: "+5491160429954",
      address: "Almafuete 1755, Ingeniero Maschwitz",
    },
  ];
  
  export const institutional = {
    whatsapp: "+5491155634825",
    email: "arcillasargentinas@gmail.com",
    hours: "11 a 13 hs · 17 a 21 hs",
    instagram:
      "https://www.instagram.com/arcillasargentinas?igsh=MXU4amR4MmVxNzJmOQ%3D%3D&utm_source=qr",
  };
  