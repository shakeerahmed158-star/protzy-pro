/*
  Warnings:

  - You are about to drop the column `description` on the `RepairLead` table. All the data in the column will be lost.
  - You are about to drop the column `expectedPrice` on the `RepairLead` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RepairLead" DROP COLUMN "description",
DROP COLUMN "expectedPrice",
ADD COLUMN     "estimatedPrice" DOUBLE PRECISION;
