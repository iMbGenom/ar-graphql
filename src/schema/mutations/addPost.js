import { GraphQLNonNull, GraphQLInt } from 'graphql'
import { fakeDatabase } from '../../FakeDatabase'
import { Post, PostInputType } from '../types/Post';

export default {
    addPost: {
        type: Post,
        description: 'Create new blog post',
        args: { 
            post: { type: PostInputType}
         },
        resolve: (parent, {post}) => {
            return fakeDatabase.addNewBlogPost(post)
        }
    }
}