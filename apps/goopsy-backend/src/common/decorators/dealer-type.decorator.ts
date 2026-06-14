import { SetMetadata } from '@nestjs/common';

export const DealerTypes = (...types: string[]) =>
  SetMetadata('dealerTypes', types);