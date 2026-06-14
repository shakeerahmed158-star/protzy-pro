import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

import {
  Observable,
} from 'rxjs';

import {
  map,
} from 'rxjs/operators';

@Injectable()

export class ResponseInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {

    const request =
      context
        .switchToHttp()
        .getRequest();

    const response =
      context
        .switchToHttp()
        .getResponse();

    return next.handle().pipe(

      map((data) => {

        /*
        |--------------------------------------------------------------------------
        | ALREADY FORMATTED
        |--------------------------------------------------------------------------
        */

        if (
          data?.success !==
          undefined
        ) {
          return data;
        }

        /*
        |--------------------------------------------------------------------------
        | STANDARD RESPONSE
        |--------------------------------------------------------------------------
        */

        return {

          success: true,

          statusCode:
            response.statusCode,

          message:
            'Request successful',

          timestamp:
            new Date().toISOString(),

          path: request.url,

          data,
        };
      }),
    );
  }
}