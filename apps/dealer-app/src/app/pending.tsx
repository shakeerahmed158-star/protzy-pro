import React from "react";
import {
  View,
  Text,
} from "react-native";

export default function PendingScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Dealer Application Submitted
      </Text>

      <Text
        style={{
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Your application is under review.
      </Text>
    </View>
  );
}