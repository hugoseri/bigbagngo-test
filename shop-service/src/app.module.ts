import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ShopModule],
})
export class AppModule {}
