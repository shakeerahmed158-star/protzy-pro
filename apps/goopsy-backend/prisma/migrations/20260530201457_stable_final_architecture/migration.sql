/*
  Warnings:

  - The values [SOLD,RESERVED,HIDDEN] on the enum `InventoryStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `type` on the `Dealer` table. All the data in the column will be lost.
  - You are about to drop the column `batteryHealth` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `brand` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `condition` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `imei` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `margin` on the `Lead` table. All the data in the column will be lost.
  - The `status` column on the `Lead` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `deviceId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Order` table. All the data in the column will be lost.
  - The `status` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `assignedTo` on the `RepairLead` table. All the data in the column will be lost.
  - The `status` column on the `RepairLead` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `BuyOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChatMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChatRoom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DealerPrice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Device` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LeadFeeConfig` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LeadTransaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PriceAgeMultiplier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PriceCondition` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PriceDevice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RepairOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SellOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WalletRecharge` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `productId` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('CUSTOMER', 'BUY_DEALER', 'SELL_RETAILER', 'REPAIR_VENDOR', 'ADMIN', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('MOBILE', 'LAPTOP', 'TABLET', 'TV', 'ACCESSORY', 'APPLIANCE', 'SMART_DEVICE');

-- CreateEnum
CREATE TYPE "WorkflowStatus" AS ENUM ('PENDING', 'ASSIGNED', 'ACCEPTED', 'REJECTED', 'CONFIRMED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('SELL', 'BUY', 'REPAIR');

-- CreateEnum
CREATE TYPE "CommissionStatus" AS ENUM ('PENDING', 'PAID', 'FAILED');

-- CreateEnum
CREATE TYPE "CommissionType" AS ENUM ('SELL_LEAD', 'PRODUCT_SALE', 'REPAIR_LEAD', 'BONUS');

-- CreateEnum
CREATE TYPE "UploadType" AS ENUM ('PROFILE', 'DEVICE', 'KYC', 'INVOICE', 'REPAIR', 'INSPECTION', 'CHAT');

-- CreateEnum
CREATE TYPE "UploadStatus" AS ENUM ('PENDING', 'UPLOADED', 'FAILED', 'DELETED');

-- CreateEnum
CREATE TYPE "DeviceGrade" AS ENUM ('A_PLUS', 'A', 'B_PLUS', 'B', 'C', 'D');

-- CreateEnum
CREATE TYPE "InspectionStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'REJECTED');

-- CreateEnum
CREATE TYPE "GeoType" AS ENUM ('CITY', 'AREA', 'PINCODE', 'STATE');

-- CreateEnum
CREATE TYPE "FraudStatus" AS ENUM ('OPEN', 'INVESTIGATING', 'BLOCKED', 'RESOLVED');

-- CreateEnum
CREATE TYPE "CrmTicketStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED');

-- CreateEnum
CREATE TYPE "CrmPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "AuditAction" AS ENUM ('CREATE', 'UPDATE', 'DELETE', 'LOGIN', 'LOGOUT', 'APPROVE', 'REJECT', 'BLOCK');

-- CreateEnum
CREATE TYPE "SearchType" AS ENUM ('PRODUCT', 'DEALER', 'CATEGORY', 'BRAND');

-- CreateEnum
CREATE TYPE "QueueStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "QueueType" AS ENUM ('NOTIFICATION', 'EMAIL', 'SMS', 'PAYMENT', 'LEAD', 'INSPECTION');

-- AlterEnum
ALTER TYPE "DealerStatus" ADD VALUE 'BLOCKED';

-- AlterEnum
BEGIN;
CREATE TYPE "InventoryStatus_new" AS ENUM ('ACTIVE', 'OUT_OF_STOCK', 'INACTIVE');
ALTER TABLE "Inventory" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Inventory" ALTER COLUMN "status" TYPE "InventoryStatus_new" USING ("status"::text::"InventoryStatus_new");
ALTER TYPE "InventoryStatus" RENAME TO "InventoryStatus_old";
ALTER TYPE "InventoryStatus_new" RENAME TO "InventoryStatus";
DROP TYPE "InventoryStatus_old";
ALTER TABLE "Inventory" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
COMMIT;

-- AlterEnum
ALTER TYPE "WalletTransactionType" ADD VALUE 'COMMISSION';

-- DropForeignKey
ALTER TABLE "BuyOrder" DROP CONSTRAINT "BuyOrder_assignedDealerId_fkey";

-- DropForeignKey
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_roomId_fkey";

-- DropForeignKey
ALTER TABLE "ChatMessage" DROP CONSTRAINT "ChatMessage_senderId_fkey";

-- DropForeignKey
ALTER TABLE "ChatRoom" DROP CONSTRAINT "ChatRoom_customerId_fkey";

-- DropForeignKey
ALTER TABLE "ChatRoom" DROP CONSTRAINT "ChatRoom_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "DealerPrice" DROP CONSTRAINT "DealerPrice_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "LeadTransaction" DROP CONSTRAINT "LeadTransaction_dealerId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_deviceId_fkey";

-- DropForeignKey
ALTER TABLE "PriceAgeMultiplier" DROP CONSTRAINT "PriceAgeMultiplier_priceDeviceId_fkey";

-- DropForeignKey
ALTER TABLE "PriceCondition" DROP CONSTRAINT "PriceCondition_priceDeviceId_fkey";

-- DropForeignKey
ALTER TABLE "RepairOrder" DROP CONSTRAINT "RepairOrder_repairLeadId_fkey";

-- DropForeignKey
ALTER TABLE "SellOrder" DROP CONSTRAINT "SellOrder_leadId_fkey";

-- DropForeignKey
ALTER TABLE "WalletRecharge" DROP CONSTRAINT "WalletRecharge_dealerId_fkey";

-- DropIndex
DROP INDEX "Dealer_type_idx";

-- DropIndex
DROP INDEX "Inventory_brand_model_idx";

-- AlterTable
ALTER TABLE "Dealer" DROP COLUMN "type",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "totalEarnings" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "batteryHealth",
DROP COLUMN "brand",
DROP COLUMN "condition",
DROP COLUMN "imei",
DROP COLUMN "model",
DROP COLUMN "type",
ADD COLUMN     "commissionPercent" DOUBLE PRECISION NOT NULL DEFAULT 5,
ADD COLUMN     "offerPrice" DOUBLE PRECISION,
ADD COLUMN     "productId" TEXT NOT NULL,
ADD COLUMN     "stock" INTEGER NOT NULL DEFAULT 1,
ALTER COLUMN "storage" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "margin",
ADD COLUMN     "platformMargin" DOUBLE PRECISION,
ALTER COLUMN "expectedPrice" DROP DEFAULT,
DROP COLUMN "status",
ADD COLUMN     "status" "WorkflowStatus" NOT NULL DEFAULT 'PENDING',
ALTER COLUMN "customerPrice" DROP DEFAULT,
ALTER COLUMN "dealerPrice" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "deviceId",
DROP COLUMN "price",
ADD COLUMN     "deliveryOtp" TEXT,
ADD COLUMN     "otpVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "paymentMethod" "PaymentMethod",
ADD COLUMN     "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "productId" TEXT,
ADD COLUMN     "repairLeadId" TEXT,
ADD COLUMN     "totalAmount" DOUBLE PRECISION,
ADD COLUMN     "type" "OrderType" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "WorkflowStatus" NOT NULL DEFAULT 'PENDING',
ALTER COLUMN "leadId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RepairLead" DROP COLUMN "assignedTo",
ADD COLUMN     "technicianId" TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" "WorkflowStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isBlocked" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "role",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'CUSTOMER';

-- AlterTable
ALTER TABLE "WalletTransaction" ADD COLUMN     "dealerId" TEXT;

-- DropTable
DROP TABLE "BuyOrder";

-- DropTable
DROP TABLE "ChatMessage";

-- DropTable
DROP TABLE "ChatRoom";

-- DropTable
DROP TABLE "DealerPrice";

-- DropTable
DROP TABLE "Device";

-- DropTable
DROP TABLE "LeadFeeConfig";

-- DropTable
DROP TABLE "LeadTransaction";

-- DropTable
DROP TABLE "PriceAgeMultiplier";

-- DropTable
DROP TABLE "PriceCondition";

-- DropTable
DROP TABLE "PriceDevice";

-- DropTable
DROP TABLE "RepairOrder";

-- DropTable
DROP TABLE "SellOrder";

-- DropTable
DROP TABLE "WalletRecharge";

-- DropEnum
DROP TYPE "LeadStatus";

-- DropEnum
DROP TYPE "OrderStatus";

-- DropEnum
DROP TYPE "RepairStatus";

-- DropEnum
DROP TYPE "SellStatus";

-- CreateTable
CREATE TABLE "DealerService" (
    "id" TEXT NOT NULL,
    "dealerId" TEXT NOT NULL,
    "type" "DealerType" NOT NULL,

    CONSTRAINT "DealerService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "slug" TEXT,
    "category" "ProductType" NOT NULL DEFAULT 'MOBILE',
    "description" TEXT,
    "images" TEXT[],
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "warrantyAvailable" BOOLEAN NOT NULL DEFAULT false,
    "emiAvailable" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technician" (
    "id" TEXT NOT NULL,
    "dealerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Technician_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commission" (
    "id" TEXT NOT NULL,
    "dealerId" TEXT NOT NULL,
    "inventoryId" TEXT,
    "orderId" TEXT,
    "type" "CommissionType" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "percentage" DOUBLE PRECISION,
    "status" "CommissionStatus" NOT NULL DEFAULT 'PENDING',
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Commission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "leadId" TEXT,
    "repairLeadId" TEXT,
    "dealerId" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "distance" DOUBLE PRECISION,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "autoAssigned" BOOLEAN NOT NULL DEFAULT false,
    "status" "WorkflowStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Upload" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "dealerId" TEXT,
    "fileName" TEXT NOT NULL,
    "originalName" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "fileSize" DOUBLE PRECISION NOT NULL,
    "url" TEXT NOT NULL,
    "type" "UploadType" NOT NULL,
    "status" "UploadStatus" NOT NULL DEFAULT 'PENDING',
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Upload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inspection" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "dealerId" TEXT,
    "deviceId" TEXT,
    "imei" TEXT,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "grade" "DeviceGrade" NOT NULL,
    "batteryHealth" INTEGER,
    "screenCondition" TEXT,
    "bodyCondition" TEXT,
    "cameraCondition" TEXT,
    "functionalIssues" TEXT,
    "estimatedPrice" DOUBLE PRECISION,
    "finalPrice" DOUBLE PRECISION,
    "inspectorNotes" TEXT,
    "status" "InspectionStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inspection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeoLocation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "type" "GeoType" NOT NULL,
    "state" TEXT,
    "city" TEXT,
    "area" TEXT,
    "pincode" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GeoLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FraudReport" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "dealerId" TEXT,
    "deviceId" TEXT,
    "imei" TEXT,
    "reason" TEXT NOT NULL,
    "description" TEXT,
    "riskScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "status" "FraudStatus" NOT NULL DEFAULT 'OPEN',
    "isBlacklisted" BOOLEAN NOT NULL DEFAULT false,
    "reportedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FraudReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CrmTicket" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "dealerId" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT,
    "priority" "CrmPriority" NOT NULL DEFAULT 'MEDIUM',
    "status" "CrmTicketStatus" NOT NULL DEFAULT 'OPEN',
    "assignedTo" TEXT,
    "resolutionNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CrmTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "module" TEXT NOT NULL,
    "action" "AuditAction" NOT NULL,
    "entityId" TEXT,
    "description" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "keyword" TEXT NOT NULL,
    "type" "SearchType" NOT NULL,
    "city" TEXT,
    "filters" JSONB,
    "resultCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SearchHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QueueJob" (
    "id" TEXT NOT NULL,
    "jobName" TEXT NOT NULL,
    "type" "QueueType" NOT NULL,
    "payload" JSONB,
    "status" "QueueStatus" NOT NULL DEFAULT 'PENDING',
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "errorMessage" TEXT,
    "processedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QueueJob_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DealerService_dealerId_type_key" ON "DealerService"("dealerId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE INDEX "Product_brand_model_idx" ON "Product"("brand", "model");

-- CreateIndex
CREATE INDEX "Product_category_idx" ON "Product"("category");

-- CreateIndex
CREATE INDEX "Commission_dealerId_idx" ON "Commission"("dealerId");

-- CreateIndex
CREATE INDEX "Commission_status_idx" ON "Commission"("status");

-- CreateIndex
CREATE INDEX "Match_dealerId_idx" ON "Match"("dealerId");

-- CreateIndex
CREATE INDEX "Match_status_idx" ON "Match"("status");

-- CreateIndex
CREATE INDEX "Upload_userId_idx" ON "Upload"("userId");

-- CreateIndex
CREATE INDEX "Upload_dealerId_idx" ON "Upload"("dealerId");

-- CreateIndex
CREATE INDEX "Upload_type_idx" ON "Upload"("type");

-- CreateIndex
CREATE INDEX "Inspection_userId_idx" ON "Inspection"("userId");

-- CreateIndex
CREATE INDEX "Inspection_dealerId_idx" ON "Inspection"("dealerId");

-- CreateIndex
CREATE INDEX "Inspection_deviceId_idx" ON "Inspection"("deviceId");

-- CreateIndex
CREATE INDEX "Inspection_grade_idx" ON "Inspection"("grade");

-- CreateIndex
CREATE INDEX "Inspection_status_idx" ON "Inspection"("status");

-- CreateIndex
CREATE UNIQUE INDEX "GeoLocation_slug_key" ON "GeoLocation"("slug");

-- CreateIndex
CREATE INDEX "GeoLocation_city_idx" ON "GeoLocation"("city");

-- CreateIndex
CREATE INDEX "GeoLocation_pincode_idx" ON "GeoLocation"("pincode");

-- CreateIndex
CREATE INDEX "FraudReport_userId_idx" ON "FraudReport"("userId");

-- CreateIndex
CREATE INDEX "FraudReport_dealerId_idx" ON "FraudReport"("dealerId");

-- CreateIndex
CREATE INDEX "FraudReport_deviceId_idx" ON "FraudReport"("deviceId");

-- CreateIndex
CREATE INDEX "FraudReport_imei_idx" ON "FraudReport"("imei");

-- CreateIndex
CREATE INDEX "FraudReport_status_idx" ON "FraudReport"("status");

-- CreateIndex
CREATE INDEX "CrmTicket_userId_idx" ON "CrmTicket"("userId");

-- CreateIndex
CREATE INDEX "CrmTicket_dealerId_idx" ON "CrmTicket"("dealerId");

-- CreateIndex
CREATE INDEX "CrmTicket_status_idx" ON "CrmTicket"("status");

-- CreateIndex
CREATE INDEX "CrmTicket_priority_idx" ON "CrmTicket"("priority");

-- CreateIndex
CREATE INDEX "AuditLog_userId_idx" ON "AuditLog"("userId");

-- CreateIndex
CREATE INDEX "AuditLog_module_idx" ON "AuditLog"("module");

-- CreateIndex
CREATE INDEX "AuditLog_action_idx" ON "AuditLog"("action");

-- CreateIndex
CREATE INDEX "SearchHistory_userId_idx" ON "SearchHistory"("userId");

-- CreateIndex
CREATE INDEX "SearchHistory_keyword_idx" ON "SearchHistory"("keyword");

-- CreateIndex
CREATE INDEX "SearchHistory_type_idx" ON "SearchHistory"("type");

-- CreateIndex
CREATE INDEX "QueueJob_type_idx" ON "QueueJob"("type");

-- CreateIndex
CREATE INDEX "QueueJob_status_idx" ON "QueueJob"("status");

-- CreateIndex
CREATE INDEX "Inventory_dealerId_idx" ON "Inventory"("dealerId");

-- CreateIndex
CREATE INDEX "Inventory_productId_idx" ON "Inventory"("productId");

-- CreateIndex
CREATE INDEX "Lead_status_idx" ON "Lead"("status");

-- CreateIndex
CREATE INDEX "Order_type_idx" ON "Order"("type");

-- CreateIndex
CREATE INDEX "Order_status_idx" ON "Order"("status");

-- CreateIndex
CREATE INDEX "RepairLead_status_idx" ON "RepairLead"("status");

-- AddForeignKey
ALTER TABLE "DealerService" ADD CONSTRAINT "DealerService_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepairLead" ADD CONSTRAINT "RepairLead_technicianId_fkey" FOREIGN KEY ("technicianId") REFERENCES "Technician"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Technician" ADD CONSTRAINT "Technician_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_repairLeadId_fkey" FOREIGN KEY ("repairLeadId") REFERENCES "RepairLead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletTransaction" ADD CONSTRAINT "WalletTransaction_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commission" ADD CONSTRAINT "Commission_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commission" ADD CONSTRAINT "Commission_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_repairLeadId_fkey" FOREIGN KEY ("repairLeadId") REFERENCES "RepairLead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upload" ADD CONSTRAINT "Upload_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upload" ADD CONSTRAINT "Upload_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FraudReport" ADD CONSTRAINT "FraudReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FraudReport" ADD CONSTRAINT "FraudReport_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrmTicket" ADD CONSTRAINT "CrmTicket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrmTicket" ADD CONSTRAINT "CrmTicket_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SearchHistory" ADD CONSTRAINT "SearchHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
