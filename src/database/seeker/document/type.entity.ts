import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DocumentType {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;
}
