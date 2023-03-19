import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Post } from '../../posts/entities/post.entity';

export type UserDocument = HydratedDocument<User>;


@Schema()
@ObjectType('User')
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {

  @Field(() => ID)
  @Directive('@external')
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String)
  email: string;

  @Prop()
  @Field(() => String)
  password: string;

  // @Prop()
  // @Field(() => [Post])
  // posts?: Post[];

}

export const UserSchema = SchemaFactory.createForClass(User);