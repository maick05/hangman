import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as RepositoryTypeORM } from 'typeorm';

@Injectable()
export abstract class Repository<Entity> {
    constructor(
        protected readonly entityRepository: RepositoryTypeORM<Entity>
    ) {}

    async save(element: Entity): Promise<Entity> {
        return await this.entityRepository.save(element);
    }
}
