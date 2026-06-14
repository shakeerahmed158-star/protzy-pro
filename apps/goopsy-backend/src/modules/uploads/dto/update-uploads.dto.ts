import { PartialType } from '@nestjs/mapped-types';

import { CreateUploadsDto } from './create-uploads.dto';

export class UpdateUploadsDto extends PartialType(
  CreateUploadsDto,
) {}