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
  JoinColumn,
} from "typeorm";
import { User } from "../freelancer/freelancer.entity";
import { Resume } from "../freelancer/resume.entity";
import { ApplicationStatus } from "./application-status";
import { Job } from "./job.entity";

@Entity()
export class Application {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  applicant: User;

  @Column()
  coverLetter: string;

  @OneToOne(() => Resume)
  @JoinColumn()
  resume: Resume;

  @OneToOne(() => ApplicationStatus)
  @JoinColumn()
  status: ApplicationStatus;

  @ManyToOne(() => Job, (job) => job.applicants)
  job: Job;
}
