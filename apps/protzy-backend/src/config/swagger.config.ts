import {
  DocumentBuilder,
} from '@nestjs/swagger';

export const swaggerConfig =
  new DocumentBuilder()
    .setTitle('protzy API')
    .setDescription('protzy Backend APIs')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'bearer',
    )
    .build();