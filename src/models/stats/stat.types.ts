import { Document, Model } from 'mongoose';

export interface IStat {
  totalClicks: number;
  bearishClicks: number;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface IStatDocument extends IStat, Document {
  setLastUpdated: (this: IStatDocument) => Promise<void>;
}

export interface IStatModel extends Model<IStatDocument> {
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
