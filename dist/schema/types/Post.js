"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PostInputType = exports.Post = undefined;

var _graphql = require("graphql");

var _Author = require("./Author");

var _Comment = require("./Comment");

var _FakeDatabase = require("../../FakeDatabase");

var Post = exports.Post = new _graphql.GraphQLObjectType({
	name: "Post",
	description: "All Details of a blog Post",
	fields: {
		id: { type: _graphql.GraphQLInt },
		title: { type: _graphql.GraphQLString },
		content: { type: _graphql.GraphQLString },

		author: {
			type: _Author.Author,
			resolve: function resolve(post) {
				return _FakeDatabase.fakeDatabase.getAuthor(post.author);
			}
		},

		comments: {
			type: new _graphql.GraphQLList(_Comment.Comment),
			// args: {
			//     year: { type: GraphQLInt }
			// },
			resolve: function resolve(source) {
				return _FakeDatabase.fakeDatabase.getCommentsForPost(source.id);
			}
		}
	}
});

var PostInputType = exports.PostInputType = new _graphql.GraphQLInputObjectType({
	name: 'PostInput',
	fields: {
		type: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
		content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
		author: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) }
	}
});