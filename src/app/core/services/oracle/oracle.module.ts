import { Module } from '@nestjs/common';
import { OracleService } from 'app/core/services/oracle/oracle.service';

@Module({
  exports: [OracleService],
  providers: [
    OracleService
  ]
})
export class OracleServiceModule {}