import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateUserService } from 'src/usecases/users/create-user-service';
import { UserServiceModule } from 'src/usecases/users/user-service.module';

@Controller("users")
export class UserController {
  constructor(@Inject(UserServiceModule.CREATE_USER_SERVICE) private readonly createUserService: CreateUserService) {}

  @Post("/register")
  register(@Body() user) {
    return this.createUserService.create(user);
  }
}