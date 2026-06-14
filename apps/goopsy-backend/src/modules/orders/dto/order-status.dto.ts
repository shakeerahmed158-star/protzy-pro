import {
  IsEnum,
} from 'class-validator';

import {
  WorkflowStatus,
} from '@prisma/client';

export class OrderStatusDto {
  @IsEnum(WorkflowStatus)
  status!: WorkflowStatus;
}