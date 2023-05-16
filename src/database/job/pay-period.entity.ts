import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Entity()
export class PayPeriod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}
