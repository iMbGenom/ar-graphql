import { fakeDatabase } from '../../FakeDatabase'
import { Comment, CommentInputType } from '../types/Comment';

export default {
    addComment: {
        type: Comment,
        description: 'Create new comment for a blog post',
        args: { 
            comment: { type: CommentInputType}
         },
        resolve: (root, {comment}) => {
            return fakeDatabase.addNewComment(comment)
        }
    }
}