import { GraphQLObjectType, GraphQLString } from 'graphql';

export const Author = GraphQLObjectType({
	name: "Author",
	description: "All details about author",
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		email: { type: GraphQLString }
	});
})