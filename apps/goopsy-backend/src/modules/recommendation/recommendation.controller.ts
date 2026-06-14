import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { RecommendationService } from './recommendation.service';

import { CreateRecommendationDto } from './dto/create-recommendation.dto';

import { UpdateRecommendationDto } from './dto/update-recommendation.dto';

@Controller('recommendations')
export class RecommendationController {
  constructor(
    private readonly recommendationService: RecommendationService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateRecommendationDto,
  ) {
    return this.recommendationService.create(body);
  }

  @Get()
  async findAll() {
    return this.recommendationService.findAll();
  }

  @Get('user/:userId')
  async findByUser(
    @Param('userId') userId: string,
  ) {
    return this.recommendationService.findByUser(userId);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.recommendationService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateRecommendationDto,
  ) {
    return this.recommendationService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.recommendationService.delete(id);
  }
}