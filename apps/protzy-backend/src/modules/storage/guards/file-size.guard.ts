import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class FileSizeGuard {
  validate(file: Express.Multer.File) {
    const maxSize =
      20 * 1024 * 1024;

    if (file.size > maxSize) {
      throw new BadRequestException(
        'File exceeds size limit',
      );
    }

    return true;
  }
}