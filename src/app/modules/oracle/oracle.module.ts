import { Module } from '@nestjs/common';
import { OracleController } from './oracle.controller';
import { OracleServiceModule } from 'app/core/services/oracle/oracle.module';

@Module({
    imports: [OracleServiceModule],
    controllers: [OracleController],
})
export class OracleModule {}