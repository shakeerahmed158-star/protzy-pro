import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';

import { LeadService } from './lead.service';

import { JwtAuthGuard } from '../../shared/auth/guards/jwt-auth.guard';

import { DealerTypeGuard } from '../../common/guards/dealer-type.guard';

import { DealerTypes } from '../../common/decorators/dealer-type.decorator';

import { CreateLeadDto } from './dto/create-lead.dto';
import { AssignLeadDto } from './dto/assign-lead.dto';
import { FilterLeadDto } from './dto/filter-lead.dto';

@Controller('lead')
export class LeadController {
  constructor(
    private readonly leadService: LeadService,
  ) {}

  // 🚀 CREATE LEAD
@Post('create')
async create(
  @Body() body: any,
) {

  console.log("LEAD BODY 👉", body);

  return {
    success: true,
    message: "Lead created successfully",
  };
}

  // 📦 GET ALL LEADS
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(
    @Query() filters: FilterLeadDto,
  ) {
    return this.leadService.findAll(filters);
  }

  // 📦 GET SINGLE LEAD
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.leadService.findOne(id);
  }

  // 🎯 ASSIGN DEALER
  @UseGuards(JwtAuthGuard)
  @Patch('assign/:id')
  assign(
    @Param('id') id: string,
    @Body() body: AssignLeadDto,
  ) {
    return this.leadService.assignDealer(
      id,
      body.dealerId,
    );
  }

  // 🔒 CLOSE LEAD
  @UseGuards(JwtAuthGuard)
  @Patch('close/:id')
  close(@Param('id') id: string) {
    return this.leadService.closeLead(id);
  }

  // 📥 DEALER LEADS
  @UseGuards(JwtAuthGuard, DealerTypeGuard)
  @DealerTypes('BUY')
  @Get('dealer/my')
  getDealerLeads(@Req() req: any) {
    return this.leadService.getDealerLeads(
      req.user.id,
    );
  }

  // ✅ ACCEPT LEAD
  @UseGuards(JwtAuthGuard, DealerTypeGuard)
  @DealerTypes('BUY')
  @Patch('accept/:id')
  accept(
    @Param('id') id: string,
    @Req() req: any,
  ) {
    return this.leadService.acceptLead(
      id,
      req.user.id,
    );
  }

  // ❌ REJECT LEAD
  @UseGuards(JwtAuthGuard, DealerTypeGuard)
  @DealerTypes('BUY')
  @Patch('reject/:id')
  reject(
    @Param('id') id: string,
    @Req() req: any,
  ) {
    return this.leadService.rejectLead(
      id,
      req.user.id,
    );
  }
}