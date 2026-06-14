import {
  DocumentBuilder,
} from '@nestjs/swagger';

export const swaggerConfig =
  new DocumentBuilder()
    .setTitle('Goopsy API')
    .setDescription('Goopsy Backend APIs')
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