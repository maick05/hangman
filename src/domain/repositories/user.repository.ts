import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "./repository";
import { Repository as RepositoryTypeORM } from "typeorm";

export default class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    protected readonly entityRepository: RepositoryTypeORM<UserEntity>
  ) {
    super(entityRepository);
  }
}
