import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomResponse } from 'src/core/http/custom-response.interface';
import { Repository as RepositoryTypeORM } from 'typeorm';

@Injectable()
export abstract class Repository<Entity> {
    constructor(
        protected readonly entityRepository: RepositoryTypeORM<Entity>
    ) {}

    get entityName(): string {
        return this.constructor.name.replace('Repository', '');
    }

    async save(element: Entity): Promise<CustomResponse> {
        return this.entityRepository.save(element).then((savedElement) => {
            return {
                success: true,
                message: this.entityName + ' was saved successfully!',
                content: savedElement
            };
        });
    }
}
