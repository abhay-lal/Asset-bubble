import { Types, Document, Model } from 'mongoose';

export interface IHistory {
  user: Types.ObjectId;
  unemployment: string;
  cpi: string;
  pe: string;
  open: string;
  high: string;
  low: string;
  close: string;
  industrialProduction: string;
  treasury: string;
  crash: string;
  year: string;
  month: string;
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
