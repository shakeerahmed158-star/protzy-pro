import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Query } from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { PricingEngineService } from '../services/pricing-engine.service';

import { PricingUploadService } from '../services/pricing-upload.service';

import { CalculatePriceDto } from '../dto/calculate-price.dto';
import { Express } from 'express';




@Controller('pricing')
export class PricingController {

  constructor(
    private readonly pricingEngineService: PricingEngineService,
    private readonly pricingUploadService: PricingUploadService,
  ) {}

 @Post('calculate')
async calculatePrice(
  @Body() dto: CalculatePriceDto,
) {

  console.log("DTO RECEIVED 👉", dto);

  const result =
    await this.pricingEngineService.calculatePrice(dto);

  console.log("FINAL RESULT 👉", result);

  return result;
}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadPricing(
    @UploadedFile() file: any,
  ) {
    return this.pricingUploadService.upload(file);
  }

}