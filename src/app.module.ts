import { Module } from '@nestjs/common';
import { ServiceModule } from './services/service.module';
import { ConfigModule } from '@nestjs/config';
import { DomainModule } from './domain/domain.module';
import { APP_FILTER } from '@nestjs/core';
import { FilterHttpException } from './common/filter/http-exception.filter';

@Module({
    imports: [ConfigModule.forRoot(), ServiceModule],
    controllers: [],
    providers: [
        {
            provide: APP_FILTER,
            useClass: FilterHttpException
        }
    ]
})
export class AppModule {}
