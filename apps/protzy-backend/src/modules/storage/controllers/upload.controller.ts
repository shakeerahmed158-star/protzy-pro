import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { UploadService } from '../services/upload.service';
import { UploadFileDto } from '../dto/upload-file.dto';

@Controller('storage')
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @Body() dto: UploadFileDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.uploadService.uploadFile(
      dto.bucket,
      file,
    );
  }
}