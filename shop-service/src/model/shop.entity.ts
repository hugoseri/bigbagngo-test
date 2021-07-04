import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'shop' })
export class Shop {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  location: string;
}
