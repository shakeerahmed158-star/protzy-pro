import { Injectable, OnModuleInit } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit {
  private client!: Redis;

  async onModuleInit() {

    console.log('REDIS_HOST=', process.env.REDIS_HOST);
console.log('REDIS_PORT=', process.env.REDIS_PORT);

    this.client = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379'),
      retryStrategy(times) {
        console.log(`Redis retry attempt: ${times}`);
        return Math.min(times * 1000, 5000);
      },
    });

    this.client.on('connect', () => {
      console.log('✅ Redis connected successfully');
    });

    this.client.on('error', (err) => {
      console.log('❌ Redis Error:', err.message);
    });
  }

  async get(key: string) {
    return this.client.get(key);
  }

  async set(key: string, value: string, ttl?: number) {
    if (ttl) {
      return this.client.set(key, value, 'EX', ttl);
    }

    return this.client.set(key, value);
  }
}