import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from '../model/shop.entity';

@Injectable()
export class ShopService {
  constructor(@InjectRepository(Shop) private repo: Repository<Shop>) {}

  findAll(): Promise<Shop[]> {
    return this.repo.find();
  }

  async create(shop: Shop): Promise<Shop> {
    const newPost = await this.repo.create(shop);
    await this.repo.save(newPost);
    return newPost;
  }
}
