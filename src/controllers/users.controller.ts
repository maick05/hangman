import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateUserService } from 'src/services/users/create-user-service';

@Controller('users')
export class UsersController {
    constructor(private readonly createUserService: CreateUserService) {}

    @Post('/register')
    register(@Body() user) {
        return this.createUserService.create(user);
    }
}
