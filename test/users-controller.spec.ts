import { UsersController } from 'src/controllers/users.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { sinon } from 'sinon';
import { expect } from 'chai';
import UserRepository from 'src/domain/repositories/user.repository';
import { UserEntity } from 'src/domain/entities/user.entity';

type EntityType = UserEntity;

const makeFakeSavedUser = (): EntityType => {
    return {
        id: 1,
        name: 'User Test Name',
        email: 'user@test.com',
        password: 'pass test'
    };
};

const mockUserRepository = {
    async save(element: EntityType): Promise<EntityType> {
        return makeFakeSavedUser();
    }
};

let sut: UsersController;

describe('UserController', () => {
    let controller = UsersController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [controller]
        }).compile();

        sut = module.get<UsersController>(controller);
    });

    it('register', async () => {
        const registerSpy = sinon.spy(mockUserRepository, 'create');

        const requestUser = {
            name: 'User Test Name',
            email: 'user@test.com',
            password: 'pass test'
        };

        await sut.register(requestUser);

        sinon.assert.calledOnceWithExactly(registerSpy, requestUser);
    });
});
