import { Module } from '@nestjs/common';
import { ServiceModule } from './services/service.module';
import { ConfigModule } from '@nestjs/config';
import { FiltersModule } from './common/filter/filters.module';

@Module({
    imports: [ConfigModule.forRoot(), FiltersModule, ServiceModule],
    controllers: [],
    providers: []
})
export class AppModule {}
