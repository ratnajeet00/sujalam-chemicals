import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { AuthStore } from "../store";
import COLORS from "../constants/colors";

export default function Index() {
  const router = useRouter();
  const { isLoggedIn } = AuthStore.useState((s) => s);

  useEffect(() => {
    // Simple redirect based on auth state without checking connectivity
    const redirect = setTimeout(() => {
      if (isLoggedIn) {
        router.replace("/(pages)/home");
      } else {
        router.replace("/login");
      }
    }, 100);

    return () => clearTimeout(redirect);
  }, [isLoggedIn, router]);

  // Simple loading screen
  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.bg,
    padding: 20,
  },
  loadingText: {
    color: 'white',
    fontSize: 18,
  }
});
