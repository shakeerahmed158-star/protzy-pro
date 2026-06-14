import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { DealerRepository } from '../dealer/dealer.repository';

@Injectable()
export class DealerAuthService {
  constructor(
    private readonly dealerRepository: DealerRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(
    dealerCode: string,
    password: string,
  ) {
    const dealer =
      await this.dealerRepository.findByDealerCode(
        dealerCode,
      );

    if (!dealer) {
      throw new UnauthorizedException(
        'Invalid dealer code',
      );
    }

    if (!dealer.passwordHash) {
      throw new UnauthorizedException(
        'Dealer account is not activated',
      );
    }

    const valid = await bcrypt.compare(
      password,
      dealer.passwordHash,
    );

    if (!valid) {
      throw new UnauthorizedException(
        'Invalid password',
      );
    }

    const token = this.jwtService.sign({
      dealerId: dealer.id,
      dealerCode: dealer.dealerCode,
      type: dealer.type,
    });

    return {
      success: true,

      accessToken: token,

      dealer: {
        id: dealer.id,
        shopName: dealer.shopName,
        ownerName: dealer.ownerName,
        dealerCode: dealer.dealerCode,
        contactNumber:
          dealer.contactNumber,
        type: dealer.type,
        status: dealer.status,
        city: dealer.city,
        area: dealer.area,
      },
    };
  }
}