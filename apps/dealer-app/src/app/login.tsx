import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { router } from "expo-router";

import { sendOtp } from "../services/auth.service";


export default function LoginScreen() {
  const [phone, setPhone] = useState("");

  const handleSendOtp = async () => {
    try {
      await sendOtp(phone);

      router.push({
        pathname: "/otp",
        params: {
          phone,
        },
      });
    } catch (error) {
      Alert.alert("Error", "Failed to send OTP");
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
          fontSize: 28,
          marginBottom: 20,
        }}
      >
        protzy Dealer Login
      </Text>

      <TextInput
        placeholder="Enter Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={{
          borderWidth: 1,
          padding: 12,
          marginBottom: 20,
        }}
      />

      <Button
        title="Send OTP"
        onPress={handleSendOtp}
      />
    </View>
  );
}