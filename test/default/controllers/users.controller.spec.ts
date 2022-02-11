import { UsersController } from 'src/controllers/users.controller';
import { Test, TestingModule } from '@nestjs/testing';
import sinon from 'ts-sinon';
import { UserEntity } from 'src/domain/entities/user.entity';
import { CreateUserService } from 'src/services/users/create-user-service';
import { expect } from 'chai';

const makeFakeSavedUser = (): UserEntity => {
    return {
        id: 1,
        name: 'User Test Name',
        email: 'user@test.com',
        password: 'pass test'
    };
};

const mockUserRepository = {
    async save(element: UserEntity): Promise<UserEntity> {
        return makeFakeSavedUser();
    }
};

var sut: UsersController;

describe('UserController', () => {
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [UsersController],
            providers: [
                {
                    provide: 'UserEntity',
                    useFactory: () => UserEntity
                },
                {
                    inject: ['UserEntity'],
                    provide: 'UserRepository',
                    useFactory: (mock) => mockUserRepository
                },
                {
                    inject: ['UserRepository'],
                    provide: 'CreateUserService',
                    useClass: CreateUserService
                }
            ]
        }).compile();
        sut = module.get<UsersController>(UsersController);
    });

    describe('register', () => {
        const requestUser = {
            id: null,
            name: 'User Test Name',
            email: 'user@test.com',
            password: 'pass test'
        };

        it('Should call with correct parameters', async () => {
            const registerSpy = sinon.spy(mockUserRepository, 'save');

            await sut.register(requestUser);

            sinon.assert.calledOnceWithExactly(registerSpy, requestUser);

            registerSpy.restore();
        });

        it('Should return correct values', async () => {
            const actual = await sut.register(requestUser);
            expect(actual.toString()).to.be.eq(makeFakeSavedUser().toString());
        });
    });
});
