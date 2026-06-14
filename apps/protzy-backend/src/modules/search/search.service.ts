import { Injectable } from '@nestjs/common';

import { SearchRepository } from './search.repository';

import { SearchQueryDto } from './dto/search-query.dto';

@Injectable()
export class SearchService {
  constructor(
    private readonly searchRepository: SearchRepository,
  ) {}

  async searchDevices(
    query: SearchQueryDto,
  ) {
    return this.searchRepository.searchDevices(
      query,
    );
  }

  async searchDealers(
    query: SearchQueryDto,
  ) {
    return this.searchRepository.searchDealers(
      query,
    );
  }
}