import {
  Controller,
  Get,
  Patch,
  Param,
  Query,
  Req,
  Body,
  UseGuards,
} from '@nestjs/common';

import { OrdersService } from './orders.service';

import { JwtAuthGuard } from '../../shared/auth/guards/jwt-auth.guard';

import { UpdateOrderDto } from './dto/update-orders.dto';
import { FilterOrderDto } from './dto/filter-orders.dto';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
  ) {}

  @Get('buy-orders')
getAllBuyOrders() {
  return this.ordersService.getAllBuyOrders();
}

@Patch('buy-orders/assign/:id')
assignBuyDealer(
  @Param('id') id: string,
  @Body() body: any,
) {
  return this.ordersService.assignBuyDealer(
    id,
    body.dealerId,
  );
}

@Patch('buy-orders/accept/:id')
acceptBuyOrder(
  @Param('id') id: string,
) {
  return this.ordersService.acceptBuyOrder(id);
}

@Patch('buy-orders/reject/:id')
rejectBuyOrder(
  @Param('id') id: string,
) {
  return this.ordersService.rejectBuyOrder(id);
}

@Patch('buy-orders/out-for-delivery/:id')
markOutForDelivery(
  @Param('id') id: string,
) {
  return this.ordersService.markOutForDelivery(id);
}

@Patch('buy-orders/delivered/:id')
markDelivered(
  @Param('id') id: string,
) {
  return this.ordersService.markDelivered(id);
}

@Patch('verify-otp/:id')
verifyDeliveryOtp(
  @Param('id') id: string,

  @Body() body: any,
) {
  return this.ordersService.verifyDeliveryOtp(
    id,
    body.otp,
  );
}

@Patch('buy-orders/completed/:id')
completeBuyOrder(
  @Param('id') id: string,
) {
  return this.ordersService.completeBuyOrder(id);
}

  // ✅ USER ORDERS
  @UseGuards(JwtAuthGuard)
  @Get('my')
  getMyOrders(@Req() req: any) {
    return this.ordersService.getUserOrders(
      req.user.id,
    );
  }

  // ✅ DEALER ORDERS
  @UseGuards(JwtAuthGuard)
  @Get('dealer')
  getDealerOrders(@Req() req: any) {
    return this.ordersService.getDealerOrders(
      req.user.id,
    );
  }

  // 🔥 ALL ORDERS
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Query() filters: FilterOrderDto,
  ) {
    return this.ordersService.findAll(
      filters,
    );
  }

  // 🔥 SINGLE ORDER
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.ordersService.findOne(id);
  }

  // ✏️ UPDATE ORDER
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,

    @Body() dto: UpdateOrderDto,
  ) {
    return this.ordersService.update(
      id,
      dto,
    );
  }

  // ✅ APPROVE
  @UseGuards(JwtAuthGuard)
  @Patch('approve/:id')
  approve(
    @Param('id') id: string,

    @Req() req: any,
  ) {
    return this.ordersService.approveOrder(
      id,
      req.user.id,
    );
  }

  // ❌ REJECT
  @UseGuards(JwtAuthGuard)
  @Patch('reject/:id')
  reject(
    @Param('id') id: string,

    @Req() req: any,
  ) {
    return this.ordersService.rejectOrder(
      id,
      req.user.id,
    );
  }

  // 💰 DEALER EARNINGS
  @UseGuards(JwtAuthGuard)
  @Get('dealer/earnings')
  getDealerEarnings(
    @Req() req: any,
  ) {
    return this.ordersService.getDealerEarnings(
      req.user.id,
    );
  }

  @UseGuards(JwtAuthGuard)
@Get('dealer/wallet')
getDealerWallet(
  @Req() req: any,
) {
  return this.ordersService.getDealerWallet(
    req.user.id,
  );
}

@UseGuards(JwtAuthGuard)
@Get('dealer/wallet-transactions')
getWalletTransactions(
  @Req() req: any,
) {
  return this.ordersService.getWalletTransactions(
    req.user.id,
  );
}

@UseGuards(JwtAuthGuard)
@Get('dealer/dashboard')
getDealerDashboard(
  @Req() req: any,
) {
  return this.ordersService.getDealerDashboard(
    req.user.id,
  );
}

@UseGuards(JwtAuthGuard)
@Get('dealer/stats')
getDealerStats(
  @Req() req: any,
) {
  return this.ordersService.getDealerStats(
    req.user.id,
  );
}

}

