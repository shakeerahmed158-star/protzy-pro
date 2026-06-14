/*
  Warnings:

  - A unique constraint covering the columns `[model,storage]` on the table `PriceDevice` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "customerPrice" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "dealerPrice" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "margin" DOUBLE PRECISION DEFAULT 0,
ALTER COLUMN "expectedPrice" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "PriceDevice_model_storage_key" ON "PriceDevice"("model", "storage");
