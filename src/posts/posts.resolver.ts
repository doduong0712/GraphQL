import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';
import { PostsService } from './posts.service';


@Resolver(() => Post)
export class PostsResolver{
    constructor(private readonly postsService: PostsService) {}

    @Mutation(() => Post)
    createPost(@Args('createPostInput') createPostInput: CreatePostInput){
        return this.postsService.createPost(createPostInput);
    }

    @Query(() => [Post], { name: 'posts' })
    findAll() {
        return this.postsService.getAllPosts();
    }

    @Query(() => Post, { name: 'post' })
    findOne(@Args('_id', { type: () => String }) id: string) {
        return this.postsService.getPost(id);
    }

    @Mutation(() => Post)
    updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
        return this.postsService.updatePost(updatePostInput._id, updatePostInput);
    }

    @Mutation(() => Post)
    removePost(@Args('_id', { type: () => String }) id: string) {
        return this.postsService.deletePost(id);
    }
}