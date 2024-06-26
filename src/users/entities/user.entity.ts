import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";


@Entity('users')
@Unique(['email'])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: String;

    @Column()
    lastName: String;

    @Column()
    password: String;

    @Column()
    email: String;

    @Column()
    userName: String;

    @Column()
    age: Number;

    @Column({ default: true })
    isActive?: Boolean;
}
