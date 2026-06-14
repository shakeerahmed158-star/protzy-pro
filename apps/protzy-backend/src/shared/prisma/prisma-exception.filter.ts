import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';

import { Prisma } from '@prisma/client';

@Catch(
  Prisma.PrismaClientKnownRequestError,
)
export class PrismaExceptionFilter
  implements ExceptionFilter
{
  catch(
    exception:
      Prisma.PrismaClientKnownRequestError,

    host: ArgumentsHost,
  ) {

      console.log('PRISMA FILTER HIT');

  console.dir(exception, {
    depth: null,
  });

    const ctx =
      host.switchToHttp();

    const response =
      ctx.getResponse();

    let status =
      HttpStatus.INTERNAL_SERVER_ERROR;

    let message =
      'Database Error';

    switch (exception.code) {

      case 'P2002':
        status =
          HttpStatus.CONFLICT;

        message =
          'Duplicate Entry';
        break;

      case 'P2025':
        status =
          HttpStatus.NOT_FOUND;

        message =
          'Record Not Found';
        break;

      case 'P2003':
        status =
          HttpStatus.BAD_REQUEST;

        message =
          'Invalid Relation';
        break;

      default:
        break;
    }

    response.status(status).json({
      success: false,
      statusCode: status,
      errorCode: exception.code,
      message,
    });
  }
}