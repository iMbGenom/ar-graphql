import { GraphQLNonNull, GraphQLInt } from 'graphql'
import { fakeDatabase } from '../../FakeDatabase'
import { Post } from '../types/Post';

export default {
    post: {
        type: Post,
        description: 'Get details about a spesific post',
        args: { 
            id: { type: new GraphQLNonNull(GraphQLInt)}
         },
        resolve: (parent, {id}) => {
            return fakeDatabase.getBlogPost(id)
        }
    }
}