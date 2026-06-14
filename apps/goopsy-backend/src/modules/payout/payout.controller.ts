import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { PayoutService } from './payout.service';

import { CreatePayoutDto } from './dto/create-payout.dto';

import { UpdatePayoutDto } from './dto/update-payout.dto';

@Controller('payouts')
export class PayoutController {
  constructor(
    private readonly payoutService: PayoutService,
  ) {}

  @Post()
  async create(
    @Body() body: CreatePayoutDto,
  ) {
    return this.payoutService.create(body);
  }

  @Get()
  async findAll() {
    return this.payoutService.findAll();
  }

  @Get('dealer/:dealerId')
  async findByDealer(
    @Param('dealerId') dealerId: string,
  ) {
    return this.payoutService.findByDealer(
      dealerId,
    );
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.payoutService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdatePayoutDto,
  ) {
    return this.payoutService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.payoutService.delete(id);
  }
}