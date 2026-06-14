import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';

import { UserRepository } from './user.repository';

import { sanitizeUser } from './transformers/user.transformer';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  // 🚀 CREATE USER
  async createUser(
    dto: CreateUserDto,
  ) {
    const existing =
      await this.userRepository.findByPhone(
        dto.phone,
      );

    if (existing) {
      throw new BadRequestException(
        'User already exists',
      );
    }

    const user =
      await this.userRepository.create({
        phone: dto.phone,
        name: dto.name || null,
      });

    return sanitizeUser(user);
  }

  // 📦 GET ALL USERS
  async findAll(
    filters: FilterUserDto,
  ) {
    const users =
      await this.userRepository.findAll(
        filters,
      );

    return users.map(sanitizeUser);
  }

  // 👤 GET PROFILE
  async getProfile(
    userId: string,
  ) {
    const user =
      await this.userRepository.findById(
        userId,
      );

    if (!user) {
      throw new NotFoundException(
        'User not found',
      );
    }

    return sanitizeUser(user);
  }

  // 📦 GET SINGLE USER
  async findOne(id: string) {
    const user =
      await this.userRepository.findById(
        id,
      );

    if (!user) {
      throw new NotFoundException(
        'User not found',
      );
    }

    return sanitizeUser(user);
  }

  // ✏️ UPDATE PROFILE
  async updateProfile(
    userId: string,
    dto: UpdateUserDto,
  ) {
    const user =
      await this.userRepository.update(
        userId,
        {
          name: dto.name,
        },
      );

    return sanitizeUser(user);
  }

  // 🗑️ DELETE USER
  async remove(id: string) {
    return this.userRepository.delete(
      id,
    );
  }
}