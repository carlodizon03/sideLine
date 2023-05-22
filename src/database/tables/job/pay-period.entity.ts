import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PayPeriod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}
