import React, { useEffect } from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { useLeadStore } from "../../store/leadStore";

export default function LeadsScreen() {
  const {
    leads,
    loadLeads,
    acceptDealerLead,
    rejectDealerLead,
  } = useLeadStore();

  useEffect(() => {
    loadLeads();
  }, []);

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
        My Leads
      </Text>

      <FlatList
        data={leads}
        keyExtractor={(item: any) =>
          item.id
        }
        renderItem={({ item }: any) => (
          <View
            style={{
              borderWidth: 1,
              padding: 15,
              marginBottom: 10,
              borderRadius: 10,
            }}
          >
            <Text>
              {item.customerName}
            </Text>

            <Text>
              {item.phone}
            </Text>

            <Text>
              {item.status}
            </Text>

            <TouchableOpacity
              onPress={() =>
                acceptDealerLead(
                  item.id
                )
              }
            >
              <Text>
                Accept
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                rejectDealerLead(
                  item.id
                )
              }
            >
              <Text>
                Reject
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}