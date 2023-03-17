import { InputType, Field } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@InputType()
export class CreatePostInput {
  @Field(() => String)
  title: string;
  @Field(() => String)
  creator: string;
  @Field(() => User)
  user?: User;
}