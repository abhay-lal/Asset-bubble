import { Types, Document, Model } from 'mongoose';

export interface IComment {
  user: Types.ObjectId;
  message: string;
  dateOfEntry: Date;
  lastUpdated: Date;
}

export interface ICommentDocument extends IComment, Document {
  setLastUpdated: (this: ICommentDocument) => Promise<void>;
}

export interface ICommentModel extends Model<ICommentDocument> {
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
