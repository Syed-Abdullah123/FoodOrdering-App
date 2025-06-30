import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OrderDetailsScreen</Text>
    </View>
  );
};

export default OrderDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
