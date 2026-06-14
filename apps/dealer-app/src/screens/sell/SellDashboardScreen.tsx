import { ScrollView, View } from "react-native";

import Header from "../../components/common/Header";
import StatsCard from "../../components/cards/StatsCard";

export default function SellDashboardScreen() {
  return (
    <ScrollView>
      <Header title="Sell Dealer Dashboard" />

      <View
        style={{
          padding: 16,
        }}
      >
        <StatsCard
          title="Inventory"
          value="125"
        />

        <StatsCard
          title="Orders"
          value="42"
        />

        <StatsCard
          title="Revenue"
          value="₹2,45,000"
        />

        <StatsCard
          title="Wallet"
          value="₹18,500"
        />
      </View>
    </ScrollView>
  );
}