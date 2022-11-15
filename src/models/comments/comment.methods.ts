import { ICommentDocument } from "./comment.types";

// eslint-disable-next-line import/prefer-default-export
export async function setLastUpdated(this: ICommentDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}
