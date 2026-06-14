import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { WorkflowStatus } from '@prisma/client';

import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { MatchQueryDto } from './dto/match-query.dto';

@Injectable()
export class MatchingRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: CreateMatchDto) {
    return this.prisma.match.create({
      data: {
        score: data.score,
        distance: data.distance,
        priority: data.priority,
        autoAssigned:
          data.autoAssigned,

       status:
       data.status || WorkflowStatus.PENDING,

        dealer: {
          connect: {
            id: data.dealerId,
          },
        },

        ...(data.leadId && {
          lead: {
            connect: {
              id: data.leadId,
            },
          },
        }),

        ...(data.repairLeadId && {
          repairLead: {
            connect: {
              id: data.repairLeadId,
            },
          },
        }),
      },
    });
  }

  async findAll(query?: MatchQueryDto) {
    return this.prisma.match.findMany({
      where: {
        ...(query?.dealerId && {
          dealerId: query.dealerId,
        }),

        ...(query?.leadId && {
          leadId: query.leadId,
        }),

        ...(query?.repairLeadId && {
          repairLeadId:
            query.repairLeadId,
        }),

        ...(query?.status && {
          workflowStatus:
            query.status as any,
        }),
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    return this.prisma.match.findUnique({
      where: { id },
    });
  }

async update(
  id: string,
  data: UpdateMatchDto,
) {
  return this.prisma.match.update({
    where: { id },

    data: {
      ...(data.score !== undefined && {
        score: data.score,
      }),

      ...(data.distance !== undefined && {
        distance: data.distance,
      }),

      ...(data.priority !== undefined && {
        priority: data.priority,
      }),

      ...(data.autoAssigned !== undefined && {
        autoAssigned:
          data.autoAssigned,
      }),

      ...(data.status && {
        workflowStatus:
          data.status as WorkflowStatus,
      }),
    },
  });
}

  async delete(id: string) {
    return this.prisma.match.delete({
      where: { id },
    });
  }
}