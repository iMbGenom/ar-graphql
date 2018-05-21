import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'
import { Post } from './Post'
import { fakeDatabase } from '../../FakeDatabase'

export const Author = GraphQLObjectType({
	name: "Author",
	description: "All details about author",
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		post: {
			type: GraphQLList(Post),
			resolve: (author) => {
				return fakeDatabase.getPostsOfAuthor(author.id);
			}
		}
	})
})