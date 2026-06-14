import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { MinioService } from './minio.service';

@Injectable()
export class UploadService {
  constructor(
    private readonly minioService: MinioService,
  ) {}

  async uploadFile(
    bucket: string,
    file: Express.Multer.File,
  ) {
    const fileName =
      `${randomUUID()}-${file.originalname}`;

    await this.minioService
  .getClient()
  .putObject(
      bucket,
      fileName,
      file.buffer,
      file.size,
      {
        'Content-Type': file.mimetype,
      },
    );

    return {
      bucket,
      fileName,
    };
  }
}