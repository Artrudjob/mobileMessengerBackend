import { IsDate, Min } from "@nestjs/class-validator";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    @IsDate()
    createdAt: Date

    @CreateDateColumn()
    @IsDate()
    updateAt: Date

    @Column()
    @Min(0)
    context: string

    @ManyToOne(() => User)
    owner: User
}
