import React from "react";
import { View, Text, StyleSheet, Pressable, Linking, Image } from "react-native";
import { institutional } from "../data/pickupPoints";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Arcillas Argentinas</Text>
      <Text style={styles.subtitle}>Stock: consultar disponibilidad</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Atención</Text>
        <Text style={styles.cardText}>{institutional.hours}</Text>
        <Text style={styles.cardText}>WhatsApp: {institutional.whatsapp}</Text>
        <Text style={styles.cardText}>Mail: {institutional.email}</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => Linking.openURL(institutional.instagram)}
      >
        <Text style={styles.buttonText}>Instagram</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: "#0b0f14" },
  logo: { width: 160, height: 160, marginBottom: 16, borderRadius: 18 },
  title: { fontSize: 26, fontWeight: "700", color: "#fff" },
  subtitle: { marginTop: 6, fontSize: 14, color: "#c9d4df" },
  card: { width: "100%", marginTop: 18, padding: 14, borderRadius: 14, backgroundColor: "#121a24" },
  cardTitle: { color: "#fff", fontWeight: "700", marginBottom: 6, fontSize: 16 },
  cardText: { color: "#c9d4df", fontSize: 14, marginTop: 3 },
  button: { width: "100%", marginTop: 14, paddingVertical: 12, borderRadius: 12, alignItems: "center", backgroundColor: "#1d2a3a" },
  buttonText: { color: "#fff", fontWeight: "700" },
});
