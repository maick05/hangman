import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";


@Injectable()
export default class UserRepository {
    constructor(@InjectRepository(UserEntity) private readonly userEntityRepository: Repository<UserEntity>){}

    async save(user: UserEntity): Promise<UserEntity> {
        const userSaved: UserEntity = await this.userEntityRepository.save(user)
        return userSaved;
    }
}