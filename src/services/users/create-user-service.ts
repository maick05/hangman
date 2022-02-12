import { Inject, Injectable } from '@nestjs/common';
import { EmptyDataException } from 'src/common/exceptions/empty-data.exception';
import { isEmpty } from 'src/common/helpers/object.helper';
import { UserEntity } from 'src/domain/entities/user.entity';
import UserRepository from 'src/domain/repositories/user.repository';
import { Service } from '../service.interface';

@Injectable()
export class CreateUserService implements Service<UserRepository> {
    constructor(
        @Inject('UserRepository') readonly repository: UserRepository
    ) {}

    create(user: UserEntity) {
        if (isEmpty(user)) throw new EmptyDataException('user');

        return this.repository.save(user);
    }
}
