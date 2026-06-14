import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import { BuyService } from './buy.service';

import { JwtAuthGuard } from '../../shared/auth/guards/jwt-auth.guard';

import { DealerTypeGuard } from '../../common/guards/dealer-type.guard';

import { DealerTypes } from '../../common/decorators/dealer-type.decorator';

import { CreateBuyDto } from './dto/create-buy.dto';
import { UpdateBuyDto } from './dto/update-buy.dto';
import { FilterBuyDto } from './dto/filter-buy.dto';

@Controller('buy')
export class BuyController {

  constructor(
    private readonly buyService: BuyService,
  ) {}

  /////////////////////////////////////////////////////////
  // 🛒 CUSTOMER BUY ORDER
  /////////////////////////////////////////////////////////

  @Post('create')
async createBuyOrder(
  @Body() body: any,
) {

  const order =
    await this.buyService.createOrder(
      body,
    );

  return {
    success: true,
    message: 'Order placed successfully',
    data: order,
  };
}

  /////////////////////////////////////////////////////////
  // 📦 CREATE DEVICE
  /////////////////////////////////////////////////////////

  @UseGuards(
    JwtAuthGuard,
    DealerTypeGuard,
  )
  @DealerTypes('SELL')
  @Post()
  create(
    @Req() req: any,
    @Body() dto: CreateBuyDto,
  ) {
    return this.buyService.createDevice(
      req.user.id,
      dto,
    );
  }

  /////////////////////////////////////////////////////////
  // 🛒 PUBLIC MARKETPLACE
  /////////////////////////////////////////////////////////

  @Get()
  getAll(
    @Query() filters: FilterBuyDto,
  ) {
    return this.buyService.getAllDevices(
      filters,
    );
  }

  /////////////////////////////////////////////////////////
  // 📦 DEALER INVENTORY
  /////////////////////////////////////////////////////////

  @UseGuards(
    JwtAuthGuard,
    DealerTypeGuard,
  )
  @DealerTypes('SELL')
  @Get('my')
  getMyDevices(
    @Req() req: any,
  ) {
    return this.buyService.getDealerDevices(
      req.user.id,
    );
  }

  /////////////////////////////////////////////////////////
  // ✏️ UPDATE DEVICE
  /////////////////////////////////////////////////////////

  @UseGuards(
    JwtAuthGuard,
    DealerTypeGuard,
  )
  @DealerTypes('SELL')
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateBuyDto,
  ) {
    return this.buyService.update(
      id,
      dto,
    );
  }

  /////////////////////////////////////////////////////////
  // 🗑️ DELETE DEVICE
  /////////////////////////////////////////////////////////

  @UseGuards(
    JwtAuthGuard,
    DealerTypeGuard,
  )
  @DealerTypes('SELL')
  @Delete(':id')
  remove(
    @Param('id') id: string,
  ) {
    return this.buyService.remove(id);
  }

    /////////////////////////////////////////////////////////
  // 📱 SINGLE DEVICE
  /////////////////////////////////////////////////////////

  @Get(':id')
  getOne(
    @Param('id') id: string,
  ) {
    return this.buyService.findOne(id);
  }

}
