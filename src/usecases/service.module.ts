import { Module } from '@nestjs/common';
import { UserServiceModule } from './users/user-service.module';


@Module({
  imports: [UserServiceModule],
  controllers: [],
  providers: [],
})
export class ServiceModule {}
