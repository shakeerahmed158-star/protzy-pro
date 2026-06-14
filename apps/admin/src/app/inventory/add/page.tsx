"use client";

import { useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import { useAddInventory } from "@/hooks/useInventory";

export default function AddInventoryPage() {
  const addInventory = useAddInventory();

  const [form, setForm] = useState({
    brand: "",
    model: "",
    price: "",
  });

  const handleSubmit = () => {
    addInventory.mutate({
      brand: form.brand,
      model: form.model,
      price: Number(form.price),
    });
  };

  return (
    <AdminLayout>
      <div className="max-w-2xl">

        <h1 className="text-5xl font-black mb-8">
          Add Inventory
        </h1>

        <div className="bg-white rounded-3xl p-8 border border-gray-100">

          <input
            placeholder="Brand"
            value={form.brand}
            onChange={(e) =>
              setForm({
                ...form,
                brand: e.target.value,
              })
            }
            className="w-full border p-4 rounded-xl mb-4"
          />

          <input
            placeholder="Model"
            value={form.model}
            onChange={(e) =>
              setForm({
                ...form,
                model: e.target.value,
              })
            }
            className="w-full border p-4 rounded-xl mb-4"
          />

          <input
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              })
            }
            className="w-full border p-4 rounded-xl mb-6"
          />

          <button
            onClick={handleSubmit}
            className="
            bg-yellow-500
            px-6
            py-3
            rounded-xl
            font-semibold
            "
          >
            Add Inventory
          </button>

        </div>
      </div>
    </AdminLayout>
  );
}