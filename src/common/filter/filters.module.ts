import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ErrorExceptionFilter } from './error-exception.filter';
import { HttpExceptionFilter } from './http-exception.filter';
import { TypeOrmExceptionFilter } from './type-orm-exception.filter';

@Module({
    imports: [],
    controllers: [],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter
        },
        {
            provide: APP_FILTER,
            useClass: TypeOrmExceptionFilter
        },
        {
            provide: APP_FILTER,
            useClass: ErrorExceptionFilter
        }
    ]
})
export class FiltersModule {}
