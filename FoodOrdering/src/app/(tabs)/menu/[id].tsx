import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import Button from "@components/Button";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("S");

  const product = products.find((p) => p.id.toString() === id);

  const productSizes = ["S", "M", "L", "XL"];

  if (!product) {
    return (
      <View>
        <Text>Product not found</Text>
      </View>
    );
  }
  const addToCart = () => {
    // Here you would typically dispatch an action to add the item to the cart
    console.warn("Adding to cart...");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />

      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

      <Text style={styles.title}>Product Size:</Text>
      <View style={styles.sizes}>
        {productSizes.map((size) => (
          <View
            key={size}
            style={[
              styles.size,
              { backgroundColor: selectedSize === size ? "gainsboro" : "#fff" },
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === size ? "black" : "gray" },
              ]}
              onPress={() => setSelectedSize(size)}
            >
              {size}
            </Text>
          </View>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button title="Add to Cart" onPress={addToCart} />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "auto",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginVertical: 10,
  },
  size: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  sizeText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
