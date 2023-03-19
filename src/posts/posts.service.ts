import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) { }

    async createPost(createPostDto: CreatePostInput): Promise<Post> {
        const newPost = await new this.postModel(createPostDto);
        return newPost.save();
    }

    async updatePost(postId: string, updatePostDto: UpdatePostInput): Promise<Post> {
        const existingPost = await this.postModel.findByIdAndUpdate(postId, updatePostDto, { new: true });
        if (!existingPost) {
            throw new NotFoundException(`Post #${postId} not found`);
        }
        return existingPost;
    }

    async getAllPosts(): Promise<Post[]> {
        const postData = await this.postModel.find().exec();
        if (!postData || postData.length == 0) {
            throw new NotFoundException('Post data not found!');
        }
        return postData;
    }

    async getPost(postId: string): Promise<Post> {
        const existingPost = await this.postModel.findById(postId).exec();
        if (!existingPost) {
            throw new NotFoundException(`Post #${postId} not found`);
        }
        return existingPost;
    }

    async getPostsByUserId(userId: string): Promise<Post[]> {
        const postsOfUser = this.postModel.find({ creator: userId }).exec();
        if (!postsOfUser) {
            throw new NotFoundException(`Post of #${userId} not found`);
        }
        return postsOfUser;
      }

    async deletePost(postId: string): Promise<Post> {
        const deletedPost = await this.postModel.findByIdAndDelete(postId);
        if (!deletedPost) {
            throw new NotFoundException(`Post #${postId} not found`);
        }
        return deletedPost;
    }
}