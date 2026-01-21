// src/screens/PickupPointsScreen.tsx
import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { pickupPoints } from "../data/pickupPoints";
import { setPickupPoint } from "../store/pickupSlice";
import type { RootState } from "../store/store";

export default function PickupPointsScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const selectedId = useSelector((s: RootState) => s.pickup.selectedPickupPointId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Puntos de retiro</Text>
      <Text style={styles.subtitle}>Elegí dónde retirar tu pedido</Text>

      <FlatList
        data={pickupPoints}
        keyExtractor={(p) => p.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => {
          const active = item.id === selectedId;

          return (
            <Pressable
              onPress={() => dispatch(setPickupPoint(item.id))}
              style={[styles.card, active && styles.cardActive]}
            >
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.meta}>{item.address}</Text>
              {!!item.hours && <Text style={styles.meta}>Horario: {item.hours}</Text>}
              {!!item.notes && <Text style={styles.meta}>Nota: {item.notes}</Text>}
              {!!item.whatsapp && <Text style={styles.meta}>WhatsApp: {item.whatsapp}</Text>}
              {active && <Text style={styles.badge}>Seleccionado</Text>}
            </Pressable>
          );
        }}
      />

      <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>Volver</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#0b0f14" },
  title: { color: "#fff", fontSize: 22, fontWeight: "800" },
  subtitle: { color: "#c9d4df", marginTop: 6, marginBottom: 14 },

  card: { padding: 14, borderRadius: 14, backgroundColor: "#121a24" },
  cardActive: { borderWidth: 1, borderColor: "#7f94aa" },

  name: { color: "#fff", fontSize: 16, fontWeight: "800" },
  meta: { color: "#c9d4df", marginTop: 4 },

  badge: { marginTop: 10, color: "#fff", fontWeight: "800" },

  btn: { marginTop: 14, paddingVertical: 12, borderRadius: 12, alignItems: "center", backgroundColor: "#1d2a3a" },
  btnText: { color: "#fff", fontWeight: "800" },
});
