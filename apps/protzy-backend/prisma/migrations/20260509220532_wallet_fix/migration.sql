/*
  Warnings:

  - You are about to drop the column `dealerId` on the `Wallet` table. All the data in the column will be lost.
  - You are about to drop the column `isBlocked` on the `Wallet` table. All the data in the column will be lost.
  - You are about to drop the column `totalCredit` on the `Wallet` table. All the data in the column will be lost.
  - You are about to drop the column `totalDebit` on the `Wallet` table. All the data in the column will be lost.
  - You are about to drop the column `dealerId` on the `WalletTransaction` table. All the data in the column will be lost.
  - You are about to drop the column `note` on the `WalletTransaction` table. All the data in the column will be lost.
  - You are about to drop the column `referenceId` on the `WalletTransaction` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `WalletTransaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Wallet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Wallet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Wallet" DROP CONSTRAINT "Wallet_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "WalletTransaction" DROP CONSTRAINT "WalletTransaction_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "WalletTransaction" DROP CONSTRAINT "WalletTransaction_walletId_fkey";

-- DropIndex
DROP INDEX "Wallet_dealerId_key";

-- AlterTable
ALTER TABLE "Wallet" DROP COLUMN "dealerId",
DROP COLUMN "isBlocked",
DROP COLUMN "totalCredit",
DROP COLUMN "totalDebit",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WalletTransaction" DROP COLUMN "dealerId",
DROP COLUMN "note",
DROP COLUMN "referenceId",
DROP COLUMN "status",
ADD COLUMN     "description" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_userId_key" ON "Wallet"("userId");

-- AddForeignKey
ALTER TABLE "Wallet" ADD CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletTransaction" ADD CONSTRAINT "WalletTransaction_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
