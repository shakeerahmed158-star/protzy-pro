import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InventoryRepository } from '../repositories/inventory.repository';
import { CreateInventoryDto } from '../dto/create-inventory.dto';
import { UpdateInventoryDto } from '../dto/update-inventory.dto';

@Injectable()
export class InventoryService {
  constructor(
    private inventoryRepository: InventoryRepository,
  ) {}

  async addInventory(
    dealerId: string,
    body: CreateInventoryDto,
  ) {
    return this.inventoryRepository.create({
      dealerId,
      ...body,
    });
  }

  async updateInventory(
  inventoryId: string,
  dealerId: string,
  body: UpdateInventoryDto,
) {
  const inventory =
    await this.inventoryRepository.findDealerInventory(
      inventoryId,
      dealerId,
    );

  if (!inventory) {
    throw new NotFoundException(
      'Inventory not found',
    );
  }

  return this.inventoryRepository.update(
    inventoryId,
    body,
  );
}

 async deleteInventory(
  inventoryId: string,
  dealerId: string,
) {
  const inventory =
    await this.inventoryRepository.findDealerInventory(
      inventoryId,
      dealerId,
    );

  if (!inventory) {
    throw new NotFoundException(
      'Inventory not found',
    );
  }

  return this.inventoryRepository.delete(
    inventoryId,
  );
}

async getDealerInventory(
  dealerId: string,
) {
  return this.inventoryRepository.findByDealer(
    dealerId,
  );
}




  async getInventoryById(id: string) {
    const inventory =
      await this.inventoryRepository.findById(id);

    if (!inventory) {
      throw new NotFoundException(
        'Inventory not found',
      );
    }

    return inventory;
  }
}