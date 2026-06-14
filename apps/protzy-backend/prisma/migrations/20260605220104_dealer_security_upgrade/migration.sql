/*
  Warnings:

  - A unique constraint covering the columns `[dealerCode]` on the table `Dealer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Dealer" ADD COLUMN     "aadhaarNumber" TEXT,
ADD COLUMN     "dealerCode" TEXT,
ADD COLUMN     "kycVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "panNumber" TEXT,
ADD COLUMN     "passwordHash" TEXT,
ADD COLUMN     "profilePhoto" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Dealer_dealerCode_key" ON "Dealer"("dealerCode");
