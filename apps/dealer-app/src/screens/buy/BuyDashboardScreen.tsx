import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { getDealerDashboard } from "../../services/dashboard.service";
import { getWallet } from "../../services/wallet.service";
import {
  useDashboardStore,
} from "../../store/dashboardStore";



export default function BuyDashboardScreen() {

    

  const [dashboard, setDashboard] =
    useState<any>(null);

    const [wallet, setWallet] = useState<any>(null);

  const {
    stats,
    earnings,
  } = useDashboardStore();

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data =
        await getDealerDashboard();
    
        const walletData = await getWallet();

       setWallet(walletData);

      console.log(data);

      setDashboard(data);
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        BUY DEALER DASHBOARD
      </Text>

      <Text>
  Wallet Balance:
  {wallet?.balance ?? 0}
</Text>

<Text>
Total Leads:
{stats?.totalLeads || 0}
</Text>

<Text>
Accepted Leads:
{stats?.acceptedLeads || 0}
</Text>

<Text>
Closed Leads:
{stats?.closedLeads || 0}
</Text>

<Text>
Wallet Balance:
₹{dashboard?.walletBalance || 0}
</Text>

<Text>
Total Earnings:
₹{earnings?.total || 0}
</Text>

      <Text>
        {JSON.stringify(dashboard)}
      </Text>
    </View>
  );
}