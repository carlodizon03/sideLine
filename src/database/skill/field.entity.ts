import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Field {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;
}
