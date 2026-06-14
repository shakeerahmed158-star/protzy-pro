import { Module } from '@nestjs/common';

import { UploadController } from './controllers/upload.controller';

import { MinioService } from './services/minio.service';
import { UploadService } from './services/upload.service';
import { BucketService } from './services/bucket.service';
import { SignedUrlService } from './services/signed-url.service';
import { ImageService } from './services/image.service';

import { FileSizeGuard } from './guards/file-size.guard';
import { FileTypeGuard } from './guards/file-type.guard';

import { ImageWorker } from './workers/image.worker';

@Module({
  controllers: [
    UploadController,
  ],

  providers: [
    MinioService,
    UploadService,
    BucketService,
    SignedUrlService,
    ImageService,

    FileSizeGuard,
    FileTypeGuard,

    ImageWorker,
  ],

  exports: [
    MinioService,
    UploadService,
    BucketService,
    SignedUrlService,
    ImageService,
  ],
})
export class StorageModule {}