export class InventoryFilterDto {
  brand?: string;

  model?: string;

  ram?: string;

  storage?: string;

  minPrice?: number;

  maxPrice?: number;

  city?: string;

  condition?: string;

  page?: number;

  limit?: number;
}