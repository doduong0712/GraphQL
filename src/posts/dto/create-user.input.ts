import { InputType, Field } from '@nestjs/graphql';
import { Post } from '../entities/post.entity';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  email: string;
  @Field(() => String)
  password: string;
  @Field(() => [Post])
  posts: Post[];
}