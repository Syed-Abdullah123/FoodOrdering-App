import React, { forwardRef } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../constants/Colors";

type ButtonProps = {
  title?: string;
} & React.ComponentPropsWithRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ title, ...pressableProps }, ref) => {
    return (
      <Pressable ref={ref} {...pressableProps} style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  }
);

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    borderRadius: 100,
    padding: 15,
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
});
