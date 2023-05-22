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
import { Seeker } from "./seeker-entity";
import { Skill } from "../tables/skill/skill.entity";
@Entity()
export class Resume {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

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

  @ManyToOne(() => Seeker, (seeker) => seeker.resumes)
  seeker: Seeker;

  @OneToMany(() => Skill, (skill) => skill.resume)
  skills: Skill[];
}
