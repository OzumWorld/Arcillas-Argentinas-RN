import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export type CartItem = {
  productId: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ productId: string }>) => {
      const found = state.items.find(i => i.productId === action.payload.productId);
      if (found) found.qty += 1;
      else state.items.push({ productId: action.payload.productId, qty: 1 });
    },
    setQty: (state, action: PayloadAction<{ productId: string; qty: number }>) => {
      const item = state.items.find(i => i.productId === action.payload.productId);
      if (!item) return;
      item.qty = Math.max(0, action.payload.qty);
      state.items = state.items.filter(i => i.qty > 0);
    },
    removeFromCart: (state, action: PayloadAction<{ productId: string }>) => {
      state.items = state.items.filter(i => i.productId !== action.payload.productId);
    },
    clearCart: (state) => {
      state.items = [];
    },
    hydrateCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload ?? [];
    },
  },
});

export const { addToCart, setQty, removeFromCart, clearCart, hydrateCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
 