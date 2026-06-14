import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ReferralService } from './referral.service';

import { CreateReferralDto } from './dto/create-referral.dto';

import { UpdateReferralDto } from './dto/update-referral.dto';

@Controller('referrals')
export class ReferralController {
  constructor(
    private readonly referralService: ReferralService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateReferralDto,
  ) {
    return this.referralService.create(body);
  }

  @Get()
  async findAll() {
    return this.referralService.findAll();
  }

  @Get('code/:referralCode')
  async findByCode(
    @Param('referralCode') referralCode: string,
  ) {
    return this.referralService.findByCode(referralCode);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.referralService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateReferralDto,
  ) {
    return this.referralService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.referralService.delete(id);
  }
}