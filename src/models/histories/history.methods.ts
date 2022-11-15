import { IHistoryDocument } from './history.types';

// eslint-disable-next-line import/prefer-default-export
export async function setLastUpdated(this: IHistoryDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}
