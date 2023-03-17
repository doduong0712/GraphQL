import { Field, ObjectType } from '@nestjs/graphql';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.entity';

export type PostDocument = HydratedDocument<Post>;

@Schema()
@ObjectType()
export class Post {
  @Field((type) => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String)
  title: string;

  @Prop()
  @Field((type) => String)
  creator: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field((type) => User)
  user?: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
