import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from "graphql";
import { Author } from "./Author";
import { fakeDatabase } from "../../FakeDatabase";

export const Post = GraphQLObjectType({
	name: "Post",
	description: "All Details of a blog Post",
	fields: () => ({
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
			resolve: (post) => {
				return fakeDatabase.getCommentsForPost(post.id);
			}
		}
	});
})