import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { MatchingService } from './matching.service';

import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { MatchQueryDto } from './dto/match-query.dto';

@Controller('matching')
export class MatchingController {
  constructor(
    private readonly matchingService: MatchingService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateMatchDto,
  ) {
    return this.matchingService.create(dto);
  }

  @Get()
  findAll(
    @Query() query: MatchQueryDto,
  ) {
    return this.matchingService.findAll(query);
  }

  @Get(':id')
  findById(
    @Param('id') id: string,
  ) {
    return this.matchingService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateMatchDto,
  ) {
    return this.matchingService.update(
      id,
      dto,
    );
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ) {
    return this.matchingService.delete(id);
  }
}