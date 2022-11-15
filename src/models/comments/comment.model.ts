import { model } from 'mongoose';
import { ICommentModel, ICommentDocument } from './comments.types';
import CommentSchema from './comment.schema';

const CommentModel = model<ICommentDocument, ICommentModel>(
  'comment',
  CommentSchema
);
export default CommentModel;
