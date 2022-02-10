import { IsEmail, MinLength } from "class-validator";
import {Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:200})
    name: string;

    @Index({ unique: true })
    @IsEmail()
    @Column({length:200})
    email: string;

    @MinLength(4)
    @Column({length:200})
    password: string;
}
