import React, { useMemo, useState } from "react";
import { View, Text, TextInput, FlatList, Pressable, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { products, Product } from "../data/products";

export default function CatalogScreen() {
  const [q, setQ] = useState("");
  const dispatch = useDispatch();

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return products;
    return products.filter((p) => p.name.toLowerCase().includes(query));
  }, [q]);

  const onAdd = (p: Product) => dispatch(addToCart({ productId: p.id }));

  return (
    <View style={styles.container}>
      <TextInput
        value={q}
        onChangeText={setQ}
        placeholder="Buscar producto..."
        placeholderTextColor="#7f94aa"
        style={styles.search}
      />

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.meta}>{item.unitLabel}</Text>

            <Text style={styles.price}>Unidad: ${item.priceUnit}</Text>

        {item.price10 != null && (
            <Text style={styles.price}>x10: ${item.price10}</Text>
    )}

        {item.price20 != null && (
            <Text style={styles.price}>x20: ${item.price20}</Text>
    )}
    </View>


            <Pressable style={styles.btn} onPress={() => onAdd(item)}>
              <Text style={styles.btnText}>Agregar</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#0b0f14",
    },
    search: {
      borderRadius: 12,
      backgroundColor: "#121a24",
      padding: 12,
      color: "#fff",
      marginBottom: 12,
    },
    sep: {
      height: 10,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      padding: 14,
      borderRadius: 14,
      backgroundColor: "#121a24",
    },
    name: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "700",
    },
    price: {
      color: "#c9d4df",
      marginTop: 4,
    },
    btn: {
      backgroundColor: "#1d2a3a",
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: 12,
    },
    btnText: {
      color: "#fff",
      fontWeight: "700",
    },
    meta: {
        color: "#7f94aa",
        marginTop: 4,
        fontSize: 12,
      },      
  });
  