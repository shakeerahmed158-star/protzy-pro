import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ReservationService } from './reservation.service';

import { CreateReservationDto } from './dto/create-reservation.dto';

import { UpdateReservationDto } from './dto/update-reservation.dto';

@Controller('reservations')
export class ReservationController {
  constructor(
    private readonly reservationService: ReservationService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateReservationDto,
  ) {
    return this.reservationService.create(body);
  }

  @Get()
  async findAll() {
    return this.reservationService.findAll();
  }

  @Get('user/:userId')
  async findByUser(
    @Param('userId') userId: string,
  ) {
    return this.reservationService.findByUser(userId);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.reservationService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateReservationDto,
  ) {
    return this.reservationService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.reservationService.delete(id);
  }
}