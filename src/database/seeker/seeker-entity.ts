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
import { User } from "../user/user-entity";
@Entity()
export class Seeker extends User {
  @OneToMany(() => Resume, (resume) => resume.seeker)
  resumes: Resume[];

  @OneToMany(() => Profile, (profile) => profile.seeker)
  profiles: Profile[];

  @OneToMany(() => Document, (document) => document.seeker)
  documents: Document[];
}
