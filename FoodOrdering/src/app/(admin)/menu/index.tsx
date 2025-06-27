import { StyleSheet, View, Text, Image, FlatList } from "react-native";

import products from "@/assets/data/products";
import Colors from "@/src/constants/Colors";
import ProductListItem from "@components/ProductListItem";

export default function TabOneScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
  },
});
