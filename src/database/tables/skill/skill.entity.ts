import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field } from "./field.entity";
import { JobDescription } from "../../job/job-description.entity";
import { Resume } from "../../seeker/resume.entity";

@Entity()
export class Skill {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Field)
  @JoinColumn()
  field: Field;

  @ManyToOne(() => JobDescription, (jobDescription) => jobDescription.skill)
  jobDescription: JobDescription;

  @ManyToOne(() => Resume, (resume) => resume.skills)
  resume: Resume;
}
