import z from 'zod';
import { Types } from 'mongoose';

const createHistory = z.object({
  body: z.object({
    user: z.string(),
    unemployment: z.string(),
    cpi: z.string(),
    pe: z.string(),
    open: z.string(),
    high: z.string(),
    low: z.string(),
    close: z.string(),
    industrialProduction: z.string(),
    treasury: z.string(),
    crash: z.string(),
    year: z.string(),
    month: z.string(),
  }),
});

const getHistories = z.object({
  query: z
    .object({
      user: z.string(),
      unemployment: z.string(),
      cpi: z.string(),
      pe: z.string(),
      open: z.string(),
      high: z.string(),
      low: z.string(),
      close: z.string(),
      industrialProduction: z.string(),
      treasury: z.string(),
      crash: z.string(),
      year: z.string(),
      month: z.string(),
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
    unemployment: z.string(),
    cpi: z.string(),
    pe: z.string(),
    open: z.string(),
    high: z.string(),
    low: z.string(),
    close: z.string(),
    industrialProduction: z.string(),
    treasury: z.string(),
    crash: z.string(),
    year: z.string(),
    month: z.string(),
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
