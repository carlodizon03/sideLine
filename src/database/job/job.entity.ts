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
import { Company } from "../company/company.entity";
import { PositionLevel } from "./position-level.entity";
import { JobType } from "./job-type.entity";
import { PayPeriod } from "./pay-period.entity";
import { Application } from "./application.entity";
import { Job } from "./job.entity";
import { JobStatus } from "./job-status";

@Entity()
export class Job {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Company, (company) => company.job)
  company: Company;

  @Column()
  title: string;

  @OneToOne(() => PositionLevel)
  @JoinColumn()
  positionLevel: PositionLevel;

  @Column()
  location: string;

  @OneToOne(() => JobType)
  @JoinColumn()
  jobType: JobType;

  @Column()
  salary: number;

  @Column()
  currency: string;

  @OneToOne(() => PayPeriod)
  @JoinColumn()
  payPeriod: PayPeriod;

  @OneToMany(() => Application, (application) => application.job)
  applicants: Application;

  @OneToOne(() => JobStatus)
  @JoinColumn()
  jobStatus: JobStatus;

  @
}
