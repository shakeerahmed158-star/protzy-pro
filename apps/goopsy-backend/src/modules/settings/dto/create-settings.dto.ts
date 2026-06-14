export class CreateSettingsDto {
  siteName: string;

  supportEmail?: string;

  supportPhone?: string;

  logo?: string;

  favicon?: string;

  currency?: string;

  timezone?: string;

  maintenanceMode?: boolean;
}