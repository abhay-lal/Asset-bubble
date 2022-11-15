import z from 'zod';
import { Types } from 'mongoose';

const createComment = z.object({
  body: z.object({
    user: z.string(),
    message: z.string().trim(),
  }),
});

const getComments = z.object({
  query: z
    .object({
      user: z.string(),
      message: z.string().trim(),
      sortBy: z.string(),
      limit: z.number().int(),
      page: z.number().int(),
    })
    .partial(),
});

const getComment = z.object({
  params: z.object({
    commentId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid comment id',
        path: ['Comment Query'],
      }),
  }),
});

const updateComment = z.object({
  params: z.object({
    commentId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid comment id',
        path: ['Comment update'],
      }),
  }),
  body: z.object({
    user: z.string(),
    message: z.string().trim(),
  }),
});

const deleteComment = z.object({
  params: z.object({
    commentId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid comment id',
        path: ['Comment delete'],
      }),
  }),
});

export default {
  createComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
};
