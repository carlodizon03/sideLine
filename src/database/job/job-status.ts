
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


@Entity()
export class JobStatus{
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column()
    status:string
}