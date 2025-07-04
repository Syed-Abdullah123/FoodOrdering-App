import { Stack } from "expo-router";

export default function OrdersStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Orders" }} />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
