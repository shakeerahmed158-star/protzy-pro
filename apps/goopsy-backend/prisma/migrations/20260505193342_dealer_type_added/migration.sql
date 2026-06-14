/*
  Warnings:

  - Added the required column `type` to the `Dealer` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `Dealer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'ASSIGNED', 'CONFIRMED', 'REJECTED', 'CLOSED');

-- CreateEnum
CREATE TYPE "DealerType" AS ENUM ('BUY', 'SELL', 'REPAIR');

-- DropForeignKey
ALTER TABLE "Dealer" DROP CONSTRAINT "Dealer_userId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_deviceId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "PriceAgeMultiplier" DROP CONSTRAINT "PriceAgeMultiplier_priceDeviceId_fkey";

-- DropForeignKey
ALTER TABLE "PriceCondition" DROP CONSTRAINT "PriceCondition_priceDeviceId_fkey";

-- AlterTable
ALTER TABLE "Dealer" ADD COLUMN     "type" "DealerType" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Lead" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "expectedPrice" DOUBLE PRECISION,
    "status" "LeadStatus" NOT NULL DEFAULT 'NEW',
    "dealerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DealerPrice" (
    "id" TEXT NOT NULL,
    "dealerId" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DealerPrice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Lead_model_condition_location_idx" ON "Lead"("model", "condition", "location");

-- CreateIndex
CREATE INDEX "DealerPrice_model_condition_location_idx" ON "DealerPrice"("model", "condition", "location");

-- AddForeignKey
ALTER TABLE "Dealer" ADD CONSTRAINT "Dealer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DealerPrice" ADD CONSTRAINT "DealerPrice_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceCondition" ADD CONSTRAINT "PriceCondition_priceDeviceId_fkey" FOREIGN KEY ("priceDeviceId") REFERENCES "PriceDevice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceAgeMultiplier" ADD CONSTRAINT "PriceAgeMultiplier_priceDeviceId_fkey" FOREIGN KEY ("priceDeviceId") REFERENCES "PriceDevice"("id") ON DELETE CASCADE ON UPDATE CASCADE;
