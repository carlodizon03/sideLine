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
import { Seeker } from "../seeker/seeker-entity";
import { Company } from "../company/company.entity";
import { PositionLevel } from "./position-level.entity";
import { JobType } from "./job-type.entity";
import { PayPeriod } from "./pay-period.entity";
import { Application } from "./application/application.entity";
import { JobStatus } from "./job-status";
import { HeadHunter } from "../headhunter/head-hunter.entity";
import { JobDescription } from "./job-description.entity";

@Entity()
export class Job {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Company, (company) => company.job)
  company: Company;

  @ManyToOne(() => HeadHunter, (headhunter) => headhunter.jobs)
  headHunter: HeadHunter;

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

  @OneToOne(() => JobDescription)
  @JoinColumn()
  JobDescription: JobDescription;

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

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;

  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;

  @Column()
  deletedBy: string;
}
