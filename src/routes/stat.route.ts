import { Router, Request, Response } from 'express';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import { statValidation } from '../validations';
import statController from '../controllers/stat.controller';

const router = Router();

router
  .route('/')
  .get(auth(), validate(statValidation.getStats), statController.getStats)
  .post(auth(), validate(statValidation.createStat), statController.createStat);

router
  .route('/:statId')
  .get(auth(), validate(statValidation.getStat), statController.getStat)
  .patch(auth(), validate(statValidation.updateStat), statController.updateStat)
  .delete(
    auth(),
    validate(statValidation.deleteStat),
    statController.deleteStat
  );

export default router;
