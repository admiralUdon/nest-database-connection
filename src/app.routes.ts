import { Routes } from "@nestjs/core";
import { HelloModule } from "app/modules/hello/hello.module";
import { MsSQLModule } from "app/modules/mssql/mssql.module";
import { MySQLModule } from "app/modules/mysql/mysql.module";
import { PostgresModule } from "app/modules/postgres/postgres.module";
import { RedisModule } from "app/modules/redis/redis.module";
// import { OracleModule } from "app/modules/oracle/oracle.module";

export const appRoutes: Routes = [
    {
        path: 'api',
        children: [
            { path: 'hello', module: HelloModule },
            { path: 'mssql', module: MsSQLModule },
            // { path: 'oracle', module: OracleModule },
            { path: 'redis', module: RedisModule },
            { path: 'postgres', module: PostgresModule },
            { path: 'mysql', module: MySQLModule },
        ]
    }
]