import Express from 'express';
import express from './express';
import logger from './logger';
import database from './database';

export default async ({ expressApp }: { expressApp: Express.Application }) => {
  await database();
  logger.info('DATABASE CONNECTED');

  await express({ app: expressApp });
  logger.info('EXPRESS LOADED');
};
