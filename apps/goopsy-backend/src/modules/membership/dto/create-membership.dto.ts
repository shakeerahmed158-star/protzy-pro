export class CreateMembershipDto {
  userId: string;

  membershipType: string;

  price: number;

  startDate: Date;

  endDate: Date;

  active?: boolean;
}