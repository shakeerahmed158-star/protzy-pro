import { Prisma } from '@prisma/client';

export async function prismaMiddleware(
  params: Prisma.MiddlewareParams,
  next: (
    params: Prisma.MiddlewareParams,
  ) => Promise<any>,
) {

  // AUTO UPDATED TIMESTAMPS
  if (
    params.action === 'update'
    ||
    params.action === 'updateMany'
  ) {
    params.args.data = {
      ...params.args.data,
      updatedAt: new Date(),
    };
  }

  // SOFT DELETE SUPPORT
  if (
    params.action === 'delete'
  ) {
    params.action = 'update';

    params.args['data'] = {
      deletedAt: new Date(),
    };
  }

  return next(params);
}