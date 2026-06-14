import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
} from "react-native";

import { useOrderStore } from "../../store/orderStore";

export default function OrdersScreen() {
  const {
    dashboard,
    stats,
    earnings,
    loadOrders,
  } = useOrderStore();

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <ScrollView
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
        Dealer Orders
      </Text>

      <Text>
        Total Leads: {stats?.totalLeads || 0}
      </Text>

      <Text>
        Accepted Leads: {stats?.acceptedLeads || 0}
      </Text>

      <Text>
        Closed Leads: {stats?.closedLeads || 0}
      </Text>

      <Text>
        Wallet Balance: ₹
        {dashboard?.walletBalance || 0}
      </Text>

      <Text>
        Total Earnings: ₹
        {earnings?.total || 0}
      </Text>
    </ScrollView>
  );
}