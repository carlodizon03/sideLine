import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class JobStatus {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  status: string;
}
