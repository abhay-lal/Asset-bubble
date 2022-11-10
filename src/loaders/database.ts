import mongoose from 'mongoose';
import config from '../config';

let database: mongoose.Connection;

async function initializeClient(): Promise<mongoose.Connection> {
  await mongoose.connect(config.mongoose.url, config.mongoose.options);
  return mongoose.connection;
}

export default async () => {
  if (!database) {
    database = await initializeClient();
  }
  return database;
};
