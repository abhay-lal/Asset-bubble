import { Model } from 'mongoose';
import { IUserDocument } from './user.types';

export async function isEmailTaken(
  this: Model<IUserDocument>,
  email: string,
  excludeId: string
) {
  const user = await this.findOne({ email, _id: { $ne: excludeId || null } });
  console.log(email);
  return !!user;
}
