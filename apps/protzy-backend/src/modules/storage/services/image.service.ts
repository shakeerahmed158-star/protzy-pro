import { Injectable } from '@nestjs/common';
import sharp from 'sharp';

@Injectable()
export class ImageService {
  async optimize(buffer: Buffer) {
    return sharp(buffer)
      .resize({
        width: 1200,
        withoutEnlargement: true,
      })
      .jpeg({
        quality: 80,
      })
      .toBuffer();
  }
}