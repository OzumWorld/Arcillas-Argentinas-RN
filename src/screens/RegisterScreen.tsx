import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>

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

      <TextInput
        value={pass2}
        onChangeText={setPass2}
        placeholder="Repetir contraseña"
        placeholderTextColor="#7f94aa"
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>Crear</Text>
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
});
