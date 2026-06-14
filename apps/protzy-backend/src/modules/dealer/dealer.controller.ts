import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Get,
  Patch,
  Param,
  Query,
} from '@nestjs/common';

import { DealerService } from './dealer.service';

import { JwtAuthGuard } from '../../shared/auth/guards/jwt-auth.guard';

import { CreateDealerDto } from './dto/create-dealer.dto';
import { FilterDealerDto } from './dto/filter-dealer.dto';
import { ApproveDealerDto } from './dto/dealer-approve.dto';

@Controller('dealer')
export class DealerController {
  constructor(
    private readonly dealerService: DealerService,
  ) {}

  // 🔥 APPLY DEALER
  @UseGuards(JwtAuthGuard)
  @Post('apply')
  applyDealer(
    @Req() req: any,
    @Body() body: CreateDealerDto,
  ) {
    return this.dealerService.applyDealer(
      req.user.id,
      body,
    );
  }

  // 📋 GET ALL DEALERS
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(
    @Query() filters: FilterDealerDto,
  ) {
    return this.dealerService.findAll(
      filters,
    );
  }

  // 👤 GET MY PROFILE
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMyDealer(@Req() req: any) {
    return this.dealerService.getMyDealer(
      req.user.id,
    );
  }

  // 📦 GET SINGLE DEALER
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.dealerService.findOne(id);
  }

  // ✅ APPROVE DEALER
  @UseGuards(JwtAuthGuard)
  @Patch('approve/:id')
  approve(
    @Param('id') id: string,
    @Body() body: ApproveDealerDto,
  ) {
    return this.dealerService.approveDealer(
      id,
      body,
    );
  }

  // ❌ REJECT DEALER
  @UseGuards(JwtAuthGuard)
  @Patch('reject/:id')
  reject(@Param('id') id: string) {
    return this.dealerService.rejectDealer(
      id,
    );
  }
}