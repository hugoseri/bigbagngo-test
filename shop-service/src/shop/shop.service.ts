import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from '../model/shop.entity';
import { CreateShopDto } from './dto/create-shop.dto';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop) private shopRepository: Repository<Shop>,
  ) {}

  findAll(): Promise<Shop[]> {
    return this.shopRepository.find();
  }

  findOne(id: string): Promise<Shop> {
    return this.shopRepository.findOneOrFail(id);
  }

  async delete(id: string): Promise<void> {
    await this.shopRepository.delete(id);
  }

  create(createShopDto: CreateShopDto): Promise<Shop> {
    const shop = new Shop();
    Object.keys(createShopDto).forEach(
      (key) => (shop[key] = createShopDto[key]),
    );
    return this.shopRepository.save(shop);
  }

  update(id: string, data: Partial<CreateShopDto>): Promise<Shop> {
    return this.shopRepository.update(id, data).then(() => this.findOne(id));
  }
}
