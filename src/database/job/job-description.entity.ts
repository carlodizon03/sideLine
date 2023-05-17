import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Skill } from "../skill/skill.entity";

@Entity()
export class JobDescription {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  content: string;
  
  @OneToMany(() => Skill, (skill) => skill.jobDescription)
  skill: Skill[];
}
