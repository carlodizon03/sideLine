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
export class JobType {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  type: string;
}
