import { Document, Model, Types } from 'mongoose';
import { tokenTypes } from '../../config/constants';

export interface IToken {
  token: string;
  user: Types.ObjectId | Record<string, unknown>;
  type: tokenTypes;
  expires: Date;
  blacklisted: boolean;
}

export interface ITokenDocument extends IToken, Document {}
export interface ITokenModel extends Model<ITokenDocument> {}
