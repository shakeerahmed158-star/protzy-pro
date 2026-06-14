import {
  MiddlewareConsumer,
  Module,
  NestModule,
} from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

/* CONFIGS */
import appConfig from "./config/app.config";
import databaseConfig from "./config/database.config";
import jwtConfig from "./config/jwt.config";
import redisConfig from "./config/redis.config";

import { validationSchema } from "./config/validation.schema";

/* CORE */
import { PrismaModule } from "./shared/prisma/prisma.module";
import { AuthModule } from "./shared/auth/auth.module";

/* LOGGER */
import { RequestLoggerMiddleware } from "./shared/logger/request-logger.middleware";

/* USER MODULES */
import { UserModule } from "./modules/user/user.module";
import { BuyModule } from "./modules/buy/buy.module";
import { SellModule } from "./modules/sell/sell.module";
import { RepairModule } from "./modules/repair/repair.module";
import { PricingModule } from "./modules/pricing/pricing.module";

/* BUSINESS MODULES */
import { DealerModule } from "./modules/dealer/dealer.module";
import { LeadModule } from "./modules/leads/lead.module";
import { OrdersModule } from "./modules/orders/orders.module";
import { InventoryModule } from "./modules/inventory/inventory.module";

/* PAYMENT */
import { PaymentsModule } from "./modules/payments/payments.module";

/* SYSTEM MODULES */
import { WalletModule } from "./modules/wallet/wallet.module";
import { AdminModule } from "./modules/admin/admin.module";
import { AnalyticsModule } from "./modules/analytics/analytics.module";
import { NotificationModule } from "./modules/notifications/notification.module";
import { ChatModule } from "./modules/chat/chat.module";
import { ReviewModule } from "./modules/reviews/review.module";
import { SubscriptionModule } from "./modules/subscription/subscription.module";
import { CommissionModule } from "./modules/commission/commission.module";
import { MatchingModule } from './modules/matching/matching.module';
import { SearchModule } from './modules/search/search.module';
import { UploadsModule } from "./modules/uploads/uploads.module";
import { InspectionModule } from "./modules/inspection/inspection.module";
import { GeoModule } from "./modules/geo/geo.module";
import { FraudModule } from "./modules/fraud/fraud.module";
import { CrmModule } from "./modules/crm/crm.module";
import { AuditModule } from "./modules/audit/audit.module";
import { QueueModule } from "./modules/queue/queue.module";
import { BullModule } from '@nestjs/bull';
import { SocketModule } from './modules/socket/socket.module';
import { LoggerModule } from './shared/logger/logger.module';
import { RealtimeModule }
from './modules/realtime/realtime.module';
import { ProductModule } from "./modules/product/product.module";
import { CategoryModule } from "./modules/category/category.module";
import { CartModule } from "./modules/cart/cart.module";
import { WishlistModule } from "./modules/wishlist/wishlist.module";
import { AddressModule } from "./modules/address/address.module";
import { CmsModule } from "./modules/cms/cms.module";
import { CouponModule } from "./modules/coupon/coupon.module";
import { DeliveryModule } from "./modules/delivery/delivery.module";
import { ProductReviewModule } from "./modules/product-review/product-review.module";
import { SettingsModule } from "./modules/settings/settings.module";
import { RecommendationModule } from "./modules/recommendation/recommendation.module";
import { PersonalizationModule } from "./modules/personalization/personalization.module";
import { ExperimentsModule } from "./modules/experiments/experiments.module";
import { ReferralModule } from "./modules/referral/referral.module";
import { LoyaltyModule } from "./modules/loyalty/loyalty.module";
import { MembershipModule } from "./modules/membership/membership.module";
import { VendorModule } from "./modules/vendor/vendor.module";
import { ReturnsModule } from "./modules/returns/returns.module";
import { InvoiceModule } from "./modules/invoice/invoice.module";
import { TaxModule } from "./modules/tax/tax.module";
import { OffersModule } from "./modules/offers/offers.module";
import { ReservationModule } from "./modules/reservation/reservation.module";
import { TrackingModule } from "./modules/tracking/tracking.module";
import { SupportModule } from "./modules/support/support.module";
import { CommunicationModule } from "./modules/communication/communication.module";
import { CampaignModule } from "./modules/campaign/campaign.module";
import { ContentModule } from "./modules/content/content.module";
import { PayoutModule } from "./modules/payout/payout.module";
import { FeatureFlagModule } from "./modules/feature-flag/feature-flag.module";
import { ActivityModule } from "./modules/activity/activity.module";
import { WarehouseModule } from "./modules/warehouse/warehouse.module";
import { SlotModule } from "./modules/slot/slot.module";
import { SeoModule } from "./modules/seo/seo.module";
import { PermissionModule } from "./modules/permission/permission.module";
import { HealthModule } from "./modules/health/health.module";
import { StorageModule } from './modules/storage/storage.module';
import { DealerAuthModule }
from './modules/dealer-auth/dealer-auth.module';
import { AdminAuthModule }
from './modules/admin-auth/admin-auth.module';







@Module({
  imports: [


    /* ENV CONFIG */
    ConfigModule.forRoot({
      isGlobal: true,
     
      load: [
        appConfig,
        databaseConfig,
        jwtConfig,
        redisConfig,
      ],

      validationSchema,
    }),

  BullModule.forRoot({
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379,
  },
}),


    /* RATE LIMIT */
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),

    /* CORE */
    PrismaModule,
    AuthModule,
    DealerAuthModule,
    AdminAuthModule,

     HealthModule,


   


    /* PAYMENTS */
    PaymentsModule,

    /* USER FLOWS */
    UserModule,
    BuyModule,
    SellModule,
    RepairModule,
    PricingModule,

    /* BUSINESS */
    DealerModule,
    LeadModule,
    OrdersModule,
    InventoryModule,

    /* SYSTEM */
    WalletModule,
    AdminModule,
    AnalyticsModule,
    NotificationModule,
    ChatModule,
    ReviewModule,
    SubscriptionModule,
    CommissionModule,
    MatchingModule,
    SearchModule,
  UploadsModule,
  InspectionModule,
  GeoModule,
  FraudModule,
  CrmModule,
  AuditModule,
  QueueModule,
  SocketModule,
  LoggerModule,
  RealtimeModule,
  ProductModule,
  CategoryModule,
  CartModule,
  WishlistModule,
  AddressModule,
  CmsModule,
  CouponModule,
  DeliveryModule,
  ProductReviewModule,
  SettingsModule,
  RecommendationModule,
  PersonalizationModule,
  ExperimentsModule,
  ReferralModule,
  LoyaltyModule,
  MembershipModule,
  VendorModule,
  ReturnsModule,
  InvoiceModule,
  TaxModule,
  OffersModule,
  ReservationModule,
  TrackingModule,
  SupportModule,
  CommunicationModule,
  CampaignModule,
  ContentModule,
  PayoutModule,
  FeatureFlagModule,
  ActivityModule,
  WarehouseModule,
  SlotModule,
  SeoModule,
  PermissionModule,
  StorageModule,
  ],

  controllers: [
    AppController,
  ],

  providers: [
    AppService,
  ],
})

export class AppModule implements NestModule {

 
  configure(
    consumer: MiddlewareConsumer,
  ) {

    consumer
      .apply(
        RequestLoggerMiddleware,
      )
      .forRoutes('*');
  }
}