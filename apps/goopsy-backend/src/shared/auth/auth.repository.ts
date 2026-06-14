import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  findUserByPhone(
    phone: string,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { phone },
    });
  }

  findUserById(
    id: string,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  createUser(
    phone: string,
  ): Promise<User> {
    return this.prisma.user.create({
      data: {
        phone,
        role: 'CUSTOMER',
      },
    });
  }

  updateOtp(
    phone: string,
    otp: string,
    otpExpiry: Date,
  ): Promise<User> {
    return this.prisma.user.upsert({
      where: { phone },

      update: {
        otp,
        otpExpiry,
      },

      create: {
        phone,
        role: 'CUSTOMER',
        otp,
        otpExpiry,
      },
    });
  }

  clearOtp(
    userId: string,
  ): Promise<User> {
    return this.prisma.user.update({
      where: {
        id: userId,
      },

      data: {
        otp: null,
        otpExpiry: null,
      },
    });
  }

async updateRefreshToken(
userId: string,
hashedRefreshToken: string,
): Promise<User> {
return this.prisma.user.update({
where: {
id: userId,
},

data: {
  hashedRefreshToken,
},

});
}

async clearRefreshToken(
userId: string,
): Promise<User> {
return this.prisma.user.update({
where: {
id: userId,
},

data: {
  hashedRefreshToken: null,
},

});
}

}