import { Module } from '@nestjs/common';
import { PostgresService } from 'app/core/services/postgres/postgres.service';

@Module({
  exports: [PostgresService],
  providers: [
    PostgresService
  ]
})
export class PostgresServiceModule {}