import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { DealerStatus } from '@prisma/client';
import { DealerRepository } from './dealer.repository';
import { CreateDealerDto } from './dto/create-dealer.dto';
import { UpdateDealerDto } from './dto/update-dealer.dto';
import { FilterDealerDto } from './dto/filter-dealer.dto';
import { ApproveDealerDto } from './dto/dealer-approve.dto';


@Injectable()
export class DealerService {
  constructor(
    private readonly dealerRepository: DealerRepository,
  ) {}

  // 🔥 APPLY DEALER
  async applyDealer(
    userId: string,
    dto: CreateDealerDto,
  ) {
    const existing =
      await this.dealerRepository.findByUserId(
        userId,
      );

    if (existing) {
      throw new BadRequestException(
        'Dealer already exists',
      );
    }

return this.dealerRepository.create({
  userId,

  ownerName: dto.ownerName,
  contactNumber: dto.contactNumber,
  alternateNumber: dto.alternateNumber,

  shopName: dto.shopName,
  gstNumber: dto.gstNumber,

  panNumber: dto.panNumber,
  aadhaarNumber: dto.aadhaarNumber,
  profilePhoto: dto.profilePhoto,

  state: dto.state,
  city: dto.city,
  area: dto.area,
  pincode: dto.pincode,
  address: dto.address,

  type: dto.type,

  status: 'PENDING',
  kycSubmitted: true,
});
  }

  // 📋 GET ALL DEALERS
  async findAll(
    filters: FilterDealerDto,
  ) {
    return this.dealerRepository.findAll(
      filters,
    );
  }

  // 👤 GET MY DEALER
  async getMyDealer(
    userId: string,
  ) {
    const dealer =
      await this.dealerRepository.findByUserId(
        userId,
      );

    if (!dealer) {
      throw new NotFoundException(
        'Dealer not found',
      );
    }

    return dealer;
  }

  // 📦 GET SINGLE DEALER
  async findOne(id: string) {
    const dealer =
      await this.dealerRepository.findById(
        id,
      );

    if (!dealer) {
      throw new NotFoundException(
        'Dealer not found',
      );
      
    }

    return dealer;
    
  }

 // ✅ APPROVE DEALER
async approveDealer(
  dealerId: string,
  dto: ApproveDealerDto,
) {
  const dealer =
    await this.dealerRepository.findById(
      dealerId.trim(),
    );

  if (!dealer) {
    throw new NotFoundException(
      'Dealer not found',
    );
  }

 const dealerCode = `GP${Math.floor(
  100000 + Math.random() * 900000,
)}`;

const tempPassword =
  Math.random()
    .toString(36)
    .slice(-8)
    .toUpperCase();

const passwordHash =
  await bcrypt.hash(
    tempPassword,
    10,
  );

const approvedDealer =
  await this.dealerRepository.update(
    dealer.id,
    {
      status:
        DealerStatus.APPROVED,

      dealerCode,

      passwordHash,

      kycVerified: true,

      approvalNote:
        dto.approvalNote || null,
    },
  );

return {
  success: true,

  message:
    'Dealer approved successfully',

  credentials: {
    dealerCode,
    password: tempPassword,
  },

  dealer: approvedDealer,
};
}

  // ❌ REJECT DEALER
  async rejectDealer(
    dealerId: string,
  ) {
    const dealer =
      await this.dealerRepository.findById(
        dealerId,
      );

    if (!dealer) {
      throw new NotFoundException(
        'Dealer not found',
      );
    }

    return this.dealerRepository.update(
      dealerId,
      {
        status:
          DealerStatus.REJECTED,
      },
    );
  }

  // ✏️ UPDATE DEALER
  async update(
    id: string,
    dto: UpdateDealerDto,
  ) {
    return this.dealerRepository.update(
      id,
      dto,
    );
  }

  // 🗑️ DELETE DEALER
  async remove(id: string) {
    return this.dealerRepository.delete(
      id,
    );
  }
}