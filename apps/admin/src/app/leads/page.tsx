"use client";

import AdminLayout from "@/components/layout/AdminLayout";

import {
  useLeads,
  useAcceptLead,
  useRejectLead,
  useCloseLead,
} from "@/hooks/useLeads";

export default function LeadsPage() {
  const {
    data: leads = [],
    isLoading,
  } = useLeads();

  const acceptLead = useAcceptLead();
  const rejectLead = useRejectLead();
  const closeLead = useCloseLead();

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="p-10">
          Loading Leads...
        </div>
      </AdminLayout>
    );
  }

  const totalLeads = leads.length;

  const acceptedLeads = leads.filter(
    (lead: any) =>
      lead.status === "ACCEPTED"
  ).length;

  const pendingLeads = leads.filter(
    (lead: any) =>
      lead.status === "PENDING"
  ).length;

  const closedLeads = leads.filter(
    (lead: any) =>
      lead.status === "CLOSED"
  ).length;

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* HEADER */}

        <div>
          <h1 className="text-5xl font-black">
            Leads Command Center
          </h1>

          <p className="mt-3 text-gray-500">
            Monitor and manage all dealer leads.
          </p>
        </div>

        {/* KPI SECTION */}

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <p className="text-gray-500">
              Total Leads
            </p>

            <h2 className="text-4xl font-black mt-2">
              {totalLeads}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <p className="text-gray-500">
              Accepted
            </p>

            <h2 className="text-4xl font-black mt-2 text-green-600">
              {acceptedLeads}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <p className="text-gray-500">
              Pending
            </p>

            <h2 className="text-4xl font-black mt-2 text-yellow-500">
              {pendingLeads}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <p className="text-gray-500">
              Closed
            </p>

            <h2 className="text-4xl font-black mt-2 text-blue-600">
              {closedLeads}
            </h2>
          </div>

        </div>

        {/* AI SECTION */}

        <div
          className="
          rounded-3xl
          p-8
          bg-gradient-to-r
          from-yellow-400
          to-yellow-500
          "
        >
          <h2 className="text-3xl font-black">
            Lead Intelligence
          </h2>

          <p className="mt-3">
            Track lead assignments,
            conversions and dealer performance
            from a centralized command center.
          </p>
        </div>

        {/* LEADS TABLE */}

        <div
          className="
          bg-white
          rounded-3xl
          border
          border-gray-100
          shadow-sm
          overflow-hidden
          "
        >

          <table className="w-full">

            <thead>

              <tr className="border-b bg-gray-50">

                <th className="p-5 text-left">
                  Lead ID
                </th>

                <th className="p-5 text-left">
                  Customer
                </th>

                <th className="p-5 text-left">
                  Phone
                </th>

                <th className="p-5 text-left">
                  Status
                </th>

                <th className="p-5 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {leads.map((lead: any) => (
                <tr
                  key={lead.id}
                  className="border-b"
                >
                  <td className="p-5">
                    {lead.id}
                  </td>

                  <td className="p-5">
                    {lead.customerName ||
                      lead.name ||
                      "N/A"}
                  </td>

                  <td className="p-5">
                    {lead.mobile ||
                      lead.phone ||
                      "N/A"}
                  </td>

                  <td className="p-5">

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-semibold

                        ${
                          lead.status ===
                          "ACCEPTED"
                            ? "bg-green-100 text-green-700"
                            : lead.status ===
                              "REJECTED"
                            ? "bg-red-100 text-red-700"
                            : lead.status ===
                              "CLOSED"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                        }
                      `}
                    >
                      {lead.status}
                    </span>

                  </td>

                  <td className="p-5">

                    <div className="flex gap-2">

                      <button
                        onClick={() =>
                          acceptLead.mutate(
                            lead.id
                          )
                        }
                        className="
                        bg-green-600
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        "
                      >
                        Accept
                      </button>

                      <button
                        onClick={() =>
                          rejectLead.mutate(
                            lead.id
                          )
                        }
                        className="
                        bg-red-600
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        "
                      >
                        Reject
                      </button>

                      <button
                        onClick={() =>
                          closeLead.mutate(
                            lead.id
                          )
                        }
                        className="
                        bg-blue-600
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        "
                      >
                        Close
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </AdminLayout>
  );
}