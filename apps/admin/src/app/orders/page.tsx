"use client";

import AdminLayout from "@/components/layout/AdminLayout";

import {
  useOrders,
  useApproveOrder,
  useRejectOrder,
} from "@/hooks/useOrders";

export default function OrdersPage() {
  const {
    data: orders = [],
    isLoading,
  } = useOrders();

  const approveOrder = useApproveOrder();
  const rejectOrder = useRejectOrder();

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="p-10">
          Loading Orders...
        </div>
      </AdminLayout>
    );
  }

  const totalOrders = orders.length;

  const approvedOrders = orders.filter(
    (o: any) =>
      o.status === "APPROVED"
  ).length;

  const pendingOrders = orders.filter(
    (o: any) =>
      o.status === "PENDING"
  ).length;

  const rejectedOrders = orders.filter(
    (o: any) =>
      o.status === "REJECTED"
  ).length;

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* HEADER */}

        <div>
          <h1 className="text-5xl font-black">
            Orders Center
          </h1>

          <p className="mt-3 text-gray-500">
            Manage all platform orders
          </p>
        </div>

        {/* KPI CARDS */}

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-6 border">
            <p className="text-gray-500">
              Total Orders
            </p>

            <h2 className="text-4xl font-black mt-2">
              {totalOrders}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 border">
            <p className="text-gray-500">
              Approved
            </p>

            <h2 className="text-4xl font-black mt-2 text-green-600">
              {approvedOrders}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 border">
            <p className="text-gray-500">
              Pending
            </p>

            <h2 className="text-4xl font-black mt-2 text-yellow-500">
              {pendingOrders}
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 border">
            <p className="text-gray-500">
              Rejected
            </p>

            <h2 className="text-4xl font-black mt-2 text-red-500">
              {rejectedOrders}
            </h2>
          </div>

        </div>

        {/* TABLE */}

        <div className="bg-white rounded-3xl border overflow-hidden">

          <table className="w-full">

            <thead>
              <tr className="border-b bg-gray-50">

                <th className="p-5 text-left">
                  Order ID
                </th>

                <th className="p-5 text-left">
                  Dealer
                </th>

                <th className="p-5 text-left">
                  Amount
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

              {orders.map((order: any) => (
                <tr
                  key={order.id}
                  className="border-b"
                >
                  <td className="p-5">
                    {order.id}
                  </td>

                  <td className="p-5">
                    {order.dealerName ||
                      "N/A"}
                  </td>

                  <td className="p-5">
                    ₹{order.amount}
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
                        order.status ===
                        "APPROVED"
                          ? "bg-green-100 text-green-700"
                          : order.status ===
                            "REJECTED"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                    >
                      {order.status}
                    </span>

                  </td>

                  <td className="p-5 flex gap-2">

                    <button
                      onClick={() =>
                        approveOrder.mutate(
                          order.id
                        )
                      }
                      className="
                      px-4
                      py-2
                      rounded-lg
                      bg-green-600
                      text-white
                      "
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        rejectOrder.mutate(
                          order.id
                        )
                      }
                      className="
                      px-4
                      py-2
                      rounded-lg
                      bg-red-600
                      text-white
                      "
                    >
                      Reject
                    </button>

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