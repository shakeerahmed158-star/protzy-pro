import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useInventoryStore } from "../../store/InventoryStore";

export default function InventoryScreen() {
  const {
    inventory,
    loading,
    loadInventory,
  } = useInventoryStore();

  useEffect(() => {
    loadInventory();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        My Inventory
      </Text>

      <FlatList
        data={inventory}
        keyExtractor={(item: any) =>
          item.id?.toString()
        }
        renderItem={({ item }: any) => (
          <View
            style={{
              padding: 15,
              borderWidth: 1,
              marginBottom: 10,
              borderRadius: 10,
            }}
          >
            <Text>
              Device: {item.deviceName}
            </Text>

            <Text>
              Quantity: {item.quantity}
            </Text>

            <Text>
              Price: ₹{item.price}
            </Text>
          </View>
        )}
      />
    </View>
  );
}