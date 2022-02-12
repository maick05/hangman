import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { CustomErrorExceptionFilter } from 'src/common/filter/custom-error-exception.filter';
import { UserServiceModule } from './users/user-service.module';

@Module({
    imports: [UserServiceModule],
    controllers: [],
    providers: [
        {
            provide: APP_FILTER,
            useClass: CustomErrorExceptionFilter
        }
    ]
})
export class ServiceModule {}
