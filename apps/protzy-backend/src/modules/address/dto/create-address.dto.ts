export class CreateAddressDto {
  userId: string;

  fullName: string;

  mobile: string;

  addressLine1: string;

  addressLine2?: string;

  landmark?: string;

  city: string;

  state: string;

  country: string;

  pincode: string;

  isDefault?: boolean;
}