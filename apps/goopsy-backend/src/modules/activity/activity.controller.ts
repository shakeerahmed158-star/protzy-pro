import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ActivityService } from './activity.service';

import { CreateActivityDto } from './dto/create-activity.dto';

import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activities')
export class ActivityController {
  constructor(
    private readonly activityService: ActivityService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateActivityDto,
  ) {
    return this.activityService.create(body);
  }

  @Get()
  async findAll() {
    return this.activityService.findAll();
  }

  @Get('user/:userId')
  async findByUser(
    @Param('userId') userId: string,
  ) {
    return this.activityService.findByUser(userId);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.activityService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateActivityDto,
  ) {
    return this.activityService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.activityService.delete(id);
  }
}