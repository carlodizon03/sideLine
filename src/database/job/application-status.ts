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
export class ApplicationStatus {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  status: string;
}
