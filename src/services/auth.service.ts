import httpStatus from 'http-status';
import tokenService from './token.service';
import userService from './user.service';
import TokenModel from '../models/token/token.model';
import ApiError from '../utils/ApiError';
import { tokenTypes } from '../config/constants';

const loginUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  const user = await userService.getUserByEmail(email);
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  }
  return user;
};

const logout = async (refreshToken: string) => {
  const refreshTokenDoc = await TokenModel.findOne({
    token: refreshToken,
    type: tokenTypes.REFRESH,
    blacklisted: false,
  });
  if (!refreshTokenDoc) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
  }
  await refreshTokenDoc.remove();
};

const refreshAuth = async (refreshToken: string) => {
  try {
    const refreshTokenDoc = await tokenService.verifyToken(
      refreshToken,
      tokenTypes.REFRESH
    );
    const user = await userService.getUserById(String(refreshTokenDoc.user));
    if (!user) {
      throw new Error();
    }
    await refreshTokenDoc.remove();
    return tokenService.generateAuthTokens(user);
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate');
  }
};

const resetPassword = async (
  resetPasswordToken: string,
  newPassword: string
) => {
  try {
    const resetPasswordTokenDoc = await tokenService.verifyToken(
      resetPasswordToken,
      tokenTypes.RESET_PASSWORD
    );
    const user = await userService.getUserById(
      String(resetPasswordTokenDoc.user)
    );
    if (!user) {
      throw new Error();
    }
    await userService.updateUserById(user.id, { password: newPassword });
    await TokenModel.deleteMany({
      user: user.id,
      type: tokenTypes.RESET_PASSWORD,
    });
  } catch (error) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password reset failed');
  }
};

// const verifyEmail = async (verifyEmailToken: string) => {
//   try {
//     const verifyEmailTokenDoc = await tokenService.verifyToken(
//       verifyEmailToken,
//       tokenTypes.VERIFY_EMAIL
//     );
//     const user = await userService.getUserById(
//       String(verifyEmailTokenDoc.user)
//     );
//     if (!user) {
//       throw new Error();
//     }
//     await TokenModel.deleteMany({
//       user: user.id,
//       type: tokenTypes.VERIFY_EMAIL,
//     });
//     await userService.updateUserById(user.id, { isEmailVerified: true });
//   } catch (error) {
//     throw new ApiError(httpStatus.UNAUTHORIZED, 'Email verification failed');
//   }
// };

export default {
  loginUserWithEmailAndPassword,
  logout,
  refreshAuth,
  resetPassword,
  //   verifyEmail,
};
