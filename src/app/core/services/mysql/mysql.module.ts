import { Module } from '@nestjs/common';
import { MySQLService } from 'app/core/services/mysql/mysql.service';

@Module({
  exports: [MySQLService],
  providers: [
    MySQLService
  ]
})
export class MySQLServiceModule {}