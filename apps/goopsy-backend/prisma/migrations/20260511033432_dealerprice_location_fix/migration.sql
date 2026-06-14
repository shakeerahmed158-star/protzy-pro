/*
  Warnings:

  - You are about to drop the column `city` on the `DealerPrice` table. All the data in the column will be lost.
  - Added the required column `location` to the `DealerPrice` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `condition` on the `DealerPrice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "DealerPrice_model_condition_idx";

-- AlterTable
ALTER TABLE "DealerPrice" DROP COLUMN "city",
ADD COLUMN     "location" TEXT NOT NULL,
DROP COLUMN "condition",
ADD COLUMN     "condition" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "DealerPrice_model_condition_location_idx" ON "DealerPrice"("model", "condition", "location");
