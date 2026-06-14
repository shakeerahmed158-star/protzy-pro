import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectQueue } from '@nestjs/bullmq';

import { Queue } from 'bullmq';

import { QueueRepository } from './queue.repository';

import { CreateQueueDto } from './dto/create-queue.dto';
import { UpdateQueueDto } from './dto/update-queue.dto';
import { QueueQueryDto } from './dto/queue-query.dto';

@Injectable()
export class QueueService {
  constructor(
    private readonly queueRepository: QueueRepository,

    @InjectQueue('notifications')
    private readonly notificationQueue: Queue,
  ) {}

  async create(dto: CreateQueueDto) {
    const response =
  await this.queueRepository.create(dto);

const queueData = response.data;

    await this.notificationQueue.add(
      dto.jobName,
      {
        id: queueData,
        payload: dto.payload,
      },
      {
        attempts: 3,

        backoff: {
          type: 'exponential',
          delay: 3000,
        },

        removeOnComplete: true,

        removeOnFail: false,
      },
    );

    return {
      success: true,
      message: 'Queue job created',
      data: queueData,
    };
  }

  async findAll(
    query: QueueQueryDto,
  ) {
   const response =
  await this.queueRepository.findAll(query);

const queues = response || [];

    return {
      success: true,
      count: queues,
      data: queues,
    };
  }

  async findOne(id: string) {
    const response =
  await this.queueRepository.findById(id);

const queue = response

    if (!queue) {
      throw new NotFoundException(
        'Queue not found',
      );
    }

    return {
      success: true,
      data: queue,
    };
  }

  async update(
    id: string,
    dto: UpdateQueueDto,
  ) {
   const response =
  await this.queueRepository.findById(id);

const existingQueue = response

    if (!existingQueue) {
      throw new NotFoundException(
        'Queue not found',
      );
    }

   const updatedResponse =
  await this.queueRepository.update(
    id,
    dto,
  );

const updatedQueue =
  updatedResponse.data;

    return {
      success: true,
      message: 'Queue updated',
      data: updatedQueue,
    };
  }

  async remove(id: string) {
   const response =
  await this.queueRepository.findById(id);

const existingQueue =
  response

    if (!existingQueue) {
      throw new NotFoundException(
        'Queue not found',
      );
    }

    await this.queueRepository.delete(id);

    return {
      success: true,
      message: 'Queue deleted',
    };
  }

  async addNotificationJob(
    jobName: string,
    payload: any,
  ) {
    return this.notificationQueue.add(
      jobName,
      payload,
      {
        attempts: 5,

        backoff: {
          type: 'exponential',
          delay: 5000,
        },

        priority: 1,

        removeOnComplete: 100,

        removeOnFail: 50,
      },
    );
  }
}