import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export type PostDocument = HydratedDocument<Post>;

@Schema()
@Directive('@key(fields: "id")')
@ObjectType('Post')
export class Post {
  @Field((type) => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String)
  title: string;

  @Prop()
  @Field(() => String)
  content: string;

  @Prop()
  @Field((type) => String)
  creator?: MongooseSchema.Types.ObjectId;

}

export const PostSchema = SchemaFactory.createForClass(Post);
