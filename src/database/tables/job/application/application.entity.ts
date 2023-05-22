import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Seeker } from "../../seeker/seeker-entity";
import { Resume } from "../../seeker/resume.entity";
import { ApplicationStatus } from "./application-status";
import { Job } from "../job.entity";

@Entity()
export class Application {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToOne(() => Seeker)
  @JoinColumn()
  applicant: Seeker;

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
