import { Types, Document, Model } from 'mongoose';

export interface IHistory {
  user: Types.ObjectId;
  unemployment: number;
  cpi: number;
  pe: number;
  open: number;
  high: number;
  low: number;
  close: number;
  industrialProduction: number;
  treasury: number;
  crash: number;
  year: number;
  month: number;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface IHistoryDocument extends IHistory, Document {
  setLastUpdated: (this: IHistoryDocument) => Promise<void>;
}

export interface IHistoryModel extends Model<IHistoryDocument> {
  paginate: (
    filter: any,
    options: any
  ) => {
    results: any;
    page: number;
    limit: number;
    totalPages: number;
    totalResults: any;
  };
}
