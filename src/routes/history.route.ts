import { Router } from 'express';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import { historyValidation } from '../validations';
import historyController from '../controllers/history.controller';

const router = Router();

router
  .route('/')
  .get(
    auth(),
    validate(historyValidation.getHistories),
    historyController.getHistories
  )
  .post(
    auth(),
    validate(historyValidation.createHistory),
    historyController.createHistory
  );

router
  .route('/:historyId')
  .get(
    auth(),
    validate(historyValidation.getHistory),
    historyController.getHistory
  )
  .patch(
    auth(),
    validate(historyValidation.updateHistory),
    historyController.updateHistory
  )
  .delete(
    auth(),
    validate(historyValidation.deleteHistory),
    historyController.deleteHistory
  );

export default router;
