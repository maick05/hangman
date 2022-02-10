import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/entities/user.entity';
import UserRepository from 'src/domain/repositories/user.repository';

@Injectable()
export class CreateUserService {
    constructor(private readonly userRepository: UserRepository){}
  create(user: UserEntity)  {
      return this.userRepository.save(user);
  }
}
