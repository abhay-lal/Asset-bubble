import z from 'zod';
import { Types } from 'mongoose';

const createStat = z.object({
  body: z.object({
    totalClicks: z.number(),
    bearishClicks: z.number(),
  }),
});

const getStats = z.object({
  query: z
    .object({
      totalClicks: z.number(),
      bearishClicks: z.number(),
      sortBy: z.string(),
      limit: z.number().int(),
      page: z.number().int(),
    })
    .partial(),
});

const getStat = z.object({
  params: z.object({
    statId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid stat id',
        path: ['Stat Query'],
      }),
  }),
});

const updateStat = z.object({
  params: z.object({
    statId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid stat id',
        path: ['Stat Query'],
      }),
  }),
  body: z.object({
    totalClicks: z.number(),
    bearishClicks: z.number(),
  }),
});

const deleteStat = z.object({
  params: z.object({
    statId: z
      .string()
      .trim()
      .refine((val) => Types.ObjectId.isValid(val), {
        message: 'Invalid stat id',
        path: ['Stat Query'],
      }),
  }),
});

export default {
  createStat,
  getStats,
  getStat,
  updateStat,
  deleteStat,
};
