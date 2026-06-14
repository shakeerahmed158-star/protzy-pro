import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class AssignTechnicianDto {
  @IsString()
  @IsNotEmpty()
  technicianId!: string;
}