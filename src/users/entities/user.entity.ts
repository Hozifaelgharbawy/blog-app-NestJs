import { Blog } from "src/blogs/entities/blog.entity";
import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";


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

    @OneToMany('blogs', 'user')
    blogs: Blog[];

    @Column({ default: true })
    isActive?: Boolean;
}
