import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminAuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(
    username: string,
    password: string,
  ) {
    console.log('USERNAME:', username);
    console.log('PASSWORD:', password);

    const admin =
      await this.prisma.admin.findUnique({
        where: {
          username,
        },
      });

    console.log('ADMIN:', admin);

    if (!admin) {
      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    if (admin.password !== password) {
      console.log(
        'DB PASSWORD:',
        admin.password,
      );

      throw new UnauthorizedException(
        'Invalid credentials',
      );
    }

    const token =
      this.jwtService.sign({
        sub: admin.id,
        username: admin.username,
        role: admin.role,
      });

    return {
      success: true,
      token,
      admin,
    };
  }
}