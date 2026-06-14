import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { WishlistService } from './wishlist.service';

import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';


@Controller('wishlist')
export class WishlistController {
  constructor(
    private readonly wishlistService: WishlistService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateWishlistDto,
  ) {
    return this.wishlistService.create(body);
  }

  @Get(':userId')
  async findAll(
    @Param('userId') userId: string,
      @Body() body: UpdateWishlistDto,
  ) {
    return this.wishlistService.findAll(userId);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.wishlistService.delete(id);
  }

  @Delete('clear/:userId')
  async clearWishlist(
    @Param('userId') userId: string,
  ) {
    return this.wishlistService.clearWishlist(userId);
  }
}