import { Injectable } from '@nestjs/common';
import { MinioService } from './minio.service';

@Injectable()
export class SignedUrlService {
  constructor(
    private readonly minioService: MinioService,
  ) {}

  async getSignedUrl(
    bucket: string,
    objectName: string,
  ) {
    return this.minioService
  .getClient()
  .presignedGetObject(
      bucket,
      objectName,
      24 * 60 * 60,
    );
  }
}