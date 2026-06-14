import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class FileTypeGuard {
  validate(file: Express.Multer.File) {
    const allowed = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'application/pdf',
    ];

    if (!allowed.includes(file.mimetype)) {
      throw new BadRequestException(
        'Invalid file type',
      );
    }

    return true;
  }
}