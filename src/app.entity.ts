import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FakeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
