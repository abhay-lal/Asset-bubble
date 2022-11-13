import { NextFunction } from 'express';
import { Schema } from 'mongoose';
import { paginate, toJSON } from '../plugins';
import { setLastUpdated } from './history.methods';

const HistorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'History must belong to a user'],
  },
  unemployment: {
    type: Number,
  },
  cpi: {
    type: Number,
  },
  pe: {
    type: Number,
  },
  open: {
    type: Number,
  },
  high: {
    type: Number,
  },
  low: {
    type: Number,
  },
  close: {
    type: Number,
  },
  industrialProduction: {
    type: Number,
  },
  treasury: {
    type: Number,
  },
  crash: {
    type: Number,
  },
  year: {
    type: Number,
  },
  month: {
    type: Number,
  },
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

HistorySchema.plugin(paginate);
HistorySchema.plugin(toJSON);
HistorySchema.methods.setLastUpdated = setLastUpdated;
HistorySchema.pre('save', async function (next) {
  this.populate('user');
  next();
});

HistorySchema.pre(/^find/, function (next: NextFunction) {
  this.populate({
    path: 'user',
    select: 'name',
  });
  next();
});

export default HistorySchema;
