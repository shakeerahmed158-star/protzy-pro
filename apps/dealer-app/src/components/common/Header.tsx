import { View, Text } from "react-native";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View
      style={{
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: "#0066FF",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </View>
  );
}