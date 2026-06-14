-- CreateEnum
CREATE TYPE "DeviceCondition" AS ENUM ('NEW', 'LIKE_NEW', 'GOOD', 'DAMAGED');

-- CreateTable
CREATE TABLE "Device" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "condition" "DeviceCondition" NOT NULL,
    "dealerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
