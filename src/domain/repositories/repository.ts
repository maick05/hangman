import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityClassOrSchema } from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import { Entity, Repository as RepositoryTypeORM } from "typeorm";
import { UserEntity } from "../entities/user.entity";

export abstract class Repository<Entity>{
    constructor(
         protected readonly entityRepository: RepositoryTypeORM<Entity>
    ){}
}
