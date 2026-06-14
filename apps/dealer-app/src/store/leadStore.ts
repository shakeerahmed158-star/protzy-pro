import { create } from "zustand";

import {
  getMyLeads,
  acceptLead,
  rejectLead,
  closeLead,
} from "../services/lead.service";

interface LeadState {
  leads: any[];
  loading: boolean;

  loadLeads: () => Promise<void>;

  acceptDealerLead: (
    id: string
  ) => Promise<void>;

  rejectDealerLead: (
    id: string
  ) => Promise<void>;

  closeDealerLead: (
    id: string
  ) => Promise<void>;
}

export const useLeadStore =
  create<LeadState>((set) => ({
    leads: [],
    loading: false,

    loadLeads: async () => {
      set({ loading: true });

      try {
        const data =
          await getMyLeads();

        set({
          leads: data || [],
        });
      } finally {
        set({
          loading: false,
        });
      }
    },

    acceptDealerLead: async (
      id
    ) => {
      await acceptLead(id);

      const data =
        await getMyLeads();

      set({
        leads: data || [],
      });
    },

    rejectDealerLead: async (
      id
    ) => {
      await rejectLead(id);

      const data =
        await getMyLeads();

      set({
        leads: data || [],
      });
    },

    closeDealerLead: async (
      id
    ) => {
      await closeLead(id);

      const data =
        await getMyLeads();

      set({
        leads: data || [],
      });
    },
  }));