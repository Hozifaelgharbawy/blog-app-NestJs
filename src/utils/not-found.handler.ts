import { Catch, ExceptionFilter, ArgumentsHost, NotFoundException } from '@nestjs/common';
import { EntityNotFoundError, QueryFailedError } from 'typeorm';

@Catch(EntityNotFoundError)
export class EntityNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: EntityNotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.status(404).json({
      statusCode: 404,
      message: 'Entity not found',
    });
  }
}

