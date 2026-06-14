import React, { useState } from "react";

import {
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
} from "react-native";

import {
  useLocalSearchParams,
  router,
} from "expo-router";

import { applyDealer } from "../services/dealer.service";

export default function DealerOnboardingScreen() {
  const { type } =
    useLocalSearchParams();

  const [ownerName, setOwnerName] =
    useState("");

  const [contactNumber, setContactNumber] =
    useState("");

  const [alternateNumber, setAlternateNumber] =
    useState("");

  const [shopName, setShopName] =
    useState("");

  const [gstNumber, setGstNumber] =
    useState("");

  const [stateName, setStateName] =
    useState("");

  const [city, setCity] =
    useState("");

  const [area, setArea] =
    useState("");

  const [pincode, setPincode] =
    useState("");

  const [address, setAddress] =
    useState("");

    const [panNumber, setPanNumber] =
  useState("");

const [aadhaarNumber, setAadhaarNumber] =
  useState("");

const [profilePhoto, setProfilePhoto] =
  useState("");






  const handleSubmit = async () => {
    try {
      if (
        !ownerName ||
        !contactNumber ||
        !shopName ||
        !gstNumber ||
        !stateName
      ) {
        Alert.alert(
          "Validation",
          "Please fill all required fields"
        );
        return;
      }

    const response =
  await applyDealer({
    ownerName,
    contactNumber,
    alternateNumber,
    shopName,
    gstNumber,

    panNumber,
    aadhaarNumber,
    profilePhoto,

    state: stateName,
    city,
    area,
    pincode,
    address,
    type:
      type as
        | "BUY"
        | "SELL"
        | "REPAIR",
  });

      if (
        response.status ===
        "PENDING"
      ) {
        router.replace("/pending");
        return;
      }
    } catch (error: any) {
      console.log(
        error?.response?.data
      );

      Alert.alert(
        "Error",
        error?.response?.data
          ?.message ||
          "Failed to create dealer"
      );
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        gap: 15,
      }}
    >
      <TextInput
        placeholder="Owner Name"
        value={ownerName}
        onChangeText={setOwnerName}
        style={{
          borderWidth: 1,
          padding: 12,
        }}
      />

      <TextInput
        placeholder="Contact Number"
        value={contactNumber}
        keyboardType="phone-pad"
        onChangeText={
          setContactNumber
        }
        style={{
          borderWidth: 1,
          padding: 12,
        }}
      />

      <TextInput
        placeholder="Alternate Number"
        value={alternateNumber}
        keyboardType="phone-pad"
        onChangeText={
          setAlternateNumber
        }
        style={{
          borderWidth: 1,
          padding: 12,
        }}
      />

      <TextInput
        placeholder="Shop Name"
        value={shopName}
        onChangeText={setShopName}
        style={{
          borderWidth: 1,
          padding: 12,
        }}
      />

      <TextInput
        placeholder="GST Number"
        value={gstNumber}
        onChangeText={setGstNumber}
        style={{
          borderWidth: 1,
          padding: 12,
        }}
      />

      <TextInput
        placeholder="State"
        value={stateName}
        onChangeText={setStateName}
        style={{
          borderWidth: 1,
          padding: 12,
        }}
      />

      <TextInput
        placeholder="City"
        value={city}
        onChangeText={setCity}
        style={{
          borderWidth: 1,
          padding: 12,
        }}
      />

      <TextInput
        placeholder="Area"
        value={area}
        onChangeText={setArea}
        style={{
          borderWidth: 1,
          padding: 12,
        }}
      />

      <TextInput
        placeholder="Pincode"
        value={pincode}
        keyboardType="numeric"
        onChangeText={setPincode}
        style={{
          borderWidth: 1,
          padding: 12,
        }}
      />

      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        multiline
        style={{
          borderWidth: 1,
          padding: 12,
          minHeight: 100,
        }}
      />

      <Button
        title="Create Dealer Profile"
        onPress={handleSubmit}
      />
    </ScrollView>
  );
}