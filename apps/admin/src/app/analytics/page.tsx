"use client";

import AdminLayout from "@/components/layout/AdminLayout";
import { useDashboard } from "@/hooks/useDashboard";

export default function AnalyticsPage() {
  const { data } = useDashboard();

  return (
    <AdminLayout>

      <div className="space-y-8">

        <h1 className="text-5xl font-black">
          Analytics Center
        </h1>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white p-8 rounded-3xl">
            <h2 className="font-bold text-2xl">
              Revenue
            </h2>

            <p className="text-4xl mt-4">
              ₹{data?.revenue || 0}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl">
            <h2 className="font-bold text-2xl">
              Dealers
            </h2>

            <p className="text-4xl mt-4">
              {data?.dealers || 0}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl">
            <h2 className="font-bold text-2xl">
              Inventory
            </h2>

            <p className="text-4xl mt-4">
              {data?.inventory || 0}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl">
            <h2 className="font-bold text-2xl">
              Repairs
            </h2>

            <p className="text-4xl mt-4">
              {data?.repairs || 0}
            </p>
          </div>

        </div>

      </div>

    </AdminLayout>
  );
}