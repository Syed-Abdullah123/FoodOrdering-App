import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import orders from "@/assets/data/orders";

const OrderListItem = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text>{item.id}</Text>
        <Text style={{ marginBottom: 10 }}>
          {item.created_at.split("T")[0]}{" "}
        </Text>
        {/* <Text>{item.name}</Text> */}
      </View>
    );
  };
  return (
    <View>
      <FlatList data={orders} renderItem={renderItem} />
    </View>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
