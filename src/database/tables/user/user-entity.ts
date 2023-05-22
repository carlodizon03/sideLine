import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class User{
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column({ length: 100 })
    userName: string;
  
    @Column()
    passwordHash: string;
  
    @Column({ length: 100 })
    firstName: string;
  
    @Column({ length: 100 })
    lastName: string;
  
    @Column()
    email: string;
  
    @Column()
    address: string;
  
    @Column()
    isVerified: boolean;
  
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
  
    @Column()
    deletedBy: string;
}