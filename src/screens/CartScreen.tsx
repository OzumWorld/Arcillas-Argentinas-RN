import React, { useMemo } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { selectCartItems, setQty, removeFromCart, clearCart } from "../store/cartSlice";
import { products, Product } from "../data/products";
import { getUnitPrice } from "../utils/pricing";

type CartItem = { productId: string; qty: number };
type CartDetailedItem = CartItem & { product: Product };

export default function CartScreen() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const items = useSelector(selectCartItems) as CartItem[];

  const detailed: CartDetailedItem[] = useMemo(() => {
    return items
      .map((i) => {
        const product = products.find((p) => p.id === i.productId);
        if (!product) return null;
        return { ...i, product };
      })
      .filter(Boolean) as CartDetailedItem[];
  }, [items]);

  const total = useMemo(() => {
    return detailed.reduce((acc, it) => {
      const unit = getUnitPrice(it.product, it.qty);
      return acc + unit * it.qty;
    }, 0);
  }, [detailed]);

  const tierLabel = (qty: number) => {
    if (qty >= 20) return "Mayorista 20+";
    if (qty >= 10) return "Mayorista 10+";
    return "Unitario";
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {detailed.length === 0 ? (
        <Text>Tu carrito está vacío.</Text>
      ) : (
        <>
          <FlatList
            data={detailed}
            keyExtractor={(it) => it.productId}
            renderItem={({ item }) => {
              const unit = getUnitPrice(item.product, item.qty);
              const sub = unit * item.qty;

              return (
                <View style={{ padding: 12, borderWidth: 1, borderRadius: 12, marginBottom: 10 }}>
                  <Text style={{ fontWeight: "700" }}>{item.product.name}</Text>

                  <Text>
                    {item.product.unitLabel} · {tierLabel(item.qty)}
                  </Text>

                  <Text>
                    Unit: ${unit} · Subtotal: ${sub}
                  </Text>

                  <View style={{ flexDirection: "row", gap: 10, marginTop: 10, alignItems: "center" }}>
                    <Pressable
                      onPress={() =>
                        dispatch(
                          setQty({
                            productId: item.productId,
                            qty: Math.max(1, item.qty - 1),
                          })
                        )
                      }
                    >
                      <Text style={{ fontSize: 18 }}>−</Text>
                    </Pressable>

                    <Text style={{ minWidth: 24, textAlign: "center" }}>{item.qty}</Text>

                    <Pressable
                      onPress={() =>
                        dispatch(
                          setQty({
                            productId: item.productId,
                            qty: item.qty + 1,
                          })
                        )
                      }
                    >
                      <Text style={{ fontSize: 18 }}>+</Text>
                    </Pressable>

                    <Pressable onPress={() => dispatch(removeFromCart({ productId: item.productId }))}>
                      <Text style={{ marginLeft: 10 }}>Eliminar</Text>
                    </Pressable>
                  </View>
                </View>
              );
            }}
          />

          <Text style={{ fontWeight: "800", marginTop: 8 }}>Total: ${total}</Text>

          {/* ✅ BOTÓN: IR A PUNTOS DE RETIRO */}
          <Pressable
            onPress={() => navigation.navigate("PickupPoints")}
            style={{
              marginTop: 12,
              paddingVertical: 12,
              borderRadius: 12,
              alignItems: "center",
              backgroundColor: "#1d2a3a",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "800" }}>Elegir punto de retiro</Text>
          </Pressable>

          <Pressable onPress={() => dispatch(clearCart())} style={{ marginTop: 12 }}>
            <Text>Vaciar carrito</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}
