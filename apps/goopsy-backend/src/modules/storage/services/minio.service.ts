import {
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';

import { Client } from 'minio';

@Injectable()
export class MinioService implements OnModuleInit {
  private readonly logger = new Logger(MinioService.name);

  private client: Client;

  async onModuleInit() {
    this.client = new Client({
      endPoint: process.env.MINIO_ENDPOINT!,
      port: Number(process.env.MINIO_PORT),
      useSSL: process.env.MINIO_USE_SSL === 'true',

      accessKey: process.env.MINIO_ACCESS_KEY!,
      secretKey: process.env.MINIO_SECRET_KEY!,
    });

    try {
      await this.client.listBuckets();

      this.logger.log(
        'MinIO connection established successfully',
      );
    } catch (error) {
      this.logger.error(
        'Failed to connect to MinIO',
        error,
      );

      throw error;
    }
  }

  getClient(): Client {
    return this.client;
  }
}