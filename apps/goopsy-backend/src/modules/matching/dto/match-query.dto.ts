import {
  IsOptional,
  IsString,
} from 'class-validator';

export class MatchQueryDto {
  @IsOptional()
  @IsString()
  dealerId?: string;

  @IsOptional()
  @IsString()
  leadId?: string;

  @IsOptional()
  @IsString()
  repairLeadId?: string;

  @IsOptional()
  @IsString()
  status?: string;
}