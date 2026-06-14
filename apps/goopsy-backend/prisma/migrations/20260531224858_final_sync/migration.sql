/*
  Warnings:

  - The values [PAID] on the enum `PaymentStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `brand` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sku]` on the table `Inventory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sku]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "PaymentProvider" AS ENUM ('RAZORPAY', 'STRIPE', 'PHONEPE', 'GPAY', 'PAYTM', 'COD', 'WALLET');

-- CreateEnum
CREATE TYPE "PaymentFlowStatus" AS ENUM ('PENDING', 'INITIATED', 'SUCCESS', 'FAILED', 'REFUNDED', 'PARTIAL_REFUND', 'CANCELLED');

-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('ROOT', 'MAIN', 'SUB', 'CHILD');

-- CreateEnum
CREATE TYPE "CategoryDisplayType" AS ENUM ('GRID', 'LIST', 'CAROUSEL', 'FEATURED');

-- CreateEnum
CREATE TYPE "BrandType" AS ENUM ('GLOBAL', 'LOCAL', 'PARTNER', 'PRIVATE_LABEL');

-- CreateEnum
CREATE TYPE "BrandStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED');

-- CreateEnum
CREATE TYPE "WarehouseType" AS ENUM ('MAIN', 'DARK_STORE', 'DISTRIBUTION_CENTER', 'RETAIL_STORE', 'MICRO_WAREHOUSE');

-- CreateEnum
CREATE TYPE "WarehouseStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'MAINTENANCE', 'CLOSED');

-- CreateEnum
CREATE TYPE "CartStatus" AS ENUM ('ACTIVE', 'CHECKED_OUT', 'ABANDONED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "WishlistStatus" AS ENUM ('ACTIVE', 'REMOVED');

-- CreateEnum
CREATE TYPE "AddressType" AS ENUM ('HOME', 'WORK', 'OTHER');

-- CreateEnum
CREATE TYPE "CouponType" AS ENUM ('PERCENTAGE', 'FLAT', 'FREE_DELIVERY');

-- CreateEnum
CREATE TYPE "CouponStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'EXPIRED');

-- CreateEnum
CREATE TYPE "OrderItemStatus" AS ENUM ('PENDING', 'CONFIRMED', 'PACKED', 'SHIPPED', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED', 'RETURN_REQUESTED', 'RETURNED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "CampaignType" AS ENUM ('BANNER', 'OFFER', 'REFERRAL', 'CASHBACK', 'FESTIVAL', 'WHATSAPP', 'PUSH', 'EMAIL');

-- CreateEnum
CREATE TYPE "CampaignStatus" AS ENUM ('DRAFT', 'ACTIVE', 'PAUSED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('LOGIN', 'LOGOUT', 'REGISTER', 'ORDER', 'PAYMENT', 'CART', 'WISHLIST', 'PROFILE', 'PRODUCT', 'DEALER', 'ADMIN', 'FRAUD', 'REFERRAL', 'SYSTEM');

-- CreateEnum
CREATE TYPE "CommunicationType" AS ENUM ('OTP', 'LOGIN', 'REGISTER', 'ORDER', 'PAYMENT', 'DELIVERY', 'REFERRAL', 'PROMOTION', 'SUPPORT', 'ALERT');

-- CreateEnum
CREATE TYPE "CommunicationChannel" AS ENUM ('SMS', 'EMAIL', 'WHATSAPP', 'PUSH', 'INAPP');

-- CreateEnum
CREATE TYPE "CommunicationStatus" AS ENUM ('PENDING', 'SENT', 'DELIVERED', 'FAILED', 'READ');

-- CreateEnum
CREATE TYPE "LoyaltyTier" AS ENUM ('BRONZE', 'SILVER', 'GOLD', 'PLATINUM');

-- CreateEnum
CREATE TYPE "LoyaltyTransactionType" AS ENUM ('CREDIT', 'DEBIT', 'REFERRAL', 'CASHBACK', 'REWARD', 'PURCHASE');

-- CreateEnum
CREATE TYPE "InvoiceType" AS ENUM ('SALE', 'BUYBACK', 'REPAIR', 'REFUND', 'COMMISSION');

-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('PENDING', 'GENERATED', 'PAID', 'CANCELLED');

-- CreateEnum
CREATE TYPE "FeatureFlagType" AS ENUM ('RELEASE', 'EXPERIMENT', 'PAYMENT', 'UI', 'API', 'INTERNAL');

-- CreateEnum
CREATE TYPE "ExperimentType" AS ENUM ('AB_TEST', 'UI_TEST', 'PRICING', 'RECOMMENDATION', 'CHECKOUT');

-- CreateEnum
CREATE TYPE "ExperimentStatus" AS ENUM ('DRAFT', 'RUNNING', 'PAUSED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "MembershipType" AS ENUM ('BASIC', 'PREMIUM', 'GOLD', 'PLATINUM');

-- CreateEnum
CREATE TYPE "MembershipStatus" AS ENUM ('ACTIVE', 'EXPIRED', 'CANCELLED', 'PAUSED');

-- CreateEnum
CREATE TYPE "PayoutType" AS ENUM ('COMMISSION', 'REFUND', 'CASHBACK', 'REWARD', 'WITHDRAWAL');

-- CreateEnum
CREATE TYPE "PayoutStatus" AS ENUM ('PENDING', 'PROCESSING', 'SUCCESS', 'FAILED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "RecommendationType" AS ENUM ('AI', 'TRENDING', 'SIMILAR', 'RECENT', 'FEATURED', 'PERSONALIZED');

-- CreateEnum
CREATE TYPE "RecommendationLevel" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'ULTRA');

-- CreateEnum
CREATE TYPE "PersonalizationTheme" AS ENUM ('LIGHT', 'DARK', 'SYSTEM');

-- CreateEnum
CREATE TYPE "PersonalizationLanguage" AS ENUM ('ENGLISH', 'HINDI', 'KANNADA');

-- CreateEnum
CREATE TYPE "TaxType" AS ENUM ('GST', 'CGST', 'SGST', 'IGST', 'VAT', 'SERVICE');

-- CreateEnum
CREATE TYPE "SupportType" AS ENUM ('GENERAL', 'ORDER', 'PAYMENT', 'DELIVERY', 'REFUND', 'REPAIR', 'DEALER', 'TECHNICAL');

-- CreateEnum
CREATE TYPE "SupportPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'URGENT');

-- CreateEnum
CREATE TYPE "SupportStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED', 'REJECTED');

-- CreateEnum
CREATE TYPE "SlotType" AS ENUM ('DELIVERY', 'PICKUP', 'REPAIR', 'INSTALLATION');

-- CreateEnum
CREATE TYPE "SlotStatus" AS ENUM ('ACTIVE', 'FULL', 'BLOCKED', 'CLOSED');

-- CreateEnum
CREATE TYPE "SeoPageType" AS ENUM ('HOME', 'PRODUCT', 'CATEGORY', 'BRAND', 'DEALER', 'BLOG', 'LANDING');

-- CreateEnum
CREATE TYPE "ReservationStatus" AS ENUM ('PENDING', 'RESERVED', 'CONFIRMED', 'CANCELLED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "ReturnType" AS ENUM ('RETURN', 'REPLACEMENT', 'EXCHANGE');

-- CreateEnum
CREATE TYPE "ReturnStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'PICKUP_SCHEDULED', 'PICKED', 'REFUNDED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "ReferralStatus" AS ENUM ('PENDING', 'REGISTERED', 'PURCHASED', 'REWARDED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "TrackingStatus" AS ENUM ('PENDING', 'PICKED', 'IN_TRANSIT', 'OUT_FOR_DELIVERY', 'DELIVERED', 'FAILED', 'RETURNED');

-- CreateEnum
CREATE TYPE "VendorType" AS ENUM ('SUPPLIER', 'DISTRIBUTOR', 'SERVICE_PROVIDER', 'LOGISTICS', 'REPAIR_PARTNER');

-- CreateEnum
CREATE TYPE "VendorStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'BLOCKED');

-- CreateEnum
CREATE TYPE "CommonStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'PENDING', 'COMPLETED', 'CANCELLED', 'OPEN', 'CLOSED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "PaymentMethod" ADD VALUE 'CREDIT_CARD';
ALTER TYPE "PaymentMethod" ADD VALUE 'DEBIT_CARD';
ALTER TYPE "PaymentMethod" ADD VALUE 'NETBANKING';
ALTER TYPE "PaymentMethod" ADD VALUE 'EMI';

-- AlterEnum
BEGIN;
CREATE TYPE "PaymentStatus_new" AS ENUM ('PENDING', 'INITIATED', 'SUCCESS', 'FAILED', 'CANCELLED', 'REFUNDED', 'PARTIAL_REFUND');
ALTER TABLE "BuyOrder" ALTER COLUMN "paymentStatus" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "paymentStatus" DROP DEFAULT;
ALTER TABLE "WalletRecharge" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Order" ALTER COLUMN "paymentStatus" TYPE "PaymentStatus_new" USING ("paymentStatus"::text::"PaymentStatus_new");
ALTER TABLE "BuyOrder" ALTER COLUMN "paymentStatus" TYPE "PaymentStatus_new" USING ("paymentStatus"::text::"PaymentStatus_new");
ALTER TABLE "WalletRecharge" ALTER COLUMN "status" TYPE "PaymentStatus_new" USING ("status"::text::"PaymentStatus_new");
ALTER TYPE "PaymentStatus" RENAME TO "PaymentStatus_old";
ALTER TYPE "PaymentStatus_new" RENAME TO "PaymentStatus";
DROP TYPE "PaymentStatus_old";
ALTER TABLE "BuyOrder" ALTER COLUMN "paymentStatus" SET DEFAULT 'PENDING';
ALTER TABLE "Order" ALTER COLUMN "paymentStatus" SET DEFAULT 'PENDING';
ALTER TABLE "WalletRecharge" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterEnum
ALTER TYPE "WorkflowStatus" ADD VALUE 'OUT_FOR_DELIVERY';

-- DropIndex
DROP INDEX "Product_brand_model_idx";

-- AlterTable
ALTER TABLE "BuyOrder" ADD COLUMN     "productId" TEXT;

-- AlterTable
ALTER TABLE "Inventory" ADD COLUMN     "codAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "costPrice" DOUBLE PRECISION,
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "reservedStock" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "returnAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "sku" TEXT,
ADD COLUMN     "soldStock" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "warehouseId" TEXT,
ADD COLUMN     "warrantyAvailable" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "brand",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "averageRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "batteryHealth" INTEGER,
ADD COLUMN     "brandId" TEXT,
ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "color" TEXT,
ADD COLUMN     "costPrice" DOUBLE PRECISION,
ADD COLUMN     "dealerId" TEXT,
ADD COLUMN     "lowStockAlert" INTEGER NOT NULL DEFAULT 5,
ADD COLUMN     "metaDescription" TEXT,
ADD COLUMN     "metaTitle" TEXT,
ADD COLUMN     "mrp" DOUBLE PRECISION,
ADD COLUMN     "processor" TEXT,
ADD COLUMN     "ram" TEXT,
ADD COLUMN     "recommended" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "screenSize" TEXT,
ADD COLUMN     "sellingPrice" DOUBLE PRECISION,
ADD COLUMN     "shortDescription" TEXT,
ADD COLUMN     "sku" TEXT,
ADD COLUMN     "stock" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "storage" TEXT,
ADD COLUMN     "thumbnail" TEXT,
ADD COLUMN     "totalReviews" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalSales" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "trending" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "productId" TEXT,
    "inventoryId" TEXT,
    "dealerId" TEXT,
    "productName" TEXT NOT NULL,
    "productImage" TEXT,
    "brand" TEXT,
    "model" TEXT,
    "ram" TEXT,
    "storage" TEXT,
    "color" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" DOUBLE PRECISION NOT NULL,
    "offerPrice" DOUBLE PRECISION,
    "finalPrice" DOUBLE PRECISION NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "status" "OrderItemStatus" NOT NULL DEFAULT 'PENDING',
    "trackingId" TEXT,
    "deliveredAt" TIMESTAMP(3),
    "cancelledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "orderId" TEXT,
    "userId" TEXT,
    "provider" "PaymentProvider" NOT NULL,
    "transactionId" TEXT,
    "paymentGatewayOrderId" TEXT,
    "paymentGatewayPaymentId" TEXT,
    "paymentGatewaySignature" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "refundedAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "status" "PaymentFlowStatus" NOT NULL DEFAULT 'PENDING',
    "paymentMethod" TEXT,
    "paidAt" TIMESTAMP(3),
    "refundAt" TIMESTAMP(3),
    "failureReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "buyOrderId" TEXT,
    "walletRechargeId" TEXT,
    "leadTransactionId" TEXT,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "dealerId" TEXT,
    "type" "CategoryType" NOT NULL DEFAULT 'MAIN',
    "displayType" "CategoryDisplayType" NOT NULL DEFAULT 'GRID',
    "image" TEXT,
    "icon" TEXT,
    "banner" TEXT,
    "parentId" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "type" "BrandType" NOT NULL DEFAULT 'GLOBAL',
    "status" "BrandStatus" NOT NULL DEFAULT 'ACTIVE',
    "logo" TEXT,
    "banner" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "totalProducts" INTEGER NOT NULL DEFAULT 0,
    "totalSales" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warehouse" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "type" "WarehouseType" NOT NULL DEFAULT 'MAIN',
    "status" "WarehouseStatus" NOT NULL DEFAULT 'ACTIVE',
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "pincode" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "phone" TEXT,
    "email" TEXT,
    "managerName" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "defaultWarehouse" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "guestId" TEXT,
    "status" "CartStatus" NOT NULL DEFAULT 'ACTIVE',
    "totalItems" INTEGER NOT NULL DEFAULT 0,
    "subtotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tax" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartItem" (
    "id" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,
    "productId" TEXT,
    "inventoryId" TEXT,
    "dealerId" TEXT,
    "productName" TEXT NOT NULL,
    "productImage" TEXT,
    "brand" TEXT,
    "model" TEXT,
    "ram" TEXT,
    "storage" TEXT,
    "color" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "price" DOUBLE PRECISION NOT NULL,
    "offerPrice" DOUBLE PRECISION,
    "finalPrice" DOUBLE PRECISION NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "status" "WishlistStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "alternatePhone" TEXT,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT,
    "landmark" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "type" "AddressType" NOT NULL DEFAULT 'HOME',
    "defaultAddress" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coupon" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "CouponType" NOT NULL,
    "status" "CouponStatus" NOT NULL DEFAULT 'ACTIVE',
    "value" DOUBLE PRECISION NOT NULL,
    "minimumOrderAmount" DOUBLE PRECISION,
    "maximumDiscountAmount" DOUBLE PRECISION,
    "usageLimit" INTEGER,
    "usedCount" INTEGER NOT NULL DEFAULT 0,
    "perUserLimit" INTEGER NOT NULL DEFAULT 1,
    "startDate" TIMESTAMP(3),
    "expiryDate" TIMESTAMP(3),
    "firstOrderOnly" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campaign" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "type" "CampaignType" NOT NULL,
    "status" "CampaignStatus" NOT NULL DEFAULT 'DRAFT',
    "banner" TEXT,
    "thumbnail" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Campaign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "dealerId" TEXT,
    "type" "ActivityType" NOT NULL,
    "action" TEXT NOT NULL,
    "module" TEXT,
    "description" TEXT,
    "metadata" JSONB,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Communication" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "type" "CommunicationType" NOT NULL,
    "channel" "CommunicationChannel" NOT NULL,
    "receiver" TEXT NOT NULL,
    "subject" TEXT,
    "message" TEXT NOT NULL,
    "status" "CommunicationStatus" NOT NULL DEFAULT 'PENDING',
    "provider" TEXT,
    "providerResponse" TEXT,
    "metadata" JSONB,
    "sentAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Communication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loyalty" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "totalPoints" INTEGER NOT NULL DEFAULT 0,
    "usedPoints" INTEGER NOT NULL DEFAULT 0,
    "availablePoints" INTEGER NOT NULL DEFAULT 0,
    "tier" "LoyaltyTier" NOT NULL DEFAULT 'BRONZE',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Loyalty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoyaltyTransaction" (
    "id" TEXT NOT NULL,
    "loyaltyId" TEXT NOT NULL,
    "type" "LoyaltyTransactionType" NOT NULL,
    "points" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoyaltyTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "type" "InvoiceType" NOT NULL,
    "userId" TEXT,
    "orderId" TEXT,
    "buyOrderId" TEXT,
    "dealerId" TEXT,
    "subtotal" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tax" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "gstNumber" TEXT,
    "status" "InvoiceStatus" NOT NULL DEFAULT 'PENDING',
    "pdfUrl" TEXT,
    "issuedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FeatureFlag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "description" TEXT,
    "type" "FeatureFlagType" NOT NULL DEFAULT 'RELEASE',
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "value" JSONB,
    "userIds" TEXT[],
    "dealerIds" TEXT[],
    "active" BOOLEAN NOT NULL DEFAULT true,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FeatureFlag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experiment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "description" TEXT,
    "type" "ExperimentType" NOT NULL DEFAULT 'AB_TEST',
    "status" "ExperimentStatus" NOT NULL DEFAULT 'DRAFT',
    "trafficPercentage" INTEGER NOT NULL DEFAULT 0,
    "variants" JSONB,
    "metrics" JSONB,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Experiment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Membership" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "type" "MembershipType" NOT NULL DEFAULT 'BASIC',
    "status" "MembershipStatus" NOT NULL DEFAULT 'ACTIVE',
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "durationInDays" INTEGER NOT NULL DEFAULT 30,
    "benefits" JSONB,
    "prioritySupport" BOOLEAN NOT NULL DEFAULT false,
    "cashbackEnabled" BOOLEAN NOT NULL DEFAULT false,
    "freeDelivery" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Membership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMembership" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "status" "MembershipStatus" NOT NULL DEFAULT 'ACTIVE',
    "autoRenew" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserMembership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payout" (
    "id" TEXT NOT NULL,
    "dealerId" TEXT,
    "userId" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "fee" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "finalAmount" DOUBLE PRECISION NOT NULL,
    "type" "PayoutType" NOT NULL DEFAULT 'COMMISSION',
    "status" "PayoutStatus" NOT NULL DEFAULT 'PENDING',
    "method" "PaymentMethod",
    "transactionId" TEXT,
    "referenceId" TEXT,
    "remarks" TEXT,
    "processedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recommendation" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "productId" TEXT,
    "inventoryId" TEXT,
    "type" "RecommendationType" NOT NULL DEFAULT 'AI',
    "score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "reason" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Personalization" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "favoriteBrands" TEXT[],
    "favoriteCategories" TEXT[],
    "favoriteProducts" TEXT[],
    "language" "PersonalizationLanguage" NOT NULL DEFAULT 'ENGLISH',
    "theme" "PersonalizationTheme" NOT NULL DEFAULT 'SYSTEM',
    "recommendationLevel" "RecommendationLevel" NOT NULL DEFAULT 'MEDIUM',
    "recentSearches" TEXT[],
    "recentViews" TEXT[],
    "recommendationScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Personalization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tax" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "type" "TaxType" NOT NULL DEFAULT 'GST',
    "percentage" DOUBLE PRECISION NOT NULL,
    "country" TEXT DEFAULT 'India',
    "state" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tax_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupportTicket" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "dealerId" TEXT,
    "ticketNumber" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "SupportType" NOT NULL DEFAULT 'GENERAL',
    "priority" "SupportPriority" NOT NULL DEFAULT 'MEDIUM',
    "status" "SupportStatus" NOT NULL DEFAULT 'OPEN',
    "assignedTo" TEXT,
    "resolution" TEXT,
    "resolvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupportTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Slot" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "maxOrders" INTEGER NOT NULL DEFAULT 0,
    "currentOrders" INTEGER NOT NULL DEFAULT 0,
    "type" "SlotType" NOT NULL DEFAULT 'DELIVERY',
    "status" "SlotStatus" NOT NULL DEFAULT 'ACTIVE',
    "city" TEXT,
    "area" TEXT,
    "pincode" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Slot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seo" (
    "id" TEXT NOT NULL,
    "pageType" "SeoPageType" NOT NULL,
    "referenceId" TEXT,
    "slug" TEXT NOT NULL,
    "metaTitle" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL,
    "metaKeywords" TEXT[],
    "ogTitle" TEXT,
    "ogDescription" TEXT,
    "ogImage" TEXT,
    "twitterTitle" TEXT,
    "twitterDescription" TEXT,
    "twitterImage" TEXT,
    "indexable" BOOLEAN NOT NULL DEFAULT true,
    "canonicalUrl" TEXT,
    "structuredData" JSONB,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Seo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "productId" TEXT,
    "inventoryId" TEXT,
    "dealerId" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "status" "ReservationStatus" NOT NULL DEFAULT 'PENDING',
    "expiresAt" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReturnRequest" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "orderItemId" TEXT,
    "dealerId" TEXT,
    "type" "ReturnType" NOT NULL DEFAULT 'RETURN',
    "status" "ReturnStatus" NOT NULL DEFAULT 'PENDING',
    "reason" TEXT NOT NULL,
    "description" TEXT,
    "refundAmount" DOUBLE PRECISION,
    "pickupScheduledAt" TIMESTAMP(3),
    "pickedAt" TIMESTAMP(3),
    "resolutionNotes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReturnRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Referral" (
    "id" TEXT NOT NULL,
    "referrerId" TEXT,
    "referredUserId" TEXT,
    "referralCode" TEXT NOT NULL,
    "status" "ReferralStatus" NOT NULL DEFAULT 'PENDING',
    "rewardAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "rewardClaimed" BOOLEAN NOT NULL DEFAULT false,
    "usedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tracking" (
    "id" TEXT NOT NULL,
    "orderId" TEXT,
    "orderItemId" TEXT,
    "trackingNumber" TEXT NOT NULL,
    "courierName" TEXT,
    "currentLocation" TEXT,
    "status" "TrackingStatus" NOT NULL DEFAULT 'PENDING',
    "estimatedDelivery" TIMESTAMP(3),
    "deliveredAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tracking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "companyName" TEXT,
    "gstNumber" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT DEFAULT 'India',
    "pincode" TEXT,
    "type" "VendorType" NOT NULL DEFAULT 'SUPPLIER',
    "status" "VendorStatus" NOT NULL DEFAULT 'PENDING',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cms" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "status" "CommonStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "partnerName" TEXT,
    "status" "CommonStatus" NOT NULL DEFAULT 'PENDING',
    "trackingId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT,
    "code" TEXT NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Offer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductReview" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Setting" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Support" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" "CommonStatus" NOT NULL DEFAULT 'OPEN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Support_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "OrderItem_orderId_idx" ON "OrderItem"("orderId");

-- CreateIndex
CREATE INDEX "OrderItem_productId_idx" ON "OrderItem"("productId");

-- CreateIndex
CREATE INDEX "OrderItem_inventoryId_idx" ON "OrderItem"("inventoryId");

-- CreateIndex
CREATE INDEX "OrderItem_dealerId_idx" ON "OrderItem"("dealerId");

-- CreateIndex
CREATE INDEX "OrderItem_status_idx" ON "OrderItem"("status");

-- CreateIndex
CREATE INDEX "Payment_orderId_idx" ON "Payment"("orderId");

-- CreateIndex
CREATE INDEX "Payment_userId_idx" ON "Payment"("userId");

-- CreateIndex
CREATE INDEX "Payment_status_idx" ON "Payment"("status");

-- CreateIndex
CREATE INDEX "Payment_provider_idx" ON "Payment"("provider");

-- CreateIndex
CREATE INDEX "Payment_transactionId_idx" ON "Payment"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE INDEX "Category_slug_idx" ON "Category"("slug");

-- CreateIndex
CREATE INDEX "Category_parentId_idx" ON "Category"("parentId");

-- CreateIndex
CREATE INDEX "Category_dealerId_idx" ON "Category"("dealerId");

-- CreateIndex
CREATE INDEX "Category_featured_idx" ON "Category"("featured");

-- CreateIndex
CREATE INDEX "Category_active_idx" ON "Category"("active");

-- CreateIndex
CREATE INDEX "Category_type_idx" ON "Category"("type");

-- CreateIndex
CREATE INDEX "Category_displayType_idx" ON "Category"("displayType");

-- CreateIndex
CREATE INDEX "Category_sortOrder_idx" ON "Category"("sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_slug_key" ON "Brand"("slug");

-- CreateIndex
CREATE INDEX "Brand_slug_idx" ON "Brand"("slug");

-- CreateIndex
CREATE INDEX "Brand_type_idx" ON "Brand"("type");

-- CreateIndex
CREATE INDEX "Brand_status_idx" ON "Brand"("status");

-- CreateIndex
CREATE INDEX "Brand_featured_idx" ON "Brand"("featured");

-- CreateIndex
CREATE INDEX "Brand_verified_idx" ON "Brand"("verified");

-- CreateIndex
CREATE INDEX "Brand_active_idx" ON "Brand"("active");

-- CreateIndex
CREATE UNIQUE INDEX "Warehouse_code_key" ON "Warehouse"("code");

-- CreateIndex
CREATE INDEX "Warehouse_city_idx" ON "Warehouse"("city");

-- CreateIndex
CREATE INDEX "Warehouse_state_idx" ON "Warehouse"("state");

-- CreateIndex
CREATE INDEX "Warehouse_country_idx" ON "Warehouse"("country");

-- CreateIndex
CREATE INDEX "Warehouse_type_idx" ON "Warehouse"("type");

-- CreateIndex
CREATE INDEX "Warehouse_status_idx" ON "Warehouse"("status");

-- CreateIndex
CREATE INDEX "Warehouse_active_idx" ON "Warehouse"("active");

-- CreateIndex
CREATE INDEX "Warehouse_defaultWarehouse_idx" ON "Warehouse"("defaultWarehouse");

-- CreateIndex
CREATE INDEX "Cart_userId_idx" ON "Cart"("userId");

-- CreateIndex
CREATE INDEX "Cart_guestId_idx" ON "Cart"("guestId");

-- CreateIndex
CREATE INDEX "Cart_status_idx" ON "Cart"("status");

-- CreateIndex
CREATE INDEX "CartItem_cartId_idx" ON "CartItem"("cartId");

-- CreateIndex
CREATE INDEX "CartItem_productId_idx" ON "CartItem"("productId");

-- CreateIndex
CREATE INDEX "CartItem_inventoryId_idx" ON "CartItem"("inventoryId");

-- CreateIndex
CREATE INDEX "CartItem_dealerId_idx" ON "CartItem"("dealerId");

-- CreateIndex
CREATE INDEX "Wishlist_userId_idx" ON "Wishlist"("userId");

-- CreateIndex
CREATE INDEX "Wishlist_productId_idx" ON "Wishlist"("productId");

-- CreateIndex
CREATE INDEX "Wishlist_status_idx" ON "Wishlist"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Wishlist_userId_productId_key" ON "Wishlist"("userId", "productId");

-- CreateIndex
CREATE INDEX "Address_userId_idx" ON "Address"("userId");

-- CreateIndex
CREATE INDEX "Address_city_idx" ON "Address"("city");

-- CreateIndex
CREATE INDEX "Address_state_idx" ON "Address"("state");

-- CreateIndex
CREATE INDEX "Address_pincode_idx" ON "Address"("pincode");

-- CreateIndex
CREATE INDEX "Address_type_idx" ON "Address"("type");

-- CreateIndex
CREATE INDEX "Address_defaultAddress_idx" ON "Address"("defaultAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Coupon_code_key" ON "Coupon"("code");

-- CreateIndex
CREATE INDEX "Coupon_code_idx" ON "Coupon"("code");

-- CreateIndex
CREATE INDEX "Coupon_type_idx" ON "Coupon"("type");

-- CreateIndex
CREATE INDEX "Coupon_status_idx" ON "Coupon"("status");

-- CreateIndex
CREATE INDEX "Coupon_active_idx" ON "Coupon"("active");

-- CreateIndex
CREATE UNIQUE INDEX "Campaign_slug_key" ON "Campaign"("slug");

-- CreateIndex
CREATE INDEX "Campaign_slug_idx" ON "Campaign"("slug");

-- CreateIndex
CREATE INDEX "Campaign_status_idx" ON "Campaign"("status");

-- CreateIndex
CREATE INDEX "Campaign_type_idx" ON "Campaign"("type");

-- CreateIndex
CREATE INDEX "Campaign_active_idx" ON "Campaign"("active");

-- CreateIndex
CREATE INDEX "Activity_userId_idx" ON "Activity"("userId");

-- CreateIndex
CREATE INDEX "Activity_dealerId_idx" ON "Activity"("dealerId");

-- CreateIndex
CREATE INDEX "Activity_type_idx" ON "Activity"("type");

-- CreateIndex
CREATE INDEX "Activity_action_idx" ON "Activity"("action");

-- CreateIndex
CREATE INDEX "Activity_createdAt_idx" ON "Activity"("createdAt");

-- CreateIndex
CREATE INDEX "Communication_userId_idx" ON "Communication"("userId");

-- CreateIndex
CREATE INDEX "Communication_type_idx" ON "Communication"("type");

-- CreateIndex
CREATE INDEX "Communication_channel_idx" ON "Communication"("channel");

-- CreateIndex
CREATE INDEX "Communication_status_idx" ON "Communication"("status");

-- CreateIndex
CREATE INDEX "Communication_receiver_idx" ON "Communication"("receiver");

-- CreateIndex
CREATE UNIQUE INDEX "Loyalty_userId_key" ON "Loyalty"("userId");

-- CreateIndex
CREATE INDEX "Loyalty_tier_idx" ON "Loyalty"("tier");

-- CreateIndex
CREATE INDEX "Loyalty_active_idx" ON "Loyalty"("active");

-- CreateIndex
CREATE INDEX "LoyaltyTransaction_loyaltyId_idx" ON "LoyaltyTransaction"("loyaltyId");

-- CreateIndex
CREATE INDEX "LoyaltyTransaction_type_idx" ON "LoyaltyTransaction"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_invoiceNumber_key" ON "Invoice"("invoiceNumber");

-- CreateIndex
CREATE INDEX "Invoice_invoiceNumber_idx" ON "Invoice"("invoiceNumber");

-- CreateIndex
CREATE INDEX "Invoice_type_idx" ON "Invoice"("type");

-- CreateIndex
CREATE INDEX "Invoice_status_idx" ON "Invoice"("status");

-- CreateIndex
CREATE INDEX "Invoice_userId_idx" ON "Invoice"("userId");

-- CreateIndex
CREATE INDEX "Invoice_dealerId_idx" ON "Invoice"("dealerId");

-- CreateIndex
CREATE UNIQUE INDEX "FeatureFlag_name_key" ON "FeatureFlag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FeatureFlag_key_key" ON "FeatureFlag"("key");

-- CreateIndex
CREATE INDEX "FeatureFlag_key_idx" ON "FeatureFlag"("key");

-- CreateIndex
CREATE INDEX "FeatureFlag_enabled_idx" ON "FeatureFlag"("enabled");

-- CreateIndex
CREATE INDEX "FeatureFlag_active_idx" ON "FeatureFlag"("active");

-- CreateIndex
CREATE INDEX "FeatureFlag_type_idx" ON "FeatureFlag"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Experiment_key_key" ON "Experiment"("key");

-- CreateIndex
CREATE INDEX "Experiment_key_idx" ON "Experiment"("key");

-- CreateIndex
CREATE INDEX "Experiment_type_idx" ON "Experiment"("type");

-- CreateIndex
CREATE INDEX "Experiment_status_idx" ON "Experiment"("status");

-- CreateIndex
CREATE INDEX "Experiment_active_idx" ON "Experiment"("active");

-- CreateIndex
CREATE UNIQUE INDEX "Membership_slug_key" ON "Membership"("slug");

-- CreateIndex
CREATE INDEX "Membership_slug_idx" ON "Membership"("slug");

-- CreateIndex
CREATE INDEX "Membership_type_idx" ON "Membership"("type");

-- CreateIndex
CREATE INDEX "Membership_status_idx" ON "Membership"("status");

-- CreateIndex
CREATE INDEX "Membership_active_idx" ON "Membership"("active");

-- CreateIndex
CREATE INDEX "UserMembership_userId_idx" ON "UserMembership"("userId");

-- CreateIndex
CREATE INDEX "UserMembership_membershipId_idx" ON "UserMembership"("membershipId");

-- CreateIndex
CREATE INDEX "UserMembership_status_idx" ON "UserMembership"("status");

-- CreateIndex
CREATE INDEX "Payout_dealerId_idx" ON "Payout"("dealerId");

-- CreateIndex
CREATE INDEX "Payout_userId_idx" ON "Payout"("userId");

-- CreateIndex
CREATE INDEX "Payout_type_idx" ON "Payout"("type");

-- CreateIndex
CREATE INDEX "Payout_status_idx" ON "Payout"("status");

-- CreateIndex
CREATE INDEX "Payout_transactionId_idx" ON "Payout"("transactionId");

-- CreateIndex
CREATE INDEX "Recommendation_userId_idx" ON "Recommendation"("userId");

-- CreateIndex
CREATE INDEX "Recommendation_productId_idx" ON "Recommendation"("productId");

-- CreateIndex
CREATE INDEX "Recommendation_inventoryId_idx" ON "Recommendation"("inventoryId");

-- CreateIndex
CREATE INDEX "Recommendation_type_idx" ON "Recommendation"("type");

-- CreateIndex
CREATE INDEX "Recommendation_score_idx" ON "Recommendation"("score");

-- CreateIndex
CREATE INDEX "Recommendation_active_idx" ON "Recommendation"("active");

-- CreateIndex
CREATE UNIQUE INDEX "Personalization_userId_key" ON "Personalization"("userId");

-- CreateIndex
CREATE INDEX "Personalization_recommendationScore_idx" ON "Personalization"("recommendationScore");

-- CreateIndex
CREATE UNIQUE INDEX "Tax_code_key" ON "Tax"("code");

-- CreateIndex
CREATE INDEX "Tax_code_idx" ON "Tax"("code");

-- CreateIndex
CREATE INDEX "Tax_type_idx" ON "Tax"("type");

-- CreateIndex
CREATE INDEX "Tax_active_idx" ON "Tax"("active");

-- CreateIndex
CREATE INDEX "Tax_country_idx" ON "Tax"("country");

-- CreateIndex
CREATE INDEX "Tax_state_idx" ON "Tax"("state");

-- CreateIndex
CREATE UNIQUE INDEX "SupportTicket_ticketNumber_key" ON "SupportTicket"("ticketNumber");

-- CreateIndex
CREATE INDEX "SupportTicket_ticketNumber_idx" ON "SupportTicket"("ticketNumber");

-- CreateIndex
CREATE INDEX "SupportTicket_userId_idx" ON "SupportTicket"("userId");

-- CreateIndex
CREATE INDEX "SupportTicket_dealerId_idx" ON "SupportTicket"("dealerId");

-- CreateIndex
CREATE INDEX "SupportTicket_status_idx" ON "SupportTicket"("status");

-- CreateIndex
CREATE INDEX "SupportTicket_priority_idx" ON "SupportTicket"("priority");

-- CreateIndex
CREATE INDEX "SupportTicket_type_idx" ON "SupportTicket"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Slot_code_key" ON "Slot"("code");

-- CreateIndex
CREATE INDEX "Slot_code_idx" ON "Slot"("code");

-- CreateIndex
CREATE INDEX "Slot_type_idx" ON "Slot"("type");

-- CreateIndex
CREATE INDEX "Slot_status_idx" ON "Slot"("status");

-- CreateIndex
CREATE INDEX "Slot_city_idx" ON "Slot"("city");

-- CreateIndex
CREATE INDEX "Slot_pincode_idx" ON "Slot"("pincode");

-- CreateIndex
CREATE INDEX "Slot_active_idx" ON "Slot"("active");

-- CreateIndex
CREATE UNIQUE INDEX "Seo_slug_key" ON "Seo"("slug");

-- CreateIndex
CREATE INDEX "Seo_slug_idx" ON "Seo"("slug");

-- CreateIndex
CREATE INDEX "Seo_pageType_idx" ON "Seo"("pageType");

-- CreateIndex
CREATE INDEX "Seo_active_idx" ON "Seo"("active");

-- CreateIndex
CREATE INDEX "Seo_indexable_idx" ON "Seo"("indexable");

-- CreateIndex
CREATE INDEX "Reservation_userId_idx" ON "Reservation"("userId");

-- CreateIndex
CREATE INDEX "Reservation_productId_idx" ON "Reservation"("productId");

-- CreateIndex
CREATE INDEX "Reservation_inventoryId_idx" ON "Reservation"("inventoryId");

-- CreateIndex
CREATE INDEX "Reservation_dealerId_idx" ON "Reservation"("dealerId");

-- CreateIndex
CREATE INDEX "Reservation_status_idx" ON "Reservation"("status");

-- CreateIndex
CREATE INDEX "Reservation_expiresAt_idx" ON "Reservation"("expiresAt");

-- CreateIndex
CREATE INDEX "ReturnRequest_userId_idx" ON "ReturnRequest"("userId");

-- CreateIndex
CREATE INDEX "ReturnRequest_orderItemId_idx" ON "ReturnRequest"("orderItemId");

-- CreateIndex
CREATE INDEX "ReturnRequest_dealerId_idx" ON "ReturnRequest"("dealerId");

-- CreateIndex
CREATE INDEX "ReturnRequest_status_idx" ON "ReturnRequest"("status");

-- CreateIndex
CREATE INDEX "ReturnRequest_type_idx" ON "ReturnRequest"("type");

-- CreateIndex
CREATE UNIQUE INDEX "Referral_referralCode_key" ON "Referral"("referralCode");

-- CreateIndex
CREATE INDEX "Referral_referrerId_idx" ON "Referral"("referrerId");

-- CreateIndex
CREATE INDEX "Referral_referredUserId_idx" ON "Referral"("referredUserId");

-- CreateIndex
CREATE INDEX "Referral_referralCode_idx" ON "Referral"("referralCode");

-- CreateIndex
CREATE INDEX "Referral_status_idx" ON "Referral"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Tracking_trackingNumber_key" ON "Tracking"("trackingNumber");

-- CreateIndex
CREATE INDEX "Tracking_orderId_idx" ON "Tracking"("orderId");

-- CreateIndex
CREATE INDEX "Tracking_orderItemId_idx" ON "Tracking"("orderItemId");

-- CreateIndex
CREATE INDEX "Tracking_trackingNumber_idx" ON "Tracking"("trackingNumber");

-- CreateIndex
CREATE INDEX "Tracking_status_idx" ON "Tracking"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_slug_key" ON "Vendor"("slug");

-- CreateIndex
CREATE INDEX "Vendor_slug_idx" ON "Vendor"("slug");

-- CreateIndex
CREATE INDEX "Vendor_email_idx" ON "Vendor"("email");

-- CreateIndex
CREATE INDEX "Vendor_phone_idx" ON "Vendor"("phone");

-- CreateIndex
CREATE INDEX "Vendor_type_idx" ON "Vendor"("type");

-- CreateIndex
CREATE INDEX "Vendor_status_idx" ON "Vendor"("status");

-- CreateIndex
CREATE INDEX "Vendor_active_idx" ON "Vendor"("active");

-- CreateIndex
CREATE UNIQUE INDEX "Cms_slug_key" ON "Cms"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Content_slug_key" ON "Content"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Offer_code_key" ON "Offer"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_key_key" ON "Permission"("key");

-- CreateIndex
CREATE UNIQUE INDEX "Setting_key_key" ON "Setting"("key");

-- CreateIndex
CREATE UNIQUE INDEX "Inventory_sku_key" ON "Inventory"("sku");

-- CreateIndex
CREATE INDEX "Inventory_warehouseId_idx" ON "Inventory"("warehouseId");

-- CreateIndex
CREATE INDEX "Inventory_stock_idx" ON "Inventory"("stock");

-- CreateIndex
CREATE INDEX "Inventory_price_idx" ON "Inventory"("price");

-- CreateIndex
CREATE INDEX "Inventory_featured_idx" ON "Inventory"("featured");

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");

-- CreateIndex
CREATE INDEX "Product_brandId_model_idx" ON "Product"("brandId", "model");

-- CreateIndex
CREATE INDEX "Product_categoryId_idx" ON "Product"("categoryId");

-- CreateIndex
CREATE INDEX "Product_dealerId_idx" ON "Product"("dealerId");

-- CreateIndex
CREATE INDEX "Product_featured_idx" ON "Product"("featured");

-- CreateIndex
CREATE INDEX "Product_trending_idx" ON "Product"("trending");

-- CreateIndex
CREATE INDEX "Product_recommended_idx" ON "Product"("recommended");

-- CreateIndex
CREATE INDEX "Product_active_idx" ON "Product"("active");

-- CreateIndex
CREATE INDEX "Product_stock_idx" ON "Product"("stock");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuyOrder" ADD CONSTRAINT "BuyOrder_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_buyOrderId_fkey" FOREIGN KEY ("buyOrderId") REFERENCES "BuyOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_walletRechargeId_fkey" FOREIGN KEY ("walletRechargeId") REFERENCES "WalletRecharge"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_leadTransactionId_fkey" FOREIGN KEY ("leadTransactionId") REFERENCES "LeadTransaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Communication" ADD CONSTRAINT "Communication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loyalty" ADD CONSTRAINT "Loyalty_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoyaltyTransaction" ADD CONSTRAINT "LoyaltyTransaction_loyaltyId_fkey" FOREIGN KEY ("loyaltyId") REFERENCES "Loyalty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_buyOrderId_fkey" FOREIGN KEY ("buyOrderId") REFERENCES "BuyOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMembership" ADD CONSTRAINT "UserMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMembership" ADD CONSTRAINT "UserMembership_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "Membership"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payout" ADD CONSTRAINT "Payout_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payout" ADD CONSTRAINT "Payout_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recommendation" ADD CONSTRAINT "Recommendation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recommendation" ADD CONSTRAINT "Recommendation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recommendation" ADD CONSTRAINT "Recommendation_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personalization" ADD CONSTRAINT "Personalization_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportTicket" ADD CONSTRAINT "SupportTicket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupportTicket" ADD CONSTRAINT "SupportTicket_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReturnRequest" ADD CONSTRAINT "ReturnRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReturnRequest" ADD CONSTRAINT "ReturnRequest_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReturnRequest" ADD CONSTRAINT "ReturnRequest_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "Dealer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_referrerId_fkey" FOREIGN KEY ("referrerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_referredUserId_fkey" FOREIGN KEY ("referredUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tracking" ADD CONSTRAINT "Tracking_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tracking" ADD CONSTRAINT "Tracking_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
