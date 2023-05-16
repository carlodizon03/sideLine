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
import { User } from "./freelancer.entity";
import { JobHistory } from "./job-history.entity";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.profiles)
  user: User;

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.profile)
  history: JobHistory[];
}
