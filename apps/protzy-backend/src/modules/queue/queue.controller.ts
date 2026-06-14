import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { QueueService } from './queue.service';

import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';
import { QueueQueryDto } from './dto/queue-query.dto';

@Controller({
  path: 'queue',
  version: '1',
})

export class QueueController {
  constructor(
    private readonly queueService: QueueService,
  ) {}

  /**
   * CREATE QUEUE
   */
  @Post()

  @HttpCode(HttpStatus.CREATED)

  async create(
    @Body() dto: CreateQueueDto,
  ) {
    return this.queueService.create(dto);
  }

  /**
   * GET ALL QUEUES
   */
  @Get()

  async findAll(
    @Query() query: QueueQueryDto,
  ) {
    return this.queueService.findAll(query);
  }

  /**
   * GET SINGLE QUEUE
   */
  @Get(':id')

  async findOne(
    @Param('id') id: string,
  ) {
    return this.queueService.findOne(id);
  }

  /**
   * UPDATE QUEUE
   */
  @Patch(':id')

  async update(
    @Param('id') id: string,
    @Body() dto: UpdateQueueDto,
  ) {
    return this.queueService.update(
      id,
      dto,
    );
  }

  /**
   * DELETE QUEUE
   */
  @Delete(':id')

  @HttpCode(HttpStatus.OK)

  async remove(
    @Param('id') id: string,
  ) {
    return this.queueService.remove(id);
  }

  /**
   * HEALTH CHECK
   */
  @Get('health/check')

  async healthCheck() {
    return {
      success: true,
      module: 'QUEUE',
      status: 'RUNNING',
      timestamp:
        new Date().toISOString(),
    };
  }
}