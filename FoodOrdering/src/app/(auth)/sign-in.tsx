import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import { Link, Stack, useRouter } from "expo-router";

const signInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const resetFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignIn = () => {
    // Logic for signing in goes here
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign in" }} />
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

      <Button title="Sign in" onPress={handleSignIn} />
      <Link href="/(auth)/sign-up">
        <Text style={styles.buttonText}>Create an account</Text>
      </Link>
    </View>
  );
};

export default signInScreen;

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
