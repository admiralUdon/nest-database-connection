import { Module } from '@nestjs/common';
import { PostgresController } from './postgres.controller';
import { PostgresServiceModule } from 'app/core/services/postgres/postgres.module';

@Module({
    imports: [PostgresServiceModule],
    controllers: [PostgresController],
})
export class PostgresModule {}