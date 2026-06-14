-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('COD', 'UPI', 'CARD', 'WALLET');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'FAILED', 'REFUNDED');

-- AlterTable
ALTER TABLE "BuyOrder" ADD COLUMN     "paymentMethod" "PaymentMethod" NOT NULL DEFAULT 'COD',
ADD COLUMN     "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING';
