import { model } from 'mongoose';
import { IStatModel, IStatDocument } from './stats.types';
import StatSchema from './stat.schema';

const StatModel = model<IStatDocument, IStatModel>('stat', StatSchema);

export default StatModel;
