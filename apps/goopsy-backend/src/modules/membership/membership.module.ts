import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { MembershipController } from './membership.controller';
import { MembershipService } from './membership.service';
import { MembershipRepository } from './membership.repository';

@Module({
  controllers: [MembershipController],

  providers: [
    PrismaService,
    MembershipService,
    MembershipRepository,
  ],

 exports: [
    MembershipService,
    MembershipRepository,
  ],
})
export class MembershipModule {}