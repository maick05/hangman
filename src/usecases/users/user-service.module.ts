import { Module } from '@nestjs/common';
import UserRepository from 'src/domain/repositories/user.repository';
import { CreateUserService } from './create-user-service';

@Module({
  imports: [],
  controllers: [],
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
