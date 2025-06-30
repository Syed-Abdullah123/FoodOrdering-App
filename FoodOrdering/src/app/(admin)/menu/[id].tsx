import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@/assets/data/products";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import Button from "@components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types/types";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/src/constants/Colors";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>("S");

  const product = products.find((p) => p.id.toString() === id);

  const productSizes: PizzaSize[] = ["S", "M", "L", "XL"];

  if (!product) {
    return (
      <View>
        <Text>Product not found</Text>
      </View>
    );
  }
  const addToCart = () => {
    addItem(product, selectedSize);
    router.push("/cart");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil-square-o"
                    size={25}
                    color={Colors.light.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          presentation: "modal",
        }}
      />

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
