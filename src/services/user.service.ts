import httpStatus from 'http-status';
import { User, UserUpdate } from '../shared/customTypes';
import UserModel from '../models/users/user.model';
import ApiError from '../utils/ApiError';

const createUser = async (userBody: User) => {
  if (await UserModel.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  return UserModel.create(userBody);
};

const getUserById = async (id: string) => UserModel.findById(id);
const getUserByEmail = async (email: string) => UserModel.findOne({ email });

const queryUsers = async (filter: any, options: any) => {
  const users = await UserModel.paginate(filter, options);
  return users;
};
const updateUserById = async (userId: string, updateBody: UserUpdate) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (
    updateBody.email &&
    (await UserModel.isEmailTaken(updateBody.email, userId))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

const deleteUserById = async (userId: string) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

export default {
  createUser,
  updateUserById,
  queryUsers,
  deleteUserById,
  getUserById,
  getUserByEmail,
};
