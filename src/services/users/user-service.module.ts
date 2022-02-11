import { Module } from '@nestjs/common';
import { UsersController } from 'src/controllers/users.controller';
import { DomainModule } from 'src/domain/domain.module';
import UserRepository from 'src/domain/repositories/user.repository';
import { CreateUserService } from './create-user-service';

@Module({
    imports: [DomainModule],
    controllers: [UsersController],
    providers: [CreateUserService]
})
export class UserServiceModule {
    static CREATE_USER_SERVICE: string = 'CreateUserService';
}
