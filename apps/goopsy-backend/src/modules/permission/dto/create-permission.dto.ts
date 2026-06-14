export class CreatePermissionDto {
  name: string;

  key: string;

  module?: string;

  description?: string;

  active?: boolean;
}