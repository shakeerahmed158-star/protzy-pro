import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import {
  getMyLeads,
  acceptLead,
  rejectLead,
} from "../../services/lead.service";

export default function LeadListScreen() {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    try {
      const data = await getMyLeads();
      setLeads(data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccept = async (id: string) => {
    await acceptLead(id);
    loadLeads();
  };

  const handleReject = async (id: string) => {
    await rejectLead(id);
    loadLeads();
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        My Leads
      </Text>

      {leads.map((lead) => (
        <View
          key={lead.id}
          style={{
            borderWidth: 1,
            padding: 15,
            marginBottom: 15,
            borderRadius: 10,
          }}
        >
          <Text>
            {lead.customerName}
          </Text>

          <Text>
            {lead.phone}
          </Text>

          <Text>
            {lead.status}
          </Text>

          <TouchableOpacity
            onPress={() => handleAccept(lead.id)}
          >
            <Text>
              Accept Lead
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleReject(lead.id)}
          >
            <Text>
              Reject Lead
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}