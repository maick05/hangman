import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controller';
import { DomainModule } from 'src/domain/domain.module';
import UserRepository from 'src/domain/repositories/user.repository';
import { CreateUserService } from './create-user-service';

@Module({
  imports: [DomainModule],
  controllers: [UserController],
  providers: [
    {
        inject: [UserRepository],
        provide: UserServiceModule.CREATE_USER_SERVICE,
        useFactory: (userRepository: UserRepository) => new CreateUserService(userRepository)
    }
],
})

export class UserServiceModule {
    static CREATE_USER_SERVICE: string = 'CreateUserService';
}
