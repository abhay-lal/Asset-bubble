import { model } from 'mongoose';
import { ITokenDocument, ITokenModel } from './token.types';
import TokenSchema from './token.schema';
const TokenModel = model<ITokenDocument, ITokenModel>('token', TokenSchema);
export default TokenModel;
