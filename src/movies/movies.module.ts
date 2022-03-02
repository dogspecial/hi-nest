import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    controllers: [MoviesController], // get url & return fundtion. like express router
  providers: [MoviesService], // business logic
})
export class MoviesModule {}
