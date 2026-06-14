import { WorkflowStatus } from '@prisma/client';
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMatchDto {
  @IsOptional()
  @IsString()
  leadId?: string;

  @IsOptional()
  @IsString()
  repairLeadId?: string;

  @IsOptional()
  @IsString()
  dealerId?: string;

  @IsOptional()
  @IsNumber()
  score?: number;

  @IsOptional()
  @IsNumber()
  distance?: number;

  @IsOptional()
  @IsNumber()
  priority?: number;

  @IsOptional()
  @IsBoolean()
  autoAssigned?: boolean;

  @IsOptional()
  @IsEnum(WorkflowStatus)
  status?: WorkflowStatus;
}