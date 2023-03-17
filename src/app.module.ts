import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [CommonModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
