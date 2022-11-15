import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/CatchAsync';
import ApiError from '../utils/ApiError';
import pick from '../utils/pick';
import commentService from '../services/comment.service';

const createComment = catchAsync(async (req: Request, res: Response) => {
  const comment = await commentService.createComment(req.body);
  res.status(httpStatus.CREATED).send(comment);
});

const getComment = catchAsync(async (req: Request, res: Response) => {
  const comment = await commentService.getCommentById(req.params.commentId);
  if (!comment) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
  }
  res.send(comment);
});

const getComments = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['message']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await commentService.queryComments(filter, options);
  res.send(result);
});

const updateComment = catchAsync(async (req: Request, res: Response) => {
  const comment = await commentService.updateCommentById(
    req.params.commentId,
    req.body
  );
  res.send(comment);
});

const deleteComment = catchAsync(async (req: Request, res: Response) => {
  await commentService.deleteCommentById(req.params.commentId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createComment,
  getComment,
  getComments,
  updateComment,
  deleteComment,
};
