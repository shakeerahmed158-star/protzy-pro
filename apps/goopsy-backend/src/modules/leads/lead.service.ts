import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { WorkflowStatus } from '@prisma/client';

import { LeadRepository } from './lead.repository';

import { CreateLeadDto } from './dto/create-lead.dto';
import { FilterLeadDto } from './dto/filter-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';

import { PricingEngineService } from '../pricing/services/pricing-engine.service';

@Injectable()
export class LeadService {
  constructor(
    private readonly leadRepository: LeadRepository,

    private readonly pricingEngineService:
      PricingEngineService,
  ) {}

  /////////////////////////////////////////////////////////
  // 🚀 CREATE LEAD
  /////////////////////////////////////////////////////////

async createLead(
  userId: string | null,
  dto: CreateLeadDto,
){

    /////////////////////////////////////////////////////////
    // DTO VALUES
    /////////////////////////////////////////////////////////

    const {
      brand,
      model,
      variant,
      storage,
      condition,
    } = dto;

    /////////////////////////////////////////////////////////
    // VALIDATION
    /////////////////////////////////////////////////////////

    if (
      !brand ||
      !model ||
      !condition
    ) {
      throw new BadRequestException(
        'Missing required fields',
      );
    }

    /////////////////////////////////////////////////////////
    // PRICE ENGINE
    /////////////////////////////////////////////////////////

    const pricingResult =
      await this.pricingEngineService.calculatePrice({
        brand,
        model,
        variant,
        storage,
        condition,
      } as any);

    if (!pricingResult?.success) {
      throw new BadRequestException(
        'Unable to calculate price',
      );
    }

    /////////////////////////////////////////////////////////
    // FINAL EVALUATED PRICE
    /////////////////////////////////////////////////////////

    const evaluatedPrice =
      Number(
        pricingResult?.pricing
          ?.evaluatedPrice || 0,
      );

    /////////////////////////////////////////////////////////
    // GOOPSY MARGIN
    /////////////////////////////////////////////////////////

    const margin =
      this.calculateMargin(
        evaluatedPrice,
      );

    /////////////////////////////////////////////////////////
    // CUSTOMER PRICE
    /////////////////////////////////////////////////////////

    const customerPrice =
      Math.max(
        evaluatedPrice - margin,
        0,
      );

    /////////////////////////////////////////////////////////
    // DEALER PRICE
    /////////////////////////////////////////////////////////

    const dealerPrice =
      evaluatedPrice;

    /////////////////////////////////////////////////////////
    // CREATE LEAD
    /////////////////////////////////////////////////////////

    const lead =
      await this.leadRepository.create({
       userId: userId || undefined,

        /////////////////////////////////////////////////////////
        // DEVICE
        /////////////////////////////////////////////////////////

        brand,
        model,

        variant:
          variant || null,

        storage:
          storage || null,

        condition,

        /////////////////////////////////////////////////////////
        // LOCATION
        /////////////////////////////////////////////////////////

        city:
          dto.city || null,

        area:
          dto.area || null,

        pincode:
          dto.pincode || null,

        /////////////////////////////////////////////////////////
        // MEDIA
        /////////////////////////////////////////////////////////

        images:
          dto.images || [],

        /////////////////////////////////////////////////////////
        // PRICING
        /////////////////////////////////////////////////////////

        expectedPrice:
          customerPrice,

        customerPrice,

        dealerPrice,

        margin,

        /////////////////////////////////////////////////////////
        // STATUS
        /////////////////////////////////////////////////////////

        status:
          WorkflowStatus.PENDING,
      });

    /////////////////////////////////////////////////////////
    // FIND MATCHING DEALERS
    /////////////////////////////////////////////////////////

    const dealers =
      await this.leadRepository.findMatchingDealers(
        model,
        condition,
      );

    /////////////////////////////////////////////////////////
    // AUTO ASSIGN DEALER
    /////////////////////////////////////////////////////////

    if (dealers.length > 0) {

      const bestDealer =
        dealers[0];

      return this.leadRepository.update(
        lead.id,
        {
          dealerId:
            bestDealer.dealerId,

          status:
            WorkflowStatus.ASSIGNED,
        },
      );
    }

    /////////////////////////////////////////////////////////
    // RETURN LEAD
    /////////////////////////////////////////////////////////

    return lead;
  }

  /////////////////////////////////////////////////////////
  // 💰 MARGIN ENGINE
  /////////////////////////////////////////////////////////

  private calculateMargin(
    amount: number,
  ): number {

    /////////////////////////////////////////////////////////
    // LOW VALUE
    /////////////////////////////////////////////////////////

    if (amount <= 5000) {
      return 500;
    }

    /////////////////////////////////////////////////////////
    // MID RANGE
    /////////////////////////////////////////////////////////

    if (amount <= 10000) {
      return 1000;
    }

    /////////////////////////////////////////////////////////
    // PREMIUM
    /////////////////////////////////////////////////////////

    if (amount <= 30000) {
      return 1500;
    }

    /////////////////////////////////////////////////////////
    // FLAGSHIP
    /////////////////////////////////////////////////////////

    return 2500;
  }

  /////////////////////////////////////////////////////////
  // 📦 GET ALL LEADS
  /////////////////////////////////////////////////////////

  async findAll(
    filters: FilterLeadDto,
  ) {
    return this.leadRepository.findAll(
      filters,
    );
  }

  /////////////////////////////////////////////////////////
  // 📦 GET SINGLE LEAD
  /////////////////////////////////////////////////////////

  async findOne(id: string) {

    const lead =
      await this.leadRepository.findById(
        id,
      );

    if (!lead) {
      throw new NotFoundException(
        'Lead not found',
      );
    }

    return lead;
  }

  /////////////////////////////////////////////////////////
  // 📥 DEALER LEADS
  /////////////////////////////////////////////////////////

  async getDealerLeads(
    userId: string,
  ) {

    const dealer =
      await this.leadRepository.findDealerByUserId(
        userId,
      );

    if (!dealer) {
      throw new NotFoundException(
        'Dealer not found',
      );
    }

    return this.leadRepository.findDealerLeads(
      dealer.id,
    );
  }

  /////////////////////////////////////////////////////////
  // 🎯 ASSIGN DEALER
  /////////////////////////////////////////////////////////

  async assignDealer(
    leadId: string,
    dealerId: string,
  ) {

    const lead =
      await this.leadRepository.findById(
        leadId,
      );

    if (!lead) {
      throw new NotFoundException(
        'Lead not found',
      );
    }

    return this.leadRepository.update(
      leadId,
      {
        dealerId,

        status:
          WorkflowStatus.ASSIGNED,
      },
    );
  }

  /////////////////////////////////////////////////////////
  // ✅ ACCEPT LEAD
  /////////////////////////////////////////////////////////

  async acceptLead(
    leadId: string,
    userId: string,
  ) {

    /////////////////////////////////////////////////////////
    // FIND DEALER
    /////////////////////////////////////////////////////////

    const dealer =
      await this.leadRepository.findDealerByUserId(
        userId,
      );

    if (!dealer) {
      throw new NotFoundException(
        'Dealer not found',
      );
    }

    /////////////////////////////////////////////////////////
    // FIND LEAD
    /////////////////////////////////////////////////////////

    const lead =
      await this.leadRepository.findById(
        leadId,
      );

    if (!lead) {
      throw new NotFoundException(
        'Lead not found',
      );
    }

    /////////////////////////////////////////////////////////
    // SECURITY CHECK
    /////////////////////////////////////////////////////////

    if (
      lead.dealerId &&
      lead.dealerId !== dealer.id
    ) {
      throw new BadRequestException(
        'Unauthorized dealer',
      );
    }

    /////////////////////////////////////////////////////////
    // PREVENT DUPLICATE ACCEPT
    /////////////////////////////////////////////////////////

    if (
      lead.status ===
      WorkflowStatus.CONFIRMED
    ) {
      throw new BadRequestException(
        'Lead already accepted',
      );
    }

    /////////////////////////////////////////////////////////
    // CREATE ORDER
    /////////////////////////////////////////////////////////

    const order =
      await this.leadRepository.createOrder({
        leadId:
          lead.id,

        /////////////////////////////////////////////////////////
        // DEALER BUY PRICE
        /////////////////////////////////////////////////////////

        price:
          Number(
            lead.dealerPrice || 0,
          ),

        /////////////////////////////////////////////////////////
        // GOOPSY PROFIT
        /////////////////////////////////////////////////////////

        platformFee:
          Number(
            lead.platformMargin || 0,
          ),

        /////////////////////////////////////////////////////////
        // DEALER VALUE
        /////////////////////////////////////////////////////////

        dealerEarning:
          Number(
            lead.dealerPrice || 0,
          ),

        /////////////////////////////////////////////////////////
        // STATUS
        /////////////////////////////////////////////////////////

        status:
          WorkflowStatus.CONFIRMED,
      });

    /////////////////////////////////////////////////////////
    // UPDATE LEAD
    /////////////////////////////////////////////////////////

    await this.leadRepository.update(
      leadId,
      {
        dealerId:
          dealer.id,

        status:
          WorkflowStatus.CONFIRMED,
      },
    );

    /////////////////////////////////////////////////////////
    // RESPONSE
    /////////////////////////////////////////////////////////

    return {
      success: true,

      message:
        'Lead accepted successfully',

      order,
    };
  }

  /////////////////////////////////////////////////////////
  // ❌ REJECT LEAD
  /////////////////////////////////////////////////////////

  async rejectLead(
    leadId: string,
    userId: string,
  ) {

    const dealer =
      await this.leadRepository.findDealerByUserId(
        userId,
      );

    if (!dealer) {
      throw new NotFoundException(
        'Dealer not found',
      );
    }

    const lead =
      await this.leadRepository.findById(
        leadId,
      );

    if (!lead) {
      throw new NotFoundException(
        'Lead not found',
      );
    }

    return this.leadRepository.update(
      leadId,
      {
        status:
          WorkflowStatus.REJECTED,
      },
    );
  }

  /////////////////////////////////////////////////////////
  // 🔒 CLOSE LEAD
  /////////////////////////////////////////////////////////

  async closeLead(
    leadId: string,
  ) {

    const lead =
      await this.leadRepository.findById(
        leadId,
      );

    if (!lead) {
      throw new NotFoundException(
        'Lead not found',
      );
    }

    return this.leadRepository.update(
      leadId,
      {
        status:
          WorkflowStatus.PENDING,
      },
    );
  }

  /////////////////////////////////////////////////////////
  // ✏️ UPDATE LEAD
  /////////////////////////////////////////////////////////

  async update(
    id: string,
    dto: UpdateLeadDto,
  ) {
    return this.leadRepository.update(
      id,
      dto,
    );
  }

  /////////////////////////////////////////////////////////
  // 🗑️ DELETE LEAD
  /////////////////////////////////////////////////////////

  async remove(id: string) {
    return this.leadRepository.delete(
      id,
    );
  }
}