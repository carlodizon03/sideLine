import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Seeker } from "./seeker-entity";
import { JobHistory } from "./job-history.entity";
import { Resume } from "./resume.entity";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => Seeker, (seeker) => seeker.profiles)
  seeker: Seeker;

  @OneToMany(() => JobHistory, (jobHistory) => jobHistory.profile)
  history: JobHistory[];

  @OneToOne(() => Resume)
  @JoinColumn()
  resume:Resume
}
