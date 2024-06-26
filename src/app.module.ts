import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import * as dotenv from 'dotenv';
import { Blog } from './blogs/entities/blog.entity';
dotenv.config();

@Module({
  imports: [UsersModule,
    BlogsModule,
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [User, Blog],
      synchronize: true,
    }),
  ]
})
export class AppModule { }
