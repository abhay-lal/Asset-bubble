import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../utils/CatchAsync';
import ApiError from '../utils/ApiError';
import pick from '../utils/pick';
import historyService from '../services/history.service';

const createHistory = catchAsync(async (req: Request, res: Response) => {
  const history = await historyService.createHistory(req.body);
  res.status(httpStatus.CREATED).send(history);
});

const getHistory = catchAsync(async (req: Request, res: Response) => {
  const history = await historyService.getHistoryById(req.params.historyId);
  if (!history) {
    throw new ApiError(httpStatus.NOT_FOUND, 'History not found');
  }
  res.send(history);
});

const getHistories = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ['message']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await historyService.queryHistories(filter, options);
  res.send(result);
});

const updateHistory = catchAsync(async (req: Request, res: Response) => {
  const history = await historyService.updateHistoryById(
    req.params.historyId,
    req.body
  );
  res.send(history);
});

const deleteHistory = catchAsync(async (req: Request, res: Response) => {
  await historyService.deleteHistoryById(req.params.historyId);
  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  createHistory,
  getHistory,
  getHistories,
  updateHistory,
  deleteHistory,
};
