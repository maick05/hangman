import { Exclude } from 'class-transformer';
import { IsEmail, MinLength } from 'class-validator';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200 })
    name: string;

    @Index({ unique: true })
    @IsEmail()
    @Column({ length: 200 })
    email: string;

    @Exclude({
        toPlainOnly: true
    })
    @MinLength(4)
    @Column({ length: 200 })
    password: string;
}
