import { Injectable } from '@nestjs/common';

import { ReviewRepository } from '../repositories/review.repository';

@Injectable()
export class ReviewService {
  constructor(
    private readonly reviewRepository: ReviewRepository,
  ) {}

  async addReview(
    body: any,
  ) {
    return this.reviewRepository.addReview(body);
  }

  async productReviews(
    id: string,
  ) {
    return this.reviewRepository.productReviews(id);
  }

  async dealerReviews(
    id: string,
  ) {
    return this.reviewRepository.dealerReviews(id);
  }

  async deleteReview(
    id: string,
  ) {
    return this.reviewRepository.deleteReview(id);
  }
}