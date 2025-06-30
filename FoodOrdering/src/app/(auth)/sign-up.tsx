import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import { Link, Stack } from "expo-router";

const signUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleCreateAccount = () => {
    // Logic for creating an account goes here
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Creating account for:", { email, password });
    resetFields();
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign up" }} />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="johndoe@gmail.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="********"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Create Account" onPress={handleCreateAccount} />
      <Link href="/(auth)/sign-in">
        <Text style={styles.buttonText}>Sign in</Text>
      </Link>
    </View>
  );
};

export default signUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "black",
  },
  input: {
    padding: 10,
    marginBottom: 16,
    borderRadius: 5,
    backgroundColor: Colors.light.background,
  },
  buttonText: {
    color: Colors.light.tint,
    textAlign: "center",
    fontSize: 16,
  },
});
