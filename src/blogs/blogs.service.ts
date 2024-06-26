import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogsService {

  constructor(
    @InjectRepository(Blog)
    private blogRepository: Repository<Blog>,
  ) { }
  async create(createBlogDto: CreateBlogDto) {
    return await this.blogRepository.save(createBlogDto);
  }

  findAll() {
    return this.blogRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.blogRepository.findOne({ where: { id }, relations: ['user'] });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    await this.blogRepository.update(id, updateBlogDto);
    const updatedUser = await this.blogRepository.findOne({ where: { id } });

    if (!updatedUser) {
      throw new NotFoundException('blog not found');
    }

    return updatedUser;
  }

  async remove(id: number) {
    return await this.blogRepository.delete(id);
  }
}
