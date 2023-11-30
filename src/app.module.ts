import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { appRoutes } from 'app.routes';
import { throttlerConfig } from 'app/config/throttler.config';
import { HelloModule } from 'app/modules/hello/hello.module';
import { MsSQLModule } from 'app/modules/mssql/mssql.module';
import { MySQLModule } from 'app/modules/mysql/mysql.module';
import { PostgresModule } from 'app/modules/postgres/postgres.module';
// import { OracleModule } from 'app/modules/oracle/oracle.module';
import { RedisModule } from 'app/modules/redis/redis.module';

@Module({
    imports: [
        // Config modules
        ConfigModule.forRoot({expandVariables: true}),
        ThrottlerModule.forRoot({ throttlers: throttlerConfig}),
        // Custom modules
        HelloModule,
        MsSQLModule,
        // OracleModule,
        RedisModule,
        PostgresModule,
        MySQLModule,
        // Router modules0
        RouterModule.register(appRoutes)
    ],
})
export class AppModule {}
