import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { TrackingService } from './tracking.service';

import { CreateTrackingDto } from './dto/create-tracking.dto';

import { UpdateTrackingDto } from './dto/update-tracking.dto';

@Controller('tracking')
export class TrackingController {
  constructor(
    private readonly trackingService: TrackingService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateTrackingDto,
  ) {
    return this.trackingService.create(body);
  }

  @Get()
  async findAll() {
    return this.trackingService.findAll();
  }

  @Get('track/:trackingNumber')
  async findByTrackingNumber(
    @Param('trackingNumber')
    trackingNumber: string,
  ) {
    return this.trackingService.findByTrackingNumber(
      trackingNumber,
    );
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.trackingService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateTrackingDto,
  ) {
    return this.trackingService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.trackingService.delete(id);
  }
}