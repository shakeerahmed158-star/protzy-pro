import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../../../shared/auth/guards/jwt-auth.guard';

import { InventoryService } from '../services/inventory.service';

import { CreateInventoryDto } from '../dto/create-inventory.dto';
import { UpdateInventoryDto } from '../dto/update-inventory.dto';

@Controller('inventory')
export class InventoryController {
  constructor(
    private inventoryService: InventoryService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('add')
  addInventory(
    @Req() req,
    @Body() body: CreateInventoryDto,
  ) {
    return this.inventoryService.addInventory(
      req.user.id,
      body,
    );
  }

 @UseGuards(JwtAuthGuard)
@Patch('update/:id')
updateInventory(
  @Req() req,
  @Param('id') id: string,
  @Body() body: UpdateInventoryDto,
) {
  return this.inventoryService.updateInventory(
    id,
    req.user.id,
    body,
  );
}

  @UseGuards(JwtAuthGuard)
@Delete('delete/:id')
deleteInventory(
  @Req() req,
  @Param('id') id: string,
) {
  return this.inventoryService.deleteInventory(
    id,
    req.user.id,
  );
}

  @UseGuards(JwtAuthGuard)
  @Get('my')
  getDealerInventory(
    @Req() req,
  ) {
    return this.inventoryService.getDealerInventory(
      req.user.id,
    );
  }

  @Get(':id')
  getInventoryById(
    @Param('id') id: string,
  ) {
    return this.inventoryService.getInventoryById(
      id,
    );
  }
}