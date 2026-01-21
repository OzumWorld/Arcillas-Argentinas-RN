// src/store/pickupSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PickupState = {
  selectedPickupPointId: string | null;
};

const initialState: PickupState = {
  selectedPickupPointId: null,
};

const pickupSlice = createSlice({
  name: "pickup",
  initialState,
  reducers: {
    setPickupPoint: (state, action: PayloadAction<string>) => {
      state.selectedPickupPointId = action.payload;
    },
    clearPickupPoint: (state) => {
      state.selectedPickupPointId = null;
    },
  },
});

export const { setPickupPoint, clearPickupPoint } = pickupSlice.actions;
export default pickupSlice.reducer;

export const selectPickupPointId = (s: any) => s.pickup.selectedPickupPointId as string | null;
