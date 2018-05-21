import { GraphQLList } from 'graphql'
import { Post } from '../types/Post'
import { fakeDatabase } from '../../FakeDatabase'

export default {
    posts: {
        type: new GraphQLList(Post),
        description: 'Get a List from recent blog',
        args: { },
        resolve: () => {
            return fakeDatabase.getBlogPosts()
        }
    }
}