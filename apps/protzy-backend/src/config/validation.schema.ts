import * as Joi from 'joi';

export const validationSchema =

  Joi.object({

    NODE_ENV:
      Joi.string()
        .valid(
          'development',
          'production',
        )
        .default('development'),

    PORT:
      Joi.number()
        .default(3000),

    API_PREFIX:
      Joi.string()
        .default('api'),

    APP_NAME:
      Joi.string()
        .default('protzy'),

    DATABASE_URL:
      Joi.string()
        .required(),

    JWT_SECRET:
      Joi.string()
        .required(),

    JWT_EXPIRES_IN:
      Joi.string()
        .default('7d'),

    JWT_REFRESH_SECRET:
      Joi.string()
        .required(),

    JWT_REFRESH_EXPIRES_IN:
      Joi.string()
        .default('30d'),

    REDIS_HOST:
      Joi.string()
        .required(),

    REDIS_PORT:
      Joi.number()
        .default(6379),

    REDIS_PASSWORD:
      Joi.string()
        .allow(''),

  });