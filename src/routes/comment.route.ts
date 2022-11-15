import { Router } from 'express';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import { commentValidation } from '../validations';
import commentController from '../controllers/comment.controller';

const router = Router();

router
  .route('/')
  .get(
    auth(),
    validate(commentValidation.getComments),
    commentController.getComments
  )
  .post(
    auth(),
    validate(commentValidation.createComment),
    commentController.createComment
  );

router
  .route('/:commentId')
  .get(
    auth(),
    validate(commentValidation.getComment),
    commentController.getComment
  )
  .patch(
    auth(),
    validate(commentValidation.updateComment),
    commentController.updateComment
  )
  .delete(
    auth(),
    validate(commentValidation.deleteComment),
    commentController.deleteComment
  );

export default router;
