import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

import {
  Request,
  Response,
} from 'express';

@Catch()
export class HttpExceptionFilter
  implements ExceptionFilter
{
  private readonly logger =
    new Logger(HttpExceptionFilter.name);

  catch(
    exception: any,
    host: ArgumentsHost,
  ) {
    const ctx =
      host.switchToHttp();

    const response =
      ctx.getResponse<Response>();

    const request =
      ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message: any =
      'Internal server error';

    if (
      exception instanceof HttpException
    ) {
      const errorResponse =
        exception.getResponse();

      if (
        typeof errorResponse ===
        'string'
      ) {
        message =
          errorResponse;
      } else if (
        typeof errorResponse ===
        'object'
      ) {
        message =
          (
            errorResponse as any
          ).message ||
          errorResponse;
      }
    }

    this.logger.error(
      '================ ERROR ================',
    );

    this.logger.error(
      exception?.message ||
        'Unknown Error',
    );

    if (exception?.stack) {
      this.logger.error(
        exception.stack,
      );
    }

    this.logger.error({
      path: request.url,
      method: request.method,
      statusCode: status,
      timestamp:
        new Date().toISOString(),
    });

    this.logger.error(
      '=======================================',
    );

    response.status(status).json({
      success: false,
      statusCode: status,
      message,
      timestamp:
        new Date().toISOString(),
      path: request.url,
    });
  }
}