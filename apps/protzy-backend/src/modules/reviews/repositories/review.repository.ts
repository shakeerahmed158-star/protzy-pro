import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewRepository {

  async addReview(
    body: any,
  ) {
    return {
      success: true,
      message: 'Review added successfully',
      data: body,
    };
  }

  async productReviews(
    id: string,
  ) {
    return [
      {
        id: 1,
        productId: id,
        rating: 5,
        comment: 'Excellent product',
      },
    ];
  }

  async dealerReviews(
    id: string,
  ) {
    return [
      {
        id: 1,
        dealerId: id,
        rating: 4,
        comment: 'Trusted dealer',
      },
    ];
  }

  async deleteReview(
    id: string,
  ) {
    return {
      success: true,
      message: `Review ${id} deleted successfully`,
    };
  }
}