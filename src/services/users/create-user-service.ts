import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/domain/entities/user.entity';
import UserRepository from 'src/domain/repositories/user.repository';
import { IService } from '../service';

@Injectable()
export class CreateUserService implements IService<UserRepository> {
    constructor(
        @Inject('UserRepository') readonly repository: UserRepository
    ) {}

    create(user: UserEntity) {
        return this.repository.save(user);
    }
}
