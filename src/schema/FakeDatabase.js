import post from "./queries/post";

class FakeDatabase {
	constructor() {
		this.authors = [
			{ id: '88d6bec2', name: 'Xavier Decuyper', email: 'xavier@gmail.com' },
			{ id: '77e2448a', name: 'Jessie Baker', email: 'jessie@gmail.com' },
			{ id: '0beb564c', name: 'Adam Richards', email: 'adam@gmail.com' }
		];

		this.blogPosts = [
			{
				id: 1,
				title: 'Title satu',
				content: 'Content satu',
				author: '88d6bec2'
			},
			{
				id: 2,
				title: 'Title dua',
				content: 'Content dua',
				author: '77e2448a'
			},
			{
				id: 3,
				title: 'Title tiga',
				content: 'Content tiga',
				author: '0beb564c'
			}
		];

		this.comments = [
			{ id: 1, postId: 1, name: 'Anonymous', content: 'goodluck satu' },
			{ id: 2, postId: 1, name: 'Nick', content: 'goodluck dua' },
			{ id: 3, postId: 3, name: 'Peter', content: 'goodluck tiga' }
		]
	}

	// --------------------------------------------------------------------
	// 							READ METHODS
	// --------------------------------------------------------------------
	getBlogPosts() {
		return this.blogPosts;
	}

	getBlogPost() {
		return this.blogPosts.filter((post) => {
			return post.id === id;
		})
	}

	getCommentsForPost(postId) {
		return this.comments.filter((comment) => {
			return comment.postId === postId;
		})
	}

	getAuthor(authorId) {
		return this.authors.filter((author) => {
			return author.id = authorId;
		})
	}

	getPostsOfAuthor(authorId) {
		return this.getBlogPosts().filter((item) => {
			return item.author === authorId;
		})
	}

	// --------------------------------------------------------------------
	// 							WRITE METHODS
	// --------------------------------------------------------------------
	addNewBlogPost(post) {
		post.id = this.blogPosts.length + 1;
		this.blogPosts.push(post);
		return post;
	}

	addNewComment(comment) {
		comment.id = this.comments.length + 1;
		this.comments.push(comment);
		return comment;
	}

}

export const fakeDatabase = new FakeDatabase();