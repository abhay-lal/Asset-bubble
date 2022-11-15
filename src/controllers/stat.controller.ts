import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/CatchAsync';
import ApiError from '../utils/ApiError';
import pick from '../utils/pick';
import statService from '../services/stat.service';

const createStat = catchAsync(async (req: Request, res: Response) => {
  const stat = await statService.createStat(req.body);
  res.status(httpStatus.CREATED).send(stat);
});

const getStat = catchAsync(async (req: Request, res: Response) => {
  const stat = await statService.getStatById(req.params.statId);
  if (!stat) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Stat not found');
  }
  res.send(stat);
});

const getStats = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['totalClicks', 'bearishClicks']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await statService.queryStats(filter, options);
  res.send(result);
});

const updateStat = catchAsync(async (req: Request, res: Response) => {
  const stat = await statService.updateStatById(req.params.statId, req.body);
  res.send(stat);
});

const deleteStat = catchAsync(async (req: Request, res: Response) => {
  await statService.deleteStatById(req.params.statId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createStat,
  getStat,
  getStats,
  updateStat,
  deleteStat,
};
