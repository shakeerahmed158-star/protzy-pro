import {
  INestApplication,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';

import { PrismaClient } from '@prisma/client';

import { prismaMiddleware } from './prisma.middleware';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit
{
  private readonly logger =
    new Logger(PrismaService.name);

  async onModuleInit() {

    await this.$connect();

    this.logger.log(
      'Prisma Connected Successfully',
    );

    this.$use(prismaMiddleware);
  }

  async enableShutdownHooks(
    app: INestApplication,
  ) {

    process.on(
      'beforeExit',

      async () => {
        await app.close();
      },
    );
  }
}