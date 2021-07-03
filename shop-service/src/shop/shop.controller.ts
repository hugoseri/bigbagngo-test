import { Body, Controller, Get, Post } from '@nestjs/common';
import { Shop } from 'src/model/shop.entity';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private service: ShopService) {}

  @Get()
  public async getAll() {
    return await this.service.findAll();
  }

  @Post()
  public async post(@Body() shop: Shop) {
    return this.service.create(shop);
  }
}
