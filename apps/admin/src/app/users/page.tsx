"use client";

import AdminLayout from "@/components/layout/AdminLayout";

export default function UsersPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-black">
            Users Center
          </h1>

          <p className="mt-3 text-gray-500">
            Manage platform users.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-6 border">
            <p>Total Users</p>
            <h2 className="text-4xl font-black mt-2">
              0
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 border">
            <p>Active Users</p>
            <h2 className="text-4xl font-black mt-2 text-green-600">
              0
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 border">
            <p>Blocked Users</p>
            <h2 className="text-4xl font-black mt-2 text-red-600">
              0
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 border">
            <p>KYC Pending</p>
            <h2 className="text-4xl font-black mt-2 text-yellow-500">
              0
            </h2>
          </div>

        </div>

        <div className="bg-white rounded-3xl border p-8">
          User APIs will be connected here.
        </div>

      </div>
    </AdminLayout>
  );
}