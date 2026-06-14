import { Injectable } from '@nestjs/common';

import { UploadService } from '../storage/services/upload.service';

@Injectable()
export class UploadsService {
  constructor(
    private readonly uploadService: UploadService,
  ) {}

  async upload(file: Express.Multer.File) {
    const result = await this.uploadService.uploadFile(
      'customer-profiles',
      file,
    );

    return {
      success: true,
      data: result,
    };
  }
}