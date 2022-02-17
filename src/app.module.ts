import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ServiceModule } from './services/service.module';
import { ConfigModule } from '@nestjs/config';
import { FiltersModule } from './common/filter/filters.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformResponseInterceptor } from './core/http/transform-response-interceptor';

@Module({
    imports: [ConfigModule.forRoot(), FiltersModule, ServiceModule],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: ClassSerializerInterceptor
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformResponseInterceptor
        }
    ]
})
export class AppModule {}
