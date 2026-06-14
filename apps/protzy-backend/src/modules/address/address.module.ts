import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { AddressRepository } from './address.repository';

@Module({
  controllers: [AddressController],

  providers: [
    PrismaService,
    AddressService,
    AddressRepository,
  ],

  exports: [
    AddressService,
    AddressRepository,
  ],
})
export class AddressModule {}