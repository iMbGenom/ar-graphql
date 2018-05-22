import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLInputObjectType, GraphQLNonNull } from "graphql";
import { Author } from "./Author";
import { Comment } from "./Comment";
import { fakeDatabase } from "../../FakeDatabase";

export const Post = new GraphQLObjectType({
	name: "Post",
	description: "All Details of a blog Post",
	fields: {
		id: { type: GraphQLInt },
		title: { type: GraphQLString },
		content: { type: GraphQLString },

		author: {
			type: Author,
			resolve: (post) => {
				return fakeDatabase.getAuthor(post.author);
			}
		},

		comments: {
			type: new GraphQLList(Comment),
            // args: {
            //     year: { type: GraphQLInt }
            // },
			resolve: (source) => {
				return fakeDatabase.getCommentsForPost(source.id);
			}
		}
	}
})

export const PostInputType = new GraphQLInputObjectType({
	name: 'PostInput',
	fields: {
		type: { type: new GraphQLNonNull(GraphQLString) },
		content: { type: new GraphQLNonNull(GraphQLString) },
		author: { type: new GraphQLNonNull(GraphQLString) }
	}
})