import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Entity,
  OneToOne,
  ManyToOne,
} from "typeorm";
import { Profile } from "../freelancer/profile.entity";
import { User } from "./freelancer.entity";
import { Profile } from './profile.entity';



@Entity()
export class JobHistory {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToOne(() => Job, (job) => )
  job: Job

  @Column()
  description:string

  @Column()
  start:Date

  @Column()
  end: Date

  @ManyToOne(()=> Profile, (profile) => profile.history)
  profile:Profile
}
