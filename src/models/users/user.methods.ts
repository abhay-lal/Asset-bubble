import bcrypt from 'bcrypt';
import { IUserDocument } from './user.types';

export async function setLastUpdated(this: IUserDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}

export async function isPasswordMatch(
  this: IUserDocument,
  password: string
): Promise<boolean> {
  const user = this;
  return bcrypt.compare(password, user.password);
}
