import { Module } from '@nestjs/common';
import { MsSQLService } from 'app/core/services/mssql/mssql.service';

@Module({
  exports: [MsSQLService],
  providers: [
    MsSQLService
  ]
})
export class MsSQLServiceModule {}