import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Job } from "../job/job.entity";

@Entity()
export class Company {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  about: string;

  @OneToMany(() => Job, (job) => job.company)
  job: Job;
}
