import { View, Text } from "react-native";

interface StatsCardProps {
  title: string;
  value: string;
}

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        elevation: 3,
      }}
    >
      <Text>{title}</Text>

      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginTop: 6,
        }}
      >
        {value}
      </Text>
    </View>
  );
}