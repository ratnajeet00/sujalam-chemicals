import { Stack } from "expo-router";

export default function Layout() {
  // Use the Stack directly - expo-router manages the NavigationContainer internally
  return <Stack screenOptions={{ headerShown: false }} />;
}
