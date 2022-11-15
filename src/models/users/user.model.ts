import { model } from 'mongoose';
import { IUserDocument, IUserModel } from './user.types';
import UserSchema from './user.schema';

const UserModel = model<IUserDocument, IUserModel>('user', UserSchema);
export default UserModel;
