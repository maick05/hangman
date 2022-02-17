import { Body, Controller, HttpStatus, Inject, Post } from '@nestjs/common';
import { CreateUserService } from 'src/services/users/create-user-service';
import { NestResponse } from 'src/core/http/nest-response';
import { AbstractController } from './abstract-controller';

@Controller('users')
export class UsersController extends AbstractController {
    constructor(
        @Inject('CreateUserService')
        private readonly createUserService: CreateUserService
    ) {
        super();
    }

    @Post('/register')
    register(@Body() user): NestResponse {
        return this.buildResponse(
            HttpStatus.CREATED,
            this.createUserService.create(user)
        );
    }
}
