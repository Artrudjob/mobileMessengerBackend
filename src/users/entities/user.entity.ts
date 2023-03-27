import { IsEmail, IsNotEmpty, IS_LENGTH, Max, Min } from "@nestjs/class-validator";
import { Message } from "src/messages/entities/message.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsNotEmpty()
    @Max(20)
    userName: string;

    @Column()
    @IsEmail()
    userEmail: string;

    @Column()
    @Min(8)
    userPassword: string;

    @OneToMany(() => Message, (message) => message.id)
    message: Message[];
}
