import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageWorker {
  async processImage() {
    return true;
  }
}