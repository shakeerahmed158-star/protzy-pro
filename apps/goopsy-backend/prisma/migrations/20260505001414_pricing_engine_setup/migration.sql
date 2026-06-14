-- CreateTable
CREATE TABLE "PriceDevice" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "storage" TEXT NOT NULL,
    "basePrice" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

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
CREATE UNIQUE INDEX "PriceCondition_priceDeviceId_key" ON "PriceCondition"("priceDeviceId");

-- CreateIndex
CREATE UNIQUE INDEX "PriceAgeMultiplier_priceDeviceId_key" ON "PriceAgeMultiplier"("priceDeviceId");

-- AddForeignKey
ALTER TABLE "PriceCondition" ADD CONSTRAINT "PriceCondition_priceDeviceId_fkey" FOREIGN KEY ("priceDeviceId") REFERENCES "PriceDevice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PriceAgeMultiplier" ADD CONSTRAINT "PriceAgeMultiplier_priceDeviceId_fkey" FOREIGN KEY ("priceDeviceId") REFERENCES "PriceDevice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
