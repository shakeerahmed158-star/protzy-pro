import {
  InventoryCondition,
} from '../inventory.types';

export class UpdateInventoryDto {
  price?: number;

  finalPrice?: number;

  condition?: InventoryCondition;

  description?: string;

  images?: string[];

  status?: string;
}