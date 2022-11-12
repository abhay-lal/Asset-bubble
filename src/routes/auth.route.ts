import { Router } from 'express';
import authController from '../controllers/auth.controller';
import validate from '../middlewares/validation';
import { authValidation } from '../validations';

const router = Router();

router.post(
  '/register',
  validate(authValidation.register),
  authController.register
);
router.post('/login', validate(authValidation.login), authController.login);
router.post(
  '/refresh-tokens',
  validate(authValidation.refreshTokens),
  authController.refreshTokens
);
// router.post('/forgot-password', validate(authValidation.forgotPassword), authController.forgotPassword);
router.post(
  '/reset-password',
  validate(authValidation.resetPassword),
  authController.resetPassword
);
// router.post('/send-verification-email', auth(), authController.sendVerificationEmail);
// router.post(
//   '/verify-email',
//   validate(authValidation.verifyEmail),
//   authController.verifyEmail
// );

export default router;
