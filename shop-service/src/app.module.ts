import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopController } from './shop/shop.controller';
import { ShopModule } from './shop/shop.module';
import { ShopService } from './shop/shop.service';

@Module({
  imports: [TypeOrmModule.forRoot(), ShopModule],
})
export class AppModule {}
