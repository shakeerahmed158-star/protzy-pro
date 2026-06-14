/*
  Warnings:

  - You are about to drop the column `location` on the `DealerPrice` table. All the data in the column will be lost.
  - The `status` column on the `Inventory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `location` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `dealerEarning` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `platformFee` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `estimatedPrice` on the `RepairLead` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `RepairLead` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `RepairLead` table. All the data in the column will be lost.
  - The `status` column on the `RepairLead` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `dealerEarning` on the `RepairOrder` table. All the data in the column will be lost.
  - You are about to drop the column `platformFee` on the `RepairOrder` table. All the data in the column will be lost.
  - You are about to drop the column `dealerEarning` on the `SellOrder` table. All the data in the column will be lost.
  - You are about to drop the column `platformFee` on the `SellOrder` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[repairLeadId]` on the table `RepairOrder` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `condition` on the `DealerPrice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `condition` on the `Inventory` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `condition` on the `Lead` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `customerId` to the `RepairLead` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `WalletTransaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SellStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'SOLD');

-- CreateEnum
CREATE TYPE "RepairStatus" AS ENUM ('PENDING', 'ASSIGNED', 'INSPECTION', 'REPAIRING', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "InventoryStatus" AS ENUM ('ACTIVE', 'SOLD', 'RESERVED', 'HIDDEN');

-- CreateEnum
CREATE TYPE "WalletTransactionType" AS ENUM ('CREDIT', 'DEBIT', 'RECHARGE', 'LEAD_PURCHASE', 'REFUND');

-- AlterEnum
ALTER TYPE "OrderStatus" ADD VALUE 'COMPLETED';

-- DropForeignKey
ALTER TABLE "RepairLead" DROP CONSTRAINT "RepairLead_userId_fkey";

-- DropIndex
DROP INDEX "DealerPrice_model_condition_location_idx";

-- DropIndex
DROP INDEX "Lead_model_condition_location_idx";

-- AlterTable
ALTER TABLE "Dealer" ADD COLUMN     "area" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "pincode" TEXT;

-- AlterTable
ALTER TABLE "DealerPrice" DROP COLUMN "location",
ADD COLUMN     "city" TEXT,
DROP COLUMN "condition",
ADD COLUMN     "condition" "DeviceCondition" NOT NULL;

-- AlterTable
ALTER TABLE "Device" ADD COLUMN     "storage" TEXT;

-- AlterTable
ALTER TABLE "Inventory" ALTER COLUMN "ram" DROP NOT NULL,
ALTER COLUMN "color" DROP NOT NULL,
DROP COLUMN "condition",
ADD COLUMN     "condition" "DeviceCondition" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "InventoryStatus" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "location",
ADD COLUMN     "area" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "pincode" TEXT,
DROP COLUMN "condition",
ADD COLUMN     "condition" "DeviceCondition" NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "dealerEarning",
DROP COLUMN "platformFee",
ADD COLUMN     "leadFee" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "PriceDevice" ADD COLUMN     "platformFee" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "RepairLead" DROP COLUMN "estimatedPrice",
DROP COLUMN "location",
DROP COLUMN "userId",
ADD COLUMN     "area" TEXT,
ADD COLUMN     "assignedTo" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "customerId" TEXT NOT NULL,
ADD COLUMN     "estimatedCost" DOUBLE PRECISION,
ADD COLUMN     "finalCost" DOUBLE PRECISION,
DROP COLUMN "status",
ADD COLUMN     "status" "RepairStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "RepairOrder" DROP COLUMN "dealerEarning",
DROP COLUMN "platformFee",
ADD COLUMN     "leadFee" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SellOrder" DROP COLUMN "dealerEarning",
DROP COLUMN "platformFee",
ADD COLUMN     "leadFee" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "WalletTransaction" DROP COLUMN "type",
ADD COLUMN     "type" "WalletTransactionType" NOT NULL;

-- CreateTable
CREATE TABLE "LeadTransaction" (
    "id" TEXT NOT NULL,
    "dealerId" TEXT NOT NULL,
    "leadType" TEXT NOT NULL,
    "referenceId" TEXT NOT NULL,
    "leadFee" DOUBLE PRECISION NOT NULL,
    "walletBalanceBefore" DOUBLE PRECISION NOT NULL,
    "walletBalanceAfter" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeadTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WalletRecharge" (
    "id" TEXT NOT NULL,
    "dealerId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paymentId" TEXT,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WalletRecharge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeadFeeConfig" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "minAmount" DOUBLE PRECISION NOT NULL,
    "maxAmount" DOUBLE PRECISION NOT NULL,
    "fee" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LeadFeeConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LeadTransaction_dealerId_leadType_idx" ON "LeadTransaction"("dealerId", "leadType");

-- CreateIndex
CREATE INDEX "Dealer_type_idx" ON "Dealer"("type");

-- CreateIndex
CREATE INDEX "Dealer_city_area_idx" ON "Dealer"("city", "area");

-- CreateIndex
CREATE INDEX "DealerPrice_model_condition_idx" ON "DealerPrice"("model", "condition");

-- CreateIndex
CREATE INDEX "Device_brand_model_idx" ON "Device"("brand", "model");

-- CreateIndex
CREATE INDEX "Inventory_brand_model_idx" ON "Inventory"("brand", "model");

-- CreateIndex
CREATE INDEX "Inventory_status_idx" ON "Inventory"("status");

-- CreateIndex
CREATE INDEX "Lead_brand_model_idx" ON "Lead"("brand", "model");

-- CreateIndex
CREATE INDEX "Lead_status_idx" ON "Lead"("status");

-- CreateIndex
CREATE INDEX "Lead_city_area_idx" ON "Lead"("city", "area");

-- CreateIndex
CREATE INDEX "Order_status_idx" ON "Order"("status");

-- CreateIndex
CREATE INDEX "PriceDevice_brand_model_idx" ON "PriceDevice"("brand", "model");

-- CreateIndex
CREATE INDEX "RepairLead_status_idx" ON "RepairLead"("status");

-- CreateIndex
CREATE INDEX "RepairLead_city_area_idx" ON "RepairLead"("city", "area");

-- CreateIndex
CREATE UNIQUE INDEX "RepairOrder_repairLeadId_key" ON "RepairOrder"("repairLeadId");

-- CreateIndex
CREATE INDEX "RepairOrder_status_idx" ON "RepairOrder"("status");

-- CreateIndex
CREATE INDEX "SellOrder_status_idx" ON "SellOrder"("status");

-- CreateIndex
CREATE INDEX "User_phone_idx" ON "User"("phone");

-- CreateIndex
CREATE INDEX "WalletTransaction_type_idx" ON "WalletTransaction"("type");

-- AddForeignKey
ALTER TABLE "RepairLead" ADD CONSTRAINT "RepairLead_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadTransaction" ADD CONSTRAINT "LeadTransaction_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletRecharge" ADD CONSTRAINT "WalletRecharge_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
