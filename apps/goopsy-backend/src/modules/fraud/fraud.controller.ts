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

import { FraudService } from './fraud.service';

import { CreateFraudDto } from './dto/create-fraud.dto';
import { UpdateFraudDto } from './dto/update-fraud.dto';
import { FraudQueryDto } from './dto/fraud-query.dto';

@Controller('fraud')
export class FraudController {
  constructor(
    private readonly fraudService: FraudService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateFraudDto,
  ) {
    return this.fraudService.create(dto);
  }

  @Get()
  findAll(
    @Query() query: FraudQueryDto,
  ) {
    return this.fraudService.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.fraudService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateFraudDto,
  ) {
    return this.fraudService.update(id, dto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
  ) {
    return this.fraudService.remove(id);
  }
}