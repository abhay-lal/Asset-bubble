import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import moment from 'moment';
import httpStatus from 'http-status';
import config from '../config';
import userService from './user.service';
import TokenModel from '../models/token/token.model';
import { IUserDocument } from '../models/users/user.types';
import ApiError from '../utils/ApiError';
import { tokenTypes } from '../config/constants';

const generateToken = (
  userId: Types.ObjectId,
  expires: moment.Moment,
  type: tokenTypes,
  secret = config.jwt.secret
) => {
  const payload = {
    sub: userId,
    iat: moment().unix(),
    exp: expires.unix(),
    type,
  };
  return jwt.sign(payload, secret);
};

const saveToken = async (
  token: string,
  userId: Types.ObjectId,
  expires: moment.Moment,
  type: tokenTypes,
  blacklisted = false
) => {
  const tokenDoc = await TokenModel.create({
    token,
    user: userId,
    expires: expires.toDate(),
    type,
    blacklisted,
  });
  return tokenDoc;
};

const verifyToken = async (token: string, type: string) => {
  const payload = jwt.verify(token, config.jwt.secret);
  const tokenDoc = await TokenModel.findOne({
    token,
    type,
    user: payload.sub,
    blacklisted: false,
  });
  if (!tokenDoc) {
    throw new Error('Token not found');
  }
  return tokenDoc;
};

const generateAuthTokens = async (user: IUserDocument) => {
  const accessTokenExpires = moment().add(
    config.jwt.accessExpirationMinutes,
    'minutes'
  );
  const accessToken = generateToken(
    user.id,
    accessTokenExpires,
    tokenTypes.ACCESS
  );

  const refreshTokenExpires = moment().add(
    config.jwt.refreshExpirationDays,
    'days'
  );
  const refreshToken = generateToken(
    user.id,
    refreshTokenExpires,
    tokenTypes.REFRESH
  );
  await saveToken(
    refreshToken,
    user.id,
    refreshTokenExpires,
    tokenTypes.REFRESH
  );

  return {
    access: {
      token: accessToken,
      expires: accessTokenExpires.toDate(),
    },
    refresh: {
      token: refreshToken,
      expires: refreshTokenExpires.toDate(),
    },
  };
};

const generateResetPasswordToken = async (email: string) => {
  const user = await userService.getUserByEmail(email);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No users found with this email');
  }
  const expires = moment().add(
    config.jwt.resetPasswordExpirationMinutes,
    'minutes'
  );
  const resetPasswordToken = generateToken(
    user.id,
    expires,
    tokenTypes.RESET_PASSWORD
  );
  await saveToken(
    resetPasswordToken,
    user.id,
    expires,
    tokenTypes.RESET_PASSWORD
  );
  return resetPasswordToken;
};

// const generateVerifyEmailToken = async (user: IUserDocument) => {
//   const expires = moment().add(
//     config.jwt.verifyEmailExpirationMinutes,
//     'minutes'
//   );
//   const verifyEmailToken = generateToken(
//     user.id,
//     expires,
//     tokenTypes.VERIFY_EMAIL
//   );
//   await saveToken(verifyEmailToken, user.id, expires, tokenTypes.VERIFY_EMAIL);
//   return verifyEmailToken;
// };

export default {
  generateToken,
  saveToken,
  verifyToken,
  generateAuthTokens,
  generateResetPasswordToken,
  //   generateVerifyEmailToken,
};
