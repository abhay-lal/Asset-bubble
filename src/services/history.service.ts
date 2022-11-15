import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import HistoryModel from '../models/histories/history.model';
import { History, HistoryUpdate } from '../shared/customTypes';

const createHistory = async (historyBody: History) => {
  const history = await HistoryModel.create(historyBody);
  return history;
};

const getHistoryById = async (id: string) => {
  const history = await HistoryModel.findById(id);
  return history;
};

const queryHistories = async (filter: any, options: any) => {
  const histories = await HistoryModel.paginate(filter, options);
  return histories;
};

const updateHistoryById = async (
  historyId: string,
  updateBody: HistoryUpdate
) => {
  const history = await getHistoryById(historyId);
  if (!history) {
    throw new ApiError(httpStatus.NOT_FOUND, 'History not found');
  }
  Object.assign(history, updateBody);
  await history.save();
  return history;
};

const deleteHistoryById = async (historyId: string) => {
  const history = await getHistoryById(historyId);
  if (!history) {
    throw new ApiError(httpStatus.NOT_FOUND, 'History not found');
  }
  await history.remove();
  return history;
};

export default {
  createHistory,
  getHistoryById,
  queryHistories,
  updateHistoryById,
  deleteHistoryById,
};
