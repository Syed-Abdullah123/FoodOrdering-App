import { StyleSheet, View, Text, Image } from "react-native";

import products from "@/assets/data/products";
import Colors from "@/src/constants/Colors";
import ProductListItem from "@/src/components/ProductListItem";

const product = products[0];
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
  },
});
