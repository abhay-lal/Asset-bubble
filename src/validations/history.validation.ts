import z from 'zod';
import { Types } from 'mongoose';

const createHistory = z.object({
  body: z.object({
    user: z.string(),
    unemployment: z.number(),
    cpi: z.number(),
    pe: z.number(),
    open: z.number(),
    high: z.number(),
    low: z.number(),
    close: z.number(),
    industrialProduction: z.number(),
    treasury: z.number(),
    crash: z.number(),
    year: z.number(),
    month: z.number(),
  }),
});

const getHistories = z.object({
  query: z
    .object({
      user: z.string(),
      unemployment: z.number(),
      cpi: z.number(),
      pe: z.number(),
      open: z.number(),
      high: z.number(),
      low: z.number(),
      close: z.number(),
      industrialProduction: z.number(),
      treasury: z.number(),
      crash: z.number(),
      year: z.number(),
      month: z.number(),
      sortBy: z.string(),
      limit: z.number().int(),
      page: z.number().int(),
    })
    .partial(),
});

const getHistory = z.object({
  params: z.object({
    historyId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid history id',
        path: ['History Query'],
      }),
  }),
});

const updateHistory = z.object({
  params: z.object({
    historyId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid history id',
        path: ['History update'],
      }),
  }),
  body: z.object({
    user: z.string(),
    unemployment: z.number(),
    cpi: z.number(),
    pe: z.number(),
    open: z.number(),
    high: z.number(),
    low: z.number(),
    close: z.number(),
    industrialProduction: z.number(),
    treasury: z.number(),
    crash: z.number(),
    year: z.number(),
    month: z.number(),
  }),
});

const deleteHistory = z.object({
  params: z.object({
    historyId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid history id',
        path: ['History delete'],
      }),
  }),
});

export default {
  createHistory,
  getHistories,
  getHistory,
  updateHistory,
  deleteHistory,
};
