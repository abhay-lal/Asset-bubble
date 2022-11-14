import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import httpStatus from 'http-status';
import pick from '../utils/pick';
import ApiError from '../utils/ApiError';

const validate =
  <T, Output, Def extends z.ZodTypeDef, Input = Output>(
    schema: z.ZodType<Output, Def, Input>
  ) =>
  (req: Request, res: Response, next: NextFunction) => {
    const object = pick(req, ['params', 'query', 'body']);
    const result = schema.safeParse(object);
    if (!result.success) {
      const errorMessage = result.error.issues
        .map((details) => `${details.path[1]} ${details.message}`)
        .join(', ');
      return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    }
    Object.assign(req, result.data);
    return next();
  };

export default validate;
