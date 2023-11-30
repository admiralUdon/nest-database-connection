import { Module } from '@nestjs/common';
import { MySQLController } from './mysql.controller';
import { MySQLServiceModule } from 'app/core/services/mysql/mysql.module';

@Module({
    imports: [MySQLServiceModule],
    controllers: [MySQLController],
})
export class MySQLModule {}