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

import { CommissionService } from '../services/commission.service';

import { CreateCommissionDto } from '../dto/create-commission.dto';
import { UpdateCommissionDto } from '../dto/update-commission.dto';
import { CommissionQueryDto } from '../dto/commission-query.dto';

@Controller('commissions')
export class CommissionController {
  constructor(
    private readonly service: CommissionService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateCommissionDto,
  ) {
    return this.service.create(dto);
  }

  @Get()
  findAll(
    @Query() query: CommissionQueryDto,
  ) {
    return this.service.findAll(query);
  }

  @Get(':id')
  findById(
    @Param('id') id: string,
  ) {
    return this.service.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCommissionDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ) {
    return this.service.delete(id);
  }

  @Get('dealer/:dealerId')
  dealerCommissions(
    @Param('dealerId') dealerId: string,
  ) {
    return this.service.dealerCommissions(
      dealerId,
    );
  }

  @Get('dealer/:dealerId/total')
  totalDealerCommission(
    @Param('dealerId') dealerId: string,
  ) {
    return this.service.totalDealerCommission(
      dealerId,
    );
  }
}