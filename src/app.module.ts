import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { ServiceModule } from './usecases/service.module';

@Module({
  imports: [ServiceModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
