import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BlogsModule } from './blogs/blogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [UsersModule,
    BlogsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'userBlogApp',
      password: 'BlogApp12',
      database: 'blog-app',
      entities: [User],
      synchronize: true,
    }),
  ],
  providers: [AppService],
})
export class AppModule { }
