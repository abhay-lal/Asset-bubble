import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import CommentModel from '../models/comments/comment.model';
import { Comment, CommentUpdate } from '../shared/customTypes';

const createComment = async (commentBody: Comment) => {
  const comment = await CommentModel.create(commentBody);
  return comment;
};

const getCommentById = async (id: string) => {
  const comment = await CommentModel.findById(id);
  return comment;
};

const queryComments = async (filter: any, options: any) => {
  const comments = await CommentModel.paginate(filter, options);
  return comments;
};

const updateCommentById = async (
  commentId: string,
  updateBody: CommentUpdate
) => {
  const comment = await getCommentById(commentId);
  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
  }
  Object.assign(comment, updateBody);
  await comment.save();
  return comment.populate({
    path: 'user',
    select: 'name',
  });
};

const deleteCommentById = async (commentId: string) => {
  const comment = await getCommentById(commentId);
  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
  }
  await comment.remove();
  return comment;
};

export default {
  createComment,
  getCommentById,
  queryComments,
  updateCommentById,
  deleteCommentById,
};
