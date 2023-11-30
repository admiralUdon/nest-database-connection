import { Module } from '@nestjs/common';
import { MsSQLController } from './mssql.controller';
import { MsSQLServiceModule } from 'app/core/services/mssql/mssql.module';

@Module({
    imports: [MsSQLServiceModule],
    controllers: [MsSQLController],
})
export class MsSQLModule {}