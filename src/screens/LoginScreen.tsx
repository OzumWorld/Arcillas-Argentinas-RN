import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar</Text>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#7f94aa"
        style={styles.input}
        autoCapitalize="none"
      />

      <TextInput
        value={pass}
        onChangeText={setPass}
        placeholder="Contraseña"
        placeholderTextColor="#7f94aa"
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>Continuar</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 12 }}>
        <Text style={styles.link}>Crear cuenta</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#0b0f14" },
  title: { color: "#fff", fontSize: 22, fontWeight: "800", marginBottom: 12 },
  input: { borderRadius: 12, backgroundColor: "#121a24", padding: 12, color: "#fff", marginTop: 10 },
  btn: { marginTop: 14, paddingVertical: 12, borderRadius: 12, alignItems: "center", backgroundColor: "#1d2a3a" },
  btnText: { color: "#fff", fontWeight: "800" },
  link: { color: "#c9d4df", fontWeight: "700" },
});
