import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../../../src/app.module';
import { UserEntity } from 'src/domain/entities/user.entity';
import { expect } from 'chai';
import { ConfigModule } from '@nestjs/config';
import { FiltersModule } from 'src/common/filter/filters.module';
import { ServiceModule } from 'src/services/service.module';

describe('UsersController (e2e)', () => {
    let app: INestApplication;

    const makeFakeSavedUser: UserEntity = {
        id: 1,
        name: 'User Test Name',
        email: 'user@test.com',
        password: 'pass test'
    };

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [ServiceModule],
            controllers: [],
            providers: []
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/users/register (POST)', async () => {
        const requestUser = {
            id: null,
            name: 'User Test Name',
            email: 'user@test.com',
            password: 'pass test'
        };

        const res = await request(app.getHttpServer())
            .post('/users/register')
            .send(requestUser);
        expect(res.status).to.equal(200);
        expect(res.body).to.equal(makeFakeSavedUser);
    });
});
