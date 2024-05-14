import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { appRoutes } from 'app.routes';
import { throttlerConfig } from 'app/config/throttler.config';
import { CoreService } from 'app/core/core.service';
import { DatabaseModule } from 'app/modules/database/database.module';
import { HelloModule } from 'app/modules/hello/hello.module';

@Module({
    imports: [
        // Config modules
        ConfigModule.forRoot({expandVariables: true}),
        ThrottlerModule.forRoot({ throttlers: throttlerConfig}),
        // Custom modules
        HelloModule,
        DatabaseModule,
        // Router modules0
        RouterModule.register(appRoutes)
    ],
    providers: [
        CoreService
    ]
})
export class AppModule {}
