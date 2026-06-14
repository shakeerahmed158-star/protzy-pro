import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';

import { UserService } from './user.service';

import { JwtAuthGuard } from '../../shared/auth/guards/jwt-auth.guard';

import { successResponse } from '../../common/response.utils';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  // 🚀 CREATE USER
  @Post()
  async create(
    @Body() body: CreateUserDto,
  ) {
    const user =
      await this.userService.createUser(
        body,
      );

    return successResponse(
      user,
      'User created successfully',
    );
  }

  // 📦 GET ALL USERS
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(
    @Query() filters: FilterUserDto,
  ) {
    const users =
      await this.userService.findAll(
        filters,
      );

    return successResponse(
      users,
      'Users fetched successfully',
    );
  }

  // 👤 GET MY PROFILE
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Req() req: any) {
    const user =
      await this.userService.getProfile(
        req.user.id,
      );

    return successResponse(
      user,
      'Profile fetched successfully',
    );
  }

  // 📦 GET SINGLE USER
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(
    @Param('id') id: string,
  ) {
    const user =
      await this.userService.findOne(
        id,
      );

    return successResponse(
      user,
      'User fetched successfully',
    );
  }

  // ✏️ UPDATE PROFILE
  @UseGuards(JwtAuthGuard)
  @Patch('profile')
  async updateProfile(
    @Req() req: any,
    @Body() body: UpdateUserDto,
  ) {
    const updated =
      await this.userService.updateProfile(
        req.user.id,
        body,
      );

    return successResponse(
      updated,
      'Profile updated successfully',
    );
  }
}