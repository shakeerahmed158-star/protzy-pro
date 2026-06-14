import {
  IsOptional,
  IsString,
} from 'class-validator';

export class ApproveDealerDto {
  @IsOptional()
  @IsString()
  approvalNote?: string;
}