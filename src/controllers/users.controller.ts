import { Body, Controller, HttpStatus, Inject, Post } from '@nestjs/common';
import { CreateUserService } from 'src/services/users/create-user-service';
import { NestResponse } from 'src/core/http/nest-response';
import { NestResponseBuilder } from 'src/core/http/nest-response.builder';
import { CustomResponse } from 'src/core/http/custom-response.interface';

@Controller('users')
export class UsersController {
    constructor(
        @Inject('CreateUserService')
        private readonly createUserService: CreateUserService
    ) {}

    @Post('/register')
    register(@Body() user): NestResponse {
        return this.buildResponse(
            HttpStatus.CREATED,
            this.createUserService.create(user)
        );
    }

    buildResponse(status, body, header = {}) {
        return new NestResponseBuilder()
            .setStatus(status)
            .setHeader(header)
            .setBody(body)
            .build();
    }
}
