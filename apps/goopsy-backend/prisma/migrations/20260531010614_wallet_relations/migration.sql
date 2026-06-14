/*
  Warnings:

  - A unique constraint covering the columns `[dealerId]` on the table `Wallet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `type` to the `Dealer` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'ASSIGNED', 'ACCEPTED', 'REJECTED', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "RepairStatus" AS ENUM ('PENDING', 'ASSIGNED', 'ACCEPTED', 'IN_PROGRESS', 'OUT_FOR_DELIVERY', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'ASSIGNED', 'ACCEPTED', 'REJECTED', 'CONFIRMED', 'PICKED', 'IN_TRANSIT', 'OUT_FOR_DELIVERY', 'DELIVERED', 'COMPLETED', 'CANCELLED');

-- AlterEnum
ALTER TYPE "WorkflowStatus" ADD VALUE 'IN_PROGRESS';

-- DropForeignKey
ALTER TABLE "Commission" DROP CONSTRAINT "Commission_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "DealerService" DROP CONSTRAINT "DealerService_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "DealerSubscription" DROP CONSTRAINT "DealerSubscription_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "Technician" DROP CONSTRAINT "Technician_dealerId_fkey";

-- AlterTable
ALTER TABLE "Commission" ALTER COLUMN "dealerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Dealer" ADD COLUMN     "type" "DealerType" NOT NULL,
ADD COLUMN     "walletBalance" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "DealerService" ALTER COLUMN "dealerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "DealerSubscription" ALTER COLUMN "dealerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Inventory" ALTER COLUMN "dealerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Match" ALTER COLUMN "dealerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "dealerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Technician" ALTER COLUMN "dealerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Wallet" ADD COLUMN     "dealerId" TEXT,
ADD COLUMN     "isBlocked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "totalCredited" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "totalDebited" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "WalletTransaction" ADD COLUMN     "referenceId" TEXT;

-- CreateTable
CREATE TABLE "BuyOrder" (
    "id" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "storage" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "expectedPrice" DOUBLE PRECISION NOT NULL,
    "finalPrice" DOUBLE PRECISION,
    "dealerEarning" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "platformFee" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" "WorkflowStatus" NOT NULL DEFAULT 'PENDING',
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "deliveryOtp" TEXT,
    "otpVerified" BOOLEAN NOT NULL DEFAULT false,
    "deliveredAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "assignedDealerId" TEXT,
    "deviceId" TEXT,

    CONSTRAINT "BuyOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WalletRecharge" (
    "id" TEXT NOT NULL,
    "dealerId" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "paymentId" TEXT,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WalletRecharge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeadTransaction" (
    "id" TEXT NOT NULL,
    "dealerId" TEXT,
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
CREATE TABLE "PriceDevice" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "storage" TEXT NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "platformFee" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PriceDevice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceCondition" (
    "id" TEXT NOT NULL,
    "priceDeviceId" TEXT NOT NULL,
    "basicDeduction" DOUBLE PRECISION NOT NULL,
    "screenDeduction" DOUBLE PRECISION NOT NULL,
    "bodyDeduction" DOUBLE PRECISION NOT NULL,
    "functionDeduction" DOUBLE PRECISION NOT NULL,
    "accessoriesDeduction" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PriceCondition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceAgeMultiplier" (
    "id" TEXT NOT NULL,
    "priceDeviceId" TEXT NOT NULL,
    "below3M" DOUBLE PRECISION NOT NULL,
    "m3to6" DOUBLE PRECISION NOT NULL,
    "m6to11" DOUBLE PRECISION NOT NULL,
    "above11" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PriceAgeMultiplier_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BuyOrder_status_idx" ON "BuyOrder"("status");

-- CreateIndex
CREATE INDEX "BuyOrder_assignedDealerId_idx" ON "BuyOrder"("assignedDealerId");

-- CreateIndex
CREATE INDEX "BuyOrder_brand_model_idx" ON "BuyOrder"("brand", "model");

-- CreateIndex
CREATE INDEX "WalletRecharge_dealerId_idx" ON "WalletRecharge"("dealerId");

-- CreateIndex
CREATE INDEX "LeadTransaction_dealerId_idx" ON "LeadTransaction"("dealerId");

-- CreateIndex
CREATE INDEX "PriceDevice_brand_model_idx" ON "PriceDevice"("brand", "model");

-- CreateIndex
CREATE UNIQUE INDEX "PriceDevice_model_storage_key" ON "PriceDevice"("model", "storage");

-- CreateIndex
CREATE UNIQUE INDEX "PriceCondition_priceDeviceId_key" ON "PriceCondition"("priceDeviceId");

-- CreateIndex
CREATE UNIQUE INDEX "PriceAgeMultiplier_priceDeviceId_key" ON "PriceAgeMultiplier"("priceDeviceId");

-- CreateIndex
CREATE INDEX "Dealer_type_idx" ON "Dealer"("type");

-- CreateIndex
CREATE INDEX "Dealer_status_idx" ON "Dealer"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_dealerId_key" ON "Wallet"("dealerId");

-- CreateIndex
CREATE INDEX "Wallet_userId_idx" ON "Wallet"("userId");

-- CreateIndex
CREATE INDEX "WalletTransaction_walletId_idx" ON "WalletTransaction"("walletId");

-- CreateIndex
CREATE INDEX "WalletTransaction_dealerId_idx" ON "WalletTransaction"("dealerId");

-- CreateIndex
CREATE INDEX "WalletTransaction_createdAt_idx" ON "WalletTransaction"("createdAt");

-- AddForeignKey
ALTER TABLE "DealerService" ADD CONSTRAINT "DealerService_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Technician" ADD CONSTRAINT "Technician_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuyOrder" ADD CONSTRAINT "BuyOrder_assignedDealerId_fkey" FOREIGN KEY ("assignedDealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuyOrder" ADD CONSTRAINT "BuyOrder_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "PriceDevice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletRecharge" ADD CONSTRAINT "WalletRecharge_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeadTransaction" ADD CONSTRAINT "LeadTransaction_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commission" ADD CONSTRAINT "Commission_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DealerSubscription" ADD CONSTRAINT "DealerSubscription_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceCondition" ADD CONSTRAINT "PriceCondition_priceDeviceId_fkey" FOREIGN KEY ("priceDeviceId") REFERENCES "PriceDevice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceAgeMultiplier" ADD CONSTRAINT "PriceAgeMultiplier_priceDeviceId_fkey" FOREIGN KEY ("priceDeviceId") REFERENCES "PriceDevice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
