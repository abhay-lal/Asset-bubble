import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';

// const verifyCallback =
//   (req: Request, resolve, reject, requiredRights: string[]) =>
//   async (err, user, info) => {
//     if (err || info || !user) {
//       return reject(
//         new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate')
//       );
//     }
//     req.user = user;

//     if (requiredRights.length) {
//       const userRights = roleRights.get(user.role);
//       let hasRequiredRights = true;
//       if (userRights) {
//         hasRequiredRights = requiredRights.every((requiredRight) =>
//           userRights.includes(requiredRight)
//         );
//       }

//       if (!hasRequiredRights && req.params.userId !== user.id) {
//         return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
//       }
//     }
//     resolve();
//   };

// const auth =
//   (...requiredRights: string[]) =>
//   async (req: Request, res: Response, next: NextFunction) =>
//     new Promise((resolve, reject) => {
//       passport.authenticate(
//         'jwt',
//         { session: false },
//         verifyCallback(req, resolve, reject, requiredRights)
//       )(req, res, next);
//     })
//       .then(() => next())
//       .catch((err) => next(err));

// const verifyCallback =
//   (req, resolve, reject, requiredRights) => async (err, user, info) => {
//     if (err || info || !user) {
//       return reject(
//         new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate')
//       );
//     }
//     req.user = user;

//     resolve();
//   };

const auth = () => async (req: Request, res: Response, next: NextFunction) => {
  return new Promise(() => {
    passport.authenticate('jwt', { session: false })(req, res, next);
  })
    .then(() => next())
    .catch((err) => next(err));
};

export default auth;
