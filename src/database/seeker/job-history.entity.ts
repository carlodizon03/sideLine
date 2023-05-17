import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Profile } from "./profile.entity";
import { Job } from "../job/job.entity";

@Entity()
export class JobHistory {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToOne(() => Job)
  @JoinColumn()
  job: Job;

  @Column()
  description: string;

  @Column()
  start: Date;

  @Column()
  end: Date;

  @ManyToOne(() => Profile, (profile) => profile.history)
  profile: Profile;
}
