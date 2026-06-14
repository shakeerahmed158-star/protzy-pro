"use client";

import AdminLayout from "@/components/layout/AdminLayout";

export default function AICenterPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-black">
            AI Command Center
          </h1>

          <p className="mt-3 text-gray-500">
            Central intelligence engine powering GOOPSY.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-8 border">
            <h2 className="text-2xl font-bold">
              Dealer Intelligence
            </h2>

            <p className="mt-3 text-gray-500">
              Detect top performing dealers.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border">
            <h2 className="text-2xl font-bold">
              Inventory Intelligence
            </h2>

            <p className="mt-3 text-gray-500">
              Track inventory trends.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border">
            <h2 className="text-2xl font-bold">
              Revenue Intelligence
            </h2>

            <p className="mt-3 text-gray-500">
              Forecast platform growth.
            </p>
          </div>

        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-10">

          <h2 className="text-4xl font-black">
            GOOPSY AI Engine
          </h2>

          <p className="mt-4">
            Future autonomous engine for pricing,
            matching, fraud detection, repair prediction,
            dealer ranking and growth automation.
          </p>

        </div>

      </div>
    </AdminLayout>
  );
}