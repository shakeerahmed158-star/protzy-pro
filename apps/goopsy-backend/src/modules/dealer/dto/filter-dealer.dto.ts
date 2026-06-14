import {
  IsEnum,
  IsOptional,
} from 'class-validator';

import {
  DealerStatus,
} from '@prisma/client';

export class FilterDealerDto {
  @IsOptional()
  @IsEnum(DealerStatus)
  status?: DealerStatus;

  @IsOptional()
  @IsEnum([
    'BUY',
    'SELL',
    'REPAIR',
  ])
  type?: 'BUY' | 'SELL' | 'REPAIR';
}