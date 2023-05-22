import { UUID } from "crypto";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Url } from "url";
import { DocumentType } from "./type.entity";
import { Seeker } from "../seeker-entity";
@Entity()
export class Document {
  @PrimaryGeneratedColumn("uuid")
  uuid: UUID;

  @Column()
  name: string;

  @OneToOne(() => DocumentType)
  @JoinColumn()
  type: DocumentType;

  @Column()
  url: string;

  @ManyToOne(() => Seeker, (seeker) => seeker.documents)
  seeker: Seeker;
}
