import z from 'zod';
import { Types } from 'mongoose';

const createUser = z.object({
  body: z.object({
    name: z.string().trim(),
    email: z.string().email().trim(),
    password: z
      .string()
      .trim()
      .refine(
        (val) =>
          !(!(val.length > 8) || !val.match(/\d/) || !val.match(/[a-zA-Z]/)),
        {
          message:
            'Password must be atleast 8 characters long with at least 1 letter and 1 number',
          path: ['Register'],
        }
      ),
  }),
});

const getUsers = z.object({
  query: z
    .object({
      name: z.string().trim(),
      email: z.string().email().trim(),
      sortBy: z.string(),
      limit: z.number().int(),
      page: z.number().int(),
    })
    .partial(),
});

const getUser = z.object({
  params: z.object({
    userId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid user id',
        path: ['User Query'],
      }),
  }),
});

const updateUser = z.object({
  params: z.object({
    userId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid user id',
        path: ['User update'],
      }),
  }),
  body: z
    .object({
      name: z.string().trim(),
      password: z
        .string()
        .trim()
        .refine(
          (val) =>
            !(!(val.length > 8) || !val.match(/\d/) || !val.match(/[a-zA-Z]/)),
          {
            message:
              'Password must be atleast 8 characters long with at least 1 letter and 1 number',
            path: ['Register'],
          }
        ),
    })
    .partial()
    .refine((body) => Object.keys(body).length, {
      message: 'Need atleast One field to update',
      path: ['User Update'],
    }),
});

const deleteUser = z.object({
  params: z.object({
    userId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid user id',
        path: ['User delete'],
      }),
  }),
});

export default {
  createUser,
  deleteUser,
  updateUser,
  getUser,
  getUsers,
};
