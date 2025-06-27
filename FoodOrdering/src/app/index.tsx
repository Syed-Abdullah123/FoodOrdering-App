import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Button from "@components/Button";

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href="/(user)" asChild>
        <Button title="User" />
      </Link>
      <Link href="/(admin)" asChild>
        <Button title="Admin" />
      </Link>
    </View>
  );
};

export default index;
