import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  Req,
  Query,
  UseGuards,
} from '@nestjs/common';

import { SellService } from './sell.service';

import { JwtAuthGuard } from '../../shared/auth/guards/jwt-auth.guard';

import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { FilterSellDto } from './dto/filter-sell.dto';

@Controller('sell')
export class SellController {
  constructor(
    private readonly sellService: SellService,
  ) {}

  // 🚀 CREATE SELL LEAD
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createSellLead(
    @Req() req: any,
    @Body() body: CreateSellDto,
  ) {
    return this.sellService.createSellLead(
      req.user.id,
      body,
    );
  }

  // 📦 GET MY SELL LEADS
  @UseGuards(JwtAuthGuard)
  @Get('my')
  async getMySellLeads(
    @Req() req: any,
  ) {
    return this.sellService.getMySellLeads(
      req.user.id,
    );
  }

  // 📋 GET ALL SELL LEADS
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(
    @Query() filters: FilterSellDto,
  ) {
    return this.sellService.findAll(filters);
  }

  // 🔥 GET SINGLE LEAD
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getLead(
    @Param('id') id: string,
  ) {
    return this.sellService.getLeadById(id);
  }

  // ✏️ UPDATE SELL LEAD
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateSellLead(
    @Param('id') id: string,
    @Body() dto: UpdateSellDto,
  ) {
    return this.sellService.update(id, dto);
  }

  // 🗑️ DELETE SELL LEAD
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteSellLead(
    @Param('id') id: string,
  ) {
    return this.sellService.remove(id);
  }
}