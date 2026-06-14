import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";

import { useInventoryStore } from "../../store/InventoryStore";

export default function AddInventoryScreen() {
  const { addItem } = useInventoryStore();

  const [deviceName, setDeviceName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    try {
      await addItem({
        deviceName,
        quantity: Number(quantity),
        price: Number(price),
      });

      Alert.alert(
        "Success",
        "Inventory Added"
      );

      setDeviceName("");
      setQuantity("");
      setPrice("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <TextInput
        placeholder="Device Name"
        value={deviceName}
        onChangeText={setDeviceName}
      />

      <TextInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Button
        title="Add Inventory"
        onPress={handleSubmit}
      />
    </View>
  );
}