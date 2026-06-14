import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { CreateUploadsDto } from './dto/create-uploads.dto';
import { UpdateUploadsDto } from './dto/update-uploads.dto';
import { UploadsQueryDto } from './dto/uploads-query.dto';

@Injectable()
export class UploadsRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: CreateUploadsDto) {
    return {
      message: 'Upload created successfully',
      data,
    };
  }

  async findAll(query?: UploadsQueryDto) {
    return {
      message: 'Uploads fetched successfully',
      query,
    };
  }

  async findById(id: string) {
    return {
      message: 'Upload fetched successfully',
      id,
    };
  }

  async update(
    id: string,
    data: UpdateUploadsDto,
  ) {
    return {
      message: 'Upload updated successfully',
      id,
      data,
    };
  }

  async delete(id: string) {
    return {
      message: 'Upload deleted successfully',
      id,
    };
  }
}