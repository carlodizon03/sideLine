
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
export class PositionLevel{
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column()
    position:string

    @Column()
    level:string
}