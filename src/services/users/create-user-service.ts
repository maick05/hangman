import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities/user.entity';
import UserRepository from 'src/domain/repositories/user.repository';
import { Service } from '../service';

@Injectable()
export class CreateUserService extends Service<UserRepository> {
    create(user: UserEntity) {
        return this.repository.save(user);
    }
}
