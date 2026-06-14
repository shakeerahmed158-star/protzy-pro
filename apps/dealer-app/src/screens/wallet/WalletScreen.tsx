import React, { useEffect } from "react";

import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";

import {
  useWalletStore,
} from "../../store/walletStore";

export default function WalletScreen() {
  const {
    wallet,
    transactions,
    loading,
    loadWallet,
  } = useWalletStore();

  useEffect(() => {
    loadWallet();
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
        }}
      >
        Wallet
      </Text>

      <Text
        style={{
          marginTop: 20,
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        Balance: ₹{wallet?.balance ?? 0}
      </Text>

      <FlatList
        data={transactions || []}
        keyExtractor={(item: any, index) =>
          item?.id?.toString() ||
          index.toString()
        }
        renderItem={({ item }: any) => (
          <View
            style={{
              padding: 15,
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 8,
              marginTop: 10,
            }}
          >
            <Text>
              Amount: ₹{item?.amount ?? 0}
            </Text>

            <Text>
              Type: {item?.type ?? "-"}
            </Text>

            <Text>
              Status: {item?.status ?? "-"}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text
            style={{
              marginTop: 20,
            }}
          >
            No transactions found
          </Text>
        }
      />
    </View>
  );
}