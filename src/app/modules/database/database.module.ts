import { Module } from '@nestjs/common';
import { DatabaseController } from 'app/modules/database/database.controller';
import { DatabaseServiceModule } from 'app/core/services/database/database.module';

@Module({
    imports: [DatabaseServiceModule],
    controllers: [DatabaseController],
})
export class DatabaseModule {}