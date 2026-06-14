import {
  Injectable,
  LoggerService,
} from '@nestjs/common';

@Injectable()

export class AppLoggerService
  implements LoggerService
{
  log(
    message: string,
    context?: string,
  ) {
    console.log(
      `\x1b[32m[LOG]\x1b[0m ${
        context || 'App'
      } - ${message}`,
    );
  }

  error(
    message: string,
    trace?: string,
    context?: string,
  ) {
    console.error(
      `\x1b[31m[ERROR]\x1b[0m ${
        context || 'App'
      } - ${message}`,
    );

    if (trace) {
      console.error(trace);
    }
  }

  warn(
    message: string,
    context?: string,
  ) {
    console.warn(
      `\x1b[33m[WARN]\x1b[0m ${
        context || 'App'
      } - ${message}`,
    );
  }

  debug(
    message: string,
    context?: string,
  ) {
    console.debug(
      `\x1b[36m[DEBUG]\x1b[0m ${
        context || 'App'
      } - ${message}`,
    );
  }

  verbose(
    message: string,
    context?: string,
  ) {
    console.info(
      `\x1b[35m[VERBOSE]\x1b[0m ${
        context || 'App'
      } - ${message}`,
    );
  }
}