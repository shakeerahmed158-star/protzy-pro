import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { getTransactions } from "../../services/wallet.service";

export default function TransactionsScreen() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Wallet Transactions
      </Text>

      {transactions.map((item, index) => (
        <View
          key={index}
          style={{
            padding: 12,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <Text>{item.amount}</Text>
          <Text>{item.type}</Text>
          <Text>{item.status}</Text>
        </View>
      ))}
    </ScrollView>
  );
}