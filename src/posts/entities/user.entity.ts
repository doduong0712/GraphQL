import { ObjectType, Field } from '@nestjs/graphql';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Post } from './post.entity';

export type UserDocument = HydratedDocument<User>;


@Schema()
@ObjectType()
export class User {

  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String)
  email: string;

  @Prop()
  @Field(() => String)
  password: string;

  @Prop()
  @Field((type) => [Post])
  posts: Post[];

}

export const UserSchema = SchemaFactory.createForClass(User);