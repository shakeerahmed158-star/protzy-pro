import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
} from "react-native";

import {
  useLocalSearchParams,
  router,
} from "expo-router";

import { verifyOtp } from "../services/auth.service";
import { saveToken } from "../utils/storage";
import { useAuthStore } from "../store/authStore";

export default function OtpScreen() {
  const { phone } = useLocalSearchParams();

  const [otp, setOtp] = useState("");

  const setToken = useAuthStore(
    (state) => state.setToken
  );

  const handleVerifyOtp = async () => {
    try {
      const response = await verifyOtp(
        phone as string,
        otp
      );

      console.log("OTP VERIFIED:", response);

      // Save JWT locally
      await saveToken(response.token);

      // Save JWT in Zustand
      setToken(response.token);

      // Navigate to role selection
      router.replace("/role-selection");
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Error",
        "Invalid OTP"
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        Enter OTP
      </Text>

      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 20,
        }}
      />

      <Button
        title="Verify OTP"
        onPress={handleVerifyOtp}
      />
    </View>
  );
}