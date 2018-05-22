'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeDatabase = function () {
	function FakeDatabase() {
		_classCallCheck(this, FakeDatabase);

		this.authors = [{ id: '88d6bec2', name: 'Xavier Decuyper', email: 'xavier@gmail.com' }, { id: '77e2448a', name: 'Jessie Baker', email: 'jessie@gmail.com' }, { id: '0beb564c', name: 'Adam Richards', email: 'adam@gmail.com' }];

		this.blogPosts = [{
			id: 1,
			title: 'Title satu',
			content: 'Content satu',
			author: '88d6bec2'
		}, {
			id: 2,
			title: 'Title dua',
			content: 'Content dua',
			author: '77e2448a'
		}, {
			id: 3,
			title: 'Title tiga',
			content: 'Content tiga',
			author: '0beb564c'
		}];

		this.comments = [{ id: 1, postId: 1, name: 'Anonymous', content: 'goodluck satu' }, { id: 2, postId: 1, name: 'Nick', content: 'goodluck dua' }, { id: 3, postId: 3, name: 'Peter', content: 'goodluck tiga' }];
	}

	// --------------------------------------------------------------------
	// 							READ METHODS
	// --------------------------------------------------------------------


	_createClass(FakeDatabase, [{
		key: 'getBlogPosts',
		value: function getBlogPosts() {
			return this.blogPosts;
		}
	}, {
		key: 'getBlogPost',
		value: function getBlogPost() {
			return this.blogPosts.filter(function (post) {
				return post.id === id;
			});
		}
	}, {
		key: 'getCommentsForPost',
		value: function getCommentsForPost(postId) {
			return this.comments.filter(function (comment) {
				return comment.postId === postId;
			});
		}
	}, {
		key: 'getAuthor',
		value: function getAuthor(authorId) {
			return this.authors.filter(function (author) {
				return author.id === authorId;
			});
		}
	}, {
		key: 'getPostsOfAuthor',
		value: function getPostsOfAuthor(authorId) {
			return this.getBlogPosts().filter(function (item) {
				return item.author === authorId;
			});
		}

		// --------------------------------------------------------------------
		// 							WRITE METHODS
		// --------------------------------------------------------------------

	}, {
		key: 'addNewBlogPost',
		value: function addNewBlogPost(post) {
			post.id = this.blogPosts.length + 1;
			this.blogPosts.push(post);
			return post;
		}
	}, {
		key: 'addNewComment',
		value: function addNewComment(comment) {
			comment.id = this.comments.length + 1;
			this.comments.push(comment);
			return comment;
		}
	}]);

	return FakeDatabase;
}();

var fakeDatabase = exports.fakeDatabase = new FakeDatabase();