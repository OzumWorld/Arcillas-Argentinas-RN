import AsyncStorage from "@react-native-async-storage/async-storage";
import { hydrateCart } from "./cartSlice";
import type { AppDispatch, RootState } from "./store";

const KEY = "@arcillas_cart_v1";

export async function loadCart(dispatch: AppDispatch) {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    if (!raw) return;
    dispatch(hydrateCart(JSON.parse(raw)));
  } catch (e) {
    console.log("loadCart error", e);
  }
}

export async function saveCart(state: RootState) {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(state.cart.items));
  } catch (e) {
    console.log("saveCart error", e);
  }
}
