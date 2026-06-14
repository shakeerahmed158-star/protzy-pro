import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { MatchingRepository } from './matching.repository';

import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { MatchQueryDto } from './dto/match-query.dto';

@Injectable()
export class MatchingService {
  constructor(
    private readonly matchingRepository: MatchingRepository,
  ) {}

  async create(data: CreateMatchDto) {
    return this.matchingRepository.create(data);
  }

  async findAll(query?: MatchQueryDto) {
    return this.matchingRepository.findAll(query);
  }

  async findById(id: string) {
    const match =
      await this.matchingRepository.findById(id);

    if (!match) {
      throw new NotFoundException(
        'Match not found',
      );
    }

    return match;
  }

  async update(
    id: string,
    data: UpdateMatchDto,
  ) {
    await this.findById(id);

    return this.matchingRepository.update(
      id,
      data,
    );
  }

  async delete(id: string) {
    await this.findById(id);

    return this.matchingRepository.delete(id);
  }
}