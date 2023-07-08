import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, StyleSheet, View, useWindowDimensions } from "react-native";
import LOGO from "../../assets/LOGO.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLORS from "../../constants/colors";
import { AuthStore } from "../../store.js";

export default function LogIn() {
  const router = useRouter();
  const { height } = useWindowDimensions();
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    AuthStore.update((s) => {
      s.isLoggedIn = true;
    });
    router.replace("/(pages)/home");
  };

  const onForgotPasswordPressed = () => {
    router.push("/forgotPassword");
  };

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <Image
        source={LOGO}
        resizeMode="contain"
        style={[styles.logo, { height: height * 0.3 }]}
      />
      <CustomInput
        placeholder="Employee ID"
        value={employeeId}
        setValue={setEmployeeId}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton onPress={onSignInPressed} text="Sign In" type="PRIMARY" />
      <CustomButton
        onPress={onForgotPasswordPressed}
        text="Forgot password?"
        type="TERTIARY"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.bg,
    padding: 20,
    paddingTop: 100,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
  },
});
