"use client";

import AdminLayout from "@/components/layout/AdminLayout";
import {
  useInventory,
  useDeleteInventory,
} from "@/hooks/useInventory";

export default function InventoryPage() {
  const {
    data = [],
    isLoading,
  } = useInventory();

  const deleteInventory =
    useDeleteInventory();

  if (isLoading) {
    return (
      <AdminLayout>
        Loading Inventory...
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>

      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-black">
            Inventory Center
          </h1>

          <p className="mt-3 text-gray-500">
            Manage dealer inventory.
          </p>
        </div>

        <div
          className="
          bg-gradient-to-r
          from-yellow-400
          to-yellow-500
          rounded-3xl
          p-8
          "
        >
          <h2 className="text-3xl font-black">
            Total Inventory
          </h2>

          <div className="text-5xl font-black mt-3">
            {data.length}
          </div>
        </div>

        <div
          className="
          bg-white
          rounded-3xl
          border
          border-gray-100
          "
        >

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-5 text-left">
                  Brand
                </th>

                <th className="p-5 text-left">
                  Model
                </th>

                <th className="p-5 text-left">
                  Price
                </th>

                <th className="p-5 text-left">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {data.map((item: any) => (
                <tr
                  key={item.id}
                  className="border-b"
                >
                  <td className="p-5">
                    {item.brand}
                  </td>

                  <td className="p-5">
                    {item.model}
                  </td>

                  <td className="p-5">
                    ₹{item.price}
                  </td>

                  <td className="p-5">

                    <button
                      onClick={() =>
                        deleteInventory.mutate(
                          item.id
                        )
                      }
                      className="
                      bg-red-500
                      text-white
                      px-4
                      py-2
                      rounded-xl
                      "
                    >
                      Delete
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