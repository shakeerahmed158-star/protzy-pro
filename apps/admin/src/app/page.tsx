"use client";

import AdminLayout from "@/components/layout/AdminLayout";
import { useDashboard } from "@/hooks/useDashboard";

export default function Home() {
  const { data, isLoading, error } = useDashboard();

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="p-10">
          Loading Dashboard...
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="p-10">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h2 className="text-red-600 font-bold">
              Failed To Load Dashboard
            </h2>

            <p className="text-gray-600 mt-2">
              Please verify backend APIs are running.
            </p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* PAGE HEADER */}

        <div>
          <h1 className="text-5xl font-black text-gray-900">
            CEO Command Center
          </h1>

          <p className="mt-3 text-gray-500 text-lg">
            Real-time monitoring of dealers,
            inventory, wallets, logistics,
            repairs and revenue.
          </p>
        </div>

        {/* KPI SECTION */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-gray-500">
              Revenue
            </h3>

            <p className="text-4xl font-black mt-4">
              ₹{data?.revenue ?? 0}
            </p>

            <p className="text-green-600 mt-2">
              Revenue Generated
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-gray-500">
              Orders
            </h3>

            <p className="text-4xl font-black mt-4">
              {data?.orders ?? 0}
            </p>

            <p className="text-green-600 mt-2">
              Active Orders
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-gray-500">
              Dealers
            </h3>

            <p className="text-4xl font-black mt-4">
              {data?.dealers ?? 0}
            </p>

            <p className="text-green-600 mt-2">
              Approved Dealers
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-gray-500">
              Repairs
            </h3>

            <p className="text-4xl font-black mt-4">
              {data?.repairs ?? 0}
            </p>

            <p className="text-red-500 mt-2">
              Pending Repairs
            </p>
          </div>

        </div>

        {/* AI SECTION */}

        <div
          className="
          rounded-3xl
          p-10
          bg-gradient-to-r
          from-yellow-400
          to-yellow-500
          shadow-lg
          "
        >
          <h2 className="text-4xl font-black text-black">
            AI Commerce Intelligence
          </h2>

          <p className="mt-4 max-w-3xl text-black">
            Monitor dealer growth,
            inventory movement,
            wallet activity,
            logistics,
            repair operations,
            subscriptions and revenue
            from a single command center.
          </p>

          <div className="mt-8 flex gap-4">

            <button
              className="
              bg-black
              text-white
              px-6
              py-3
              rounded-xl
              hover:opacity-90
              "
            >
              View Analytics
            </button>

            <button
              className="
              bg-white
              text-black
              px-6
              py-3
              rounded-xl
              hover:bg-gray-100
              "
            >
              Export Reports
            </button>

          </div>
        </div>

        {/* ANALYTICS PLACEHOLDERS */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl p-8 border border-gray-100 min-h-[350px] shadow-sm">
            <h2 className="text-2xl font-bold">
              Revenue Analytics
            </h2>

            <p className="text-gray-500 mt-2">
              Revenue chart integration coming next.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 min-h-[350px] shadow-sm">
            <h2 className="text-2xl font-bold">
              Recent Orders
            </h2>

            <p className="text-gray-500 mt-2">
              Orders table integration coming next.
            </p>
          </div>

        </div>

      </div>
    </AdminLayout>
  );
}