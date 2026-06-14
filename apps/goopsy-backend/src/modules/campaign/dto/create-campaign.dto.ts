export class CreateCampaignDto {
  title: string;

  type: string;

  channel?: string;

  audience?: string;

  content?: string;

  startDate?: Date;

  endDate?: Date;

  budget?: number;

  status?: string;
}