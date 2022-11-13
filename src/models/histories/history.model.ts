import { model } from 'mongoose';
import { IHistoryModel, IHistoryDocument } from './histories.types';
import HistorySchema from './history.schema';

const HistoryModel = model<IHistoryDocument, IHistoryModel>(
  'history',
  HistorySchema
);

export default HistoryModel;
