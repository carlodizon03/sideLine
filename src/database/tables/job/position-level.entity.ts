import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PositionLevel {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  position: string;

  @Column()
  level: string;
}
