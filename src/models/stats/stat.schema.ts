import { Schema } from 'mongoose';
import { paginate, toJSON } from '../plugins';
import { setLastUpdated } from './stat.methods';

const StatSchema = new Schema({
  totalClicks: {
    type: Number,
    default: 0,
  },
  bearishClicks: {
    type: Number,
    default: 0,
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

StatSchema.plugin(paginate);
StatSchema.plugin(toJSON);
StatSchema.methods.setLastUpdated = setLastUpdated;

export default StatSchema;
