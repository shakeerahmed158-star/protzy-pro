import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { InvoiceService } from './invoice.service';

import { CreateInvoiceDto } from './dto/create-invoice.dto';

import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Controller('invoices')
export class InvoiceController {
  constructor(
    private readonly invoiceService: InvoiceService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateInvoiceDto,
  ) {
    return this.invoiceService.create(body);
  }

  @Get()
  async findAll() {
    return this.invoiceService.findAll();
  }

  @Get('number/:invoiceNumber')
  async findByInvoiceNumber(
    @Param('invoiceNumber')
    invoiceNumber: string,
  ) {
    return this.invoiceService.findByInvoiceNumber(
      invoiceNumber,
    );
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.invoiceService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateInvoiceDto,
  ) {
    return this.invoiceService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.invoiceService.delete(id);
  }
}