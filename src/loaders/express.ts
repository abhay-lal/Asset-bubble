import express from 'express';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import passport from 'passport';
import { errorConverter, errorHandler } from '../middlewares/error';
import authLimiter from '../middlewares/rateLimiter';
import jwtStrategy from '../config/passport';
import ApiError from '../utils/ApiError';
import config from '../config';
import morgan from './morgan';
import routes from '../routes';
<<<<<<< HEAD
=======

>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
const httpStatus = require('http-status');

export default ({ app }: { app: express.Application }) => {
  if (config.env !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
  }

  // set security HTTP headers
  app.use(helmet());

  // parse json request body with limit
  app.use(express.json({ limit: '100kb' }));

  // parse urlencoded request body
  app.use(express.urlencoded({ extended: true, limit: '10kb' }));

  // sanitize request data
  app.use(xss());
  app.use(mongoSanitize());

  // gzip compression
  app.use(compression());

  // enable cors
  app.use(cors());

  // jwt authentication
  app.use(passport.initialize());
  passport.use('jwt', jwtStrategy);

  // limit repeated failed requests to auth endpoints
  if (config.env === 'production') {
    app.use('/auth', authLimiter);
  }
  app.use('/', routes);

  // send back a 404 error for any unknown api request
  app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
  });

  // convert error to ApiError, if needed
  app.use(errorConverter);

  // handle error
  app.use(errorHandler);
};
