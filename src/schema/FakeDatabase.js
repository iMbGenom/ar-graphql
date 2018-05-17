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
}