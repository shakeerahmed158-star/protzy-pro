/*
  Warnings:

  - You are about to drop the column `name` on the `BuyOrder` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `BuyOrder` table. All the data in the column will be lost.
  - You are about to drop the column `source` on the `BuyOrder` table. All the data in the column will be lost.
  - Added the required column `customerName` to the `BuyOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerPhone` to the `BuyOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BuyOrder" DROP COLUMN "name",
DROP COLUMN "phone",
DROP COLUMN "source",
ADD COLUMN     "assignedDealerId" TEXT,
ADD COLUMN     "customerName" TEXT NOT NULL,
ADD COLUMN     "customerPhone" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "BuyOrder" ADD CONSTRAINT "BuyOrder_assignedDealerId_fkey" FOREIGN KEY ("assignedDealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
