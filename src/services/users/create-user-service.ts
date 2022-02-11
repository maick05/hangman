import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities/user.entity';
import UserRepository from 'src/domain/repositories/user.repository';
import { IService } from '../service';

@Injectable()
export class CreateUserService implements IService<UserRepository> {
    constructor(readonly repository: UserRepository) {}

    create(user: UserEntity) {
        return this.repository.save(user);
    }
}
