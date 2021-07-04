import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Patch,
} from '@nestjs/common';
import { Shop } from 'src/model/shop.entity';
import { CreateShopDto } from './dto/create-shop.dto';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly service: ShopService) {}

  @Get()
  findAll(): Promise<Shop[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Shop> {
    return this.service.findOne(id).catch((err) => {
      throw new HttpException(
        {
          message: err.message,
        },
        HttpStatus.NOT_FOUND,
      );
    });
  }

  @Post()
  post(@Body() createShopDto: CreateShopDto): Promise<Shop> {
    return this.service.create(createShopDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.service.delete(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<CreateShopDto>,
  ): Promise<Shop> {
    return this.service.update(id, data).catch((err) => {
      throw new HttpException(
        {
          message: err.message,
        },
        HttpStatus.NOT_FOUND,
      );
    });
  }
}
