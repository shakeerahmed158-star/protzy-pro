-- CreateTable
CREATE TABLE "Inventory" (
    "id" TEXT NOT NULL,
    "dealerId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "storage" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "finalPrice" DOUBLE PRECISION,
    "batteryHealth" INTEGER,
    "condition" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT,
    "images" TEXT[],
    "imei" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);
