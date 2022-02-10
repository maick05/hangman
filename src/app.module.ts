import { Module } from '@nestjs/common';
import { ServiceModule } from './services/service.module';
import { ConfigModule } from '@nestjs/config';
import { DomainModule } from './domain/domain.module';


@Module({
  imports: [ConfigModule.forRoot(), DomainModule, ServiceModule],
  controllers: [],
  providers: [],
}) 
export class AppModule {}
