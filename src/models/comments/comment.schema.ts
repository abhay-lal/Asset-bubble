import { NextFunction } from 'express';
import { Schema } from 'mongoose';
import { paginate, toJSON } from '../plugins';
import { setLastUpdated } from './comment.methods';

const CommentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'Comment must belong to a user'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
    },
    dateOfEntry: {
      type: Date,
      default: new Date(),
    },
    lastUpdated: {
      type: Date,
      default: new Date(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

CommentSchema.plugin(paginate);
CommentSchema.plugin(toJSON);
CommentSchema.methods.setLastUpdated = setLastUpdated;
CommentSchema.pre('save', async function (next) {
  this.populate('user');
  next();
});
CommentSchema.pre(/^find/, function (next: NextFunction) {
  this.populate({
    path: 'user',
    select: 'name',
  });
  next();
});

export default CommentSchema;
