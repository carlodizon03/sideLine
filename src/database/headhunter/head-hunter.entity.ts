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

@Entity()
export class HeadHunter {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  username: string;

  @Column()
  passwordHash: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @OneToOne(() => Company)
  @JoinColumn()
  company: Company;

  @Column()
  companyRole: string;

  @Column()
  isVerified: boolean;

  @OneToMany(() => Job, (job) => job.headHunter)
  jobs: Job[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @DeleteDateColumn()
  deleteDate: Date;

  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;

  @Column()
  deletedBy: string;
}
