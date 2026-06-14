import { Injectable } from '@nestjs/common';

import { InvoiceRepository } from './invoice.repository';

@Injectable()
export class InvoiceService {
  constructor(
    private readonly invoiceRepository: InvoiceRepository,
  ) {}

  async create(data: any) {
    return this.invoiceRepository.create(data);
  }

  async findAll() {
    return this.invoiceRepository.findAll();
  }

  async findById(id: string) {
    return this.invoiceRepository.findById(id);
  }

  async findByInvoiceNumber(
    invoiceNumber: string,
  ) {
    return this.invoiceRepository.findByInvoiceNumber(
      invoiceNumber,
    );
  }

  async update(id: string, data: any) {
    return this.invoiceRepository.update(id, data);
  }

  async delete(id: string) {
    return this.invoiceRepository.delete(id);
  }
}