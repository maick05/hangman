import { Module } from '@nestjs/common';
// import UserRepository from './repositories/user.repository';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from './entities/user.entity';
import UserRepository from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([UserEntity])],
  controllers: [],
  providers: [UserRepository],
  exports: [TypeOrmModule, UserRepository],
})
export class DomainModule {}
