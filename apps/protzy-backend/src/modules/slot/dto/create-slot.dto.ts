export class CreateSlotDto {
  name: string;

  startTime: string;

  endTime: string;

  maxOrders?: number;

  active?: boolean;
}