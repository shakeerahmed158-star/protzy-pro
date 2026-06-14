import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { ReviewService } from '../services/review.service';

@Controller('reviews')
export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService,
  ) {}

  @Post('add')
  async addReview(
    @Body() body: any,
  ) {
    return this.reviewService.addReview(body);
  }

  @Get('product/:id')
  async productReviews(
    @Param('id') id: string,
  ) {
    return this.reviewService.productReviews(id);
  }

  @Get('dealer/:id')
  async dealerReviews(
    @Param('id') id: string,
  ) {
    return this.reviewService.dealerReviews(id);
  }

  @Delete(':id')
  async deleteReview(
    @Param('id') id: string,
  ) {
    return this.reviewService.deleteReview(id);
  }
}