import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import StatModel from '../models/stat/stat.model';
import { Stat, StatUpdate } from '../shared/customTypes';

const createStat = async (statBody: Stat) => {
  const stat = await StatModel.create(statBody);
  return stat;
};

const getStatById = async (id: string) => {
  const stat = await StatModel.findById(id);
  return stat;
};

const queryStats = async (filter: any, options: any) => {
  const stats = await StatModel.paginate(filter, options);
  return stats;
};

const updateStatById = async (statId: string, updateBody: StatUpdate) => {
  const stat = await getStatById(statId);
  if (!stat) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Stat not found');
  }
  Object.assign(stat, updateBody);
  await stat.save();
  return stat;
};

const deleteStatById = async (statId: string) => {
  const stat = await getStatById(statId);
  if (!stat) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Stat not found');
  }
  await stat.remove();
  return stat;
};

export default {
  createStat,
  getStatById,
  queryStats,
  updateStatById,
  deleteStatById,
};
