/*
  Warnings:

  - You are about to drop the column `leadFee` on the `Order` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Order_status_idx";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "leadFee",
ADD COLUMN     "dealerEarning" DOUBLE PRECISION,
ADD COLUMN     "platformFee" DOUBLE PRECISION;
