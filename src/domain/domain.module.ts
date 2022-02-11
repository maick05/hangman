import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
// import UserRepository from './repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExceptionFilter } from 'src/common/filter/type-orm-exception.filter';
import { UserEntity } from './entities/user.entity';
import UserRepository from './repositories/user.repository';

@Module({
    imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([UserEntity])],
    controllers: [],
    providers: [
        {
            provide: APP_FILTER,
            useClass: TypeOrmExceptionFilter
        },
        UserRepository
    ],
    exports: [TypeOrmModule, UserRepository]
})
export class DomainModule {}
