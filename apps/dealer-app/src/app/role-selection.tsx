import React from "react";

import {
  View,
  Button,
} from "react-native";

import { router } from "expo-router";

export default function RoleSelectionScreen() {

  const selectRole = (
    type: "BUY" | "SELL" | "REPAIR"
  ) => {
    router.push({
      pathname: "/dealer-onboarding" as any,
      params: {
        type,
      },
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        gap: 20,
      }}
    >
      <Button
        title="Sell Dealer"
        onPress={() => selectRole("SELL")}
      />

      <Button
        title="Buy Dealer"
        onPress={() => selectRole("BUY")}
      />

      <Button
        title="Repair Dealer"
        onPress={() => selectRole("REPAIR")}
      />
    </View>
  );
}