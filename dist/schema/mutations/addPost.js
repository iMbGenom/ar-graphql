'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _FakeDatabase = require('../../FakeDatabase');

var _Post = require('../types/Post');

exports.default = {
    addPost: {
        type: _Post.Post,
        description: 'Create new blog post',
        args: {
            post: { type: _Post.PostInputType }
        },
        resolve: function resolve(root, _ref) {
            var post = _ref.post;

            return _FakeDatabase.fakeDatabase.addNewBlogPost(post);
        }
    }
};