import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';
import { QueueQueryDto } from './dto/queue-query.dto';

@Injectable()
export class QueueRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: CreateQueueDto) {
    return {
      message: 'Queue job created successfully',
      data,
    };
  }

  async findAll(query?: QueueQueryDto) {
    return {
      message: 'Queue jobs fetched successfully',
      query,
    };
  }

  async findById(id: string) {
    return {
      message: 'Queue job fetched successfully',
      id,
    };
  }

  async update(
    id: string,
    data: UpdateQueueDto,
  ) {
    return {
      message: 'Queue job updated successfully',
      id,
      data,
    };
  }

  async delete(id: string) {
    return {
      message: 'Queue job deleted successfully',
      id,
    };
  }
}