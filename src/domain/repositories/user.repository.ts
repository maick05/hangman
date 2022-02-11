import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "./repository";
import { Repository as RepositoryTypeORM } from "typeorm";

@Injectable()
export default class UserRepository extends Repository<UserEntity>{
    constructor(
        @InjectRepository(UserEntity) 
        protected readonly entityRepository: RepositoryTypeORM<UserEntity>
    ){
        super(entityRepository);
    }

    async save(user: UserEntity): Promise<UserEntity> {
        const userSaved: UserEntity = await this.entityRepository.save(user)
        return userSaved;
    }
}