import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { User } from 'src/posts/entities/user.entity';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: './schema.gql',
            playground: true,
            buildSchemaOptions: {
                orphanedTypes: [User],
            },
        })
    ],
})

export class GraphqlModule {}

