import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Company } from "../company/company.entity";
import { Job } from "../job/job.entity";
import { User } from "../user/user-entity";

@Entity()
export class HeadHunter extends User {
  @OneToOne(() => Company)
  @JoinColumn()
  company: Company;

  @Column()
  companyRole: string;

  @OneToMany(() => Job, (job) => job.headHunter)
  jobs: Job[];

 
}
