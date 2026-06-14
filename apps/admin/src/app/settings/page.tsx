"use client";

import AdminLayout from "@/components/layout/AdminLayout";

export default function SettingsPage() {
  return (
    <AdminLayout>

      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-black">
            Platform Settings
          </h1>

          <p className="mt-3 text-gray-500">
            Configure global platform settings.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl p-8 border">
            <h2 className="text-2xl font-bold">
              Commission Settings
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 border">
            <h2 className="text-2xl font-bold">
              Wallet Settings
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 border">
            <h2 className="text-2xl font-bold">
              Dealer Settings
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 border">
            <h2 className="text-2xl font-bold">
              AI Settings
            </h2>
          </div>

        </div>

      </div>

    </AdminLayout>
  );
}