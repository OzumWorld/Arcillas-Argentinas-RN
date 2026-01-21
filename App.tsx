import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import AppNavigator from "./src/navigation/AppNavigator";
import { loadCart, saveCart } from "./src/store/persistCart";

export default function App() {
  useEffect(() => {
    loadCart(store.dispatch);

    const unsub = store.subscribe(() => {
      saveCart(store.getState());
    });

    return () => unsub();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
