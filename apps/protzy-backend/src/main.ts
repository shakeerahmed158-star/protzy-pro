import {
  ValidationPipe,
  VersioningType,
  Logger,
} from '@nestjs/common';

import { NestFactory } from '@nestjs/core';

import {
  SwaggerModule,
} from '@nestjs/swagger';

import * as Sentry from '@sentry/node';

import * as compression from 'compression';
import helmet from 'helmet';
import * as bodyParser from 'body-parser';

import 'reflect-metadata';

import { AppModule } from './app.module';

import { swaggerConfig }
from './config/swagger.config';

import { HttpExceptionFilter }
from './common/filters/http-exception.filter';
import { ResponseInterceptor }
from './common/interceptors/response.interceptor';
import { PrismaExceptionFilter }
from './shared/prisma/prisma-exception.filter';



Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV || 'development',
  tracesSampleRate: 1.0,
});


async function bootstrap() {

  /**
   * LOGGER
   */
  const logger =
    new Logger('protzyBackend');

  /**
   * CREATE APP
   */
  const app =
    await NestFactory.create(
      AppModule,
      {
        cors: true,
      },
    );

  /**
   * TRUST PROXY
   * IMPORTANT FOR:
   * - AWS
   * - NGINX
   * - LOAD BALANCERS
   */
  (app as any).set(
    'trust proxy',
    1,
  );

  /**
   * SECURITY
   */
  app.use(
    helmet({
      crossOriginResourcePolicy: false,
    }),
  );

  /**
   * COMPRESSION
   */
  app.use(compression());

  /**
   * LARGE PAYLOAD SUPPORT
   * IMPORTANT FOR:
   * - IMAGE UPLOADS
   * - BASE64
   * - LARGE REQUESTS
   */
  app.use(
    bodyParser.json({
      limit: '50mb',
    }),
  );

  app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      extended: true,
    }),
  );

  /**
   * GLOBAL API PREFIX
   */
  app.setGlobalPrefix('api');

  /**
   * API VERSIONING
   * EXAMPLE:
   * /api/v1/users
   */
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  /**
   * GLOBAL VALIDATION
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  /**
   * GLOBAL RESPONSE FORMATTER
   */

app.useGlobalFilters(
  new PrismaExceptionFilter(),
  new HttpExceptionFilter(),
);

app.useGlobalInterceptors(
  new ResponseInterceptor(),
);



  /**
   * CORS
   */
  app.enableCors({
    origin: '*',
    credentials: true,
  });

  /**
   * SWAGGER DOCUMENTATION
   */
  const document =
    SwaggerModule.createDocument(
      app,
      swaggerConfig,
    );

  SwaggerModule.setup(
    'docs',
    app,
    document,
    {
      swaggerOptions: {
        persistAuthorization: true,
      },
    },
  );

  /**
   * ENABLE SHUTDOWN HOOKS
   * IMPORTANT FOR:
   * - Docker
   * - AWS ECS
   * - Kubernetes
   */
  app.enableShutdownHooks();

  /**
   * PORT
   */
  const PORT =
    process.env.PORT || 3001;

  await app.listen(PORT);

  /**
   * SUCCESS LOGS
   */
  logger.log(
    ` protzy Backend Running On Port ${PORT}`,
  );

  logger.log(
    ` Swagger Docs: http://localhost:${PORT}/docs`,
  );

  logger.log(
    ` Environment: ${
      process.env.NODE_ENV ||
      'development'
    }`,
  );
}

bootstrap();