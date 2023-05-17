import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Resume } from "./resume.entity";
import { Profile } from "./profile.entity";
import { Document } from "./document/document.entity";
@Entity()
export class Seeker {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 100 })
  userName: string;

  @Column()
  passwordHash: string;

  @Column({ length: 100 })
  firstName: string;

  @Column({ length: 100 })
  lastName: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  isVerified: boolean;

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

  @OneToMany(() => Resume, (resume) => resume.seeker)
  resumes: Resume[];

  @OneToMany(() => Profile, (profile) => profile.seeker)
  profiles: Profile[];

  @OneToMany(() => Document, (document) => document.seeker)
  documents: Document[];
}
