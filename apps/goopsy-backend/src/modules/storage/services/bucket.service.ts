import { Injectable, OnModuleInit } from '@nestjs/common';
import { MinioService } from './minio.service';

@Injectable()
export class BucketService implements OnModuleInit {
  constructor(
    private readonly minioService: MinioService,
  ) {}

  async onModuleInit() {
    const buckets = [
      'product-images',
      'dealer-kyc',
      'repair-media',
      'chat-media',
      'invoice-pdfs',
      'customer-profiles',
      'admin-assets',
    ];

    for (const bucket of buckets) {
      const exists =
        await this.minioService
  .getClient()
  .bucketExists(bucket);

      if (!exists) {
        await this.minioService
  .getClient()
  .makeBucket(
          bucket,
          'us-east-1',
        );
      }
    }
  }
}