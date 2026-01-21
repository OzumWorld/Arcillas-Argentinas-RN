import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import pickupReducer from "./pickupSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    pickup: pickupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
