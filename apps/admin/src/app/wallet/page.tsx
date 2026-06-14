"use client";

import AdminLayout from "@/components/layout/AdminLayout";

import {
  useWallet,
  useTransactions,
} from "@/hooks/useWallet";

export default function WalletPage() {
  const { data: wallet } =
    useWallet();

  const {
    data: transactions = [],
  } = useTransactions();

  return (
    <AdminLayout>

      <div className="space-y-8">

        <div>
          <h1 className="text-5xl font-black">
            Wallet Center
          </h1>

          <p className="mt-3 text-gray-500">
            Dealer fund management
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
            Wallet Balance
          </h2>

          <div className="text-5xl font-black mt-4">
            ₹{wallet?.balance || 0}
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
                  Amount
                </th>

                <th className="p-5 text-left">
                  Type
                </th>

                <th className="p-5 text-left">
                  Date
                </th>

              </tr>

            </thead>

            <tbody>

              {transactions.map(
                (transaction: any) => (
                  <tr
                    key={transaction.id}
                    className="border-b"
                  >
                    <td className="p-5">
                      ₹{transaction.amount}
                    </td>

                    <td className="p-5">
                      {transaction.type}
                    </td>

                    <td className="p-5">
                      {transaction.createdAt}
                    </td>
                  </tr>
                )
              )}

            </tbody>

          </table>
        </div>

      </div>

    </AdminLayout>
  );
}