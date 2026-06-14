"use client";

import AdminLayout from "@/components/layout/AdminLayout";

import {
  useDealers,
  useApproveDealer,
  useRejectDealer,
} from "@/hooks/useDealers";

export default function DealersPage() {
  const { data, isLoading, error } = useDealers();

  const approveMutation = useApproveDealer();
  const rejectMutation = useRejectDealer();

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="p-10">
          Loading Dealers...
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="p-10 text-red-500">
          Failed to load dealers
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* HEADER */}

        <div>
          <h1 className="text-5xl font-black text-gray-900">
            Dealer Approval Center
          </h1>

          <p className="mt-3 text-gray-500">
            Review and approve dealer applications.
          </p>
        </div>

        {/* SUMMARY CARD */}

        <div
          className="
          bg-gradient-to-r
          from-yellow-400
          to-yellow-500
          rounded-3xl
          p-8
          "
        >
          <h2 className="text-3xl font-black text-black">
            Pending Dealers
          </h2>

          <p className="mt-2 text-black">
            Total Applications Waiting Approval
          </p>

          <div className="mt-4 text-5xl font-black text-black">
            {data?.length || 0}
          </div>
        </div>

        {/* DEALERS TABLE */}

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

            <thead className="bg-gray-50">

              <tr>

                <th className="p-5 text-left">
                  Name
                </th>

                <th className="p-5 text-left">
                  Mobile
                </th>

                <th className="p-5 text-left">
                  Type
                </th>

                <th className="p-5 text-left">
                  Status
                </th>

                <th className="p-5 text-left">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {data?.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="p-10 text-center text-gray-500"
                  >
                    No Pending Dealers Found
                  </td>
                </tr>
              ) : (
                data?.map((dealer: any) => (
                  <tr
                    key={dealer.id}
                    className="border-t"
                  >
                    <td className="p-5 font-medium">
                      {dealer.name}
                    </td>

                    <td className="p-5">
                      {dealer.mobile}
                    </td>

                    <td className="p-5">
                      {dealer.type}
                    </td>

                    <td className="p-5">
                      <span
                        className="
                        bg-yellow-100
                        text-yellow-700
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        "
                      >
                        Pending
                      </span>
                    </td>

                    <td className="p-5">

                      <div className="flex gap-3">

                        <button
                          onClick={() =>
                            approveMutation.mutate(
                              dealer.id
                            )
                          }
                          disabled={
                            approveMutation.isPending
                          }
                          className="
                          bg-green-500
                          hover:bg-green-600
                          text-white
                          px-4
                          py-2
                          rounded-xl
                          "
                        >
                          Approve
                        </button>

                        <button
                          onClick={() =>
                            rejectMutation.mutate(
                              dealer.id
                            )
                          }
                          disabled={
                            rejectMutation.isPending
                          }
                          className="
                          bg-red-500
                          hover:bg-red-600
                          text-white
                          px-4
                          py-2
                          rounded-xl
                          "
                        >
                          Reject
                        </button>

                      </div>

                    </td>
                  </tr>
                ))
              )}

            </tbody>

          </table>
        </div>

      </div>
    </AdminLayout>
  );
}