import { View, Text } from "react-native";

export default function RejectedScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Dealer application rejected.
      </Text>
    </View>
  );
}