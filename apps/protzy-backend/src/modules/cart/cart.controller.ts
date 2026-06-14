import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CartService } from './cart.service';

import { CreateCartDto } from './dto/create-cart.dto';

import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(
    private readonly cartService: CartService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateCartDto,
  ) {
    return this.cartService.create(body);
  }

  @Get(':userId')
  async findAll(
    @Param('userId') userId: string,
  ) {
    return this.cartService.findAll(userId);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateCartDto,
  ) {
    return this.cartService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.cartService.delete(id);
  }

  @Delete('clear/:userId')
  async clearCart(
    @Param('userId') userId: string,
  ) {
    return this.cartService.clearCart(userId);
  }
}