import { Module } from '@nestjs/common';
import { RedisController } from './redis.controller';
import { RedisServiceModule } from 'app/core/services/redis/redis.module';

@Module({
    imports: [RedisServiceModule],
    controllers: [RedisController],
})
export class RedisModule {}