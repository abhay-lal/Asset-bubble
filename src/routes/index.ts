import { Router } from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import commentRoute from './comment.route';
import historyRoute from './history.route';
import twitterRoute from './twitter.route';
import statRoute from './stat.route';

const router = Router();

const defaultRoutes = [
  { path: '/auth', route: authRoute },
  { path: '/users', route: userRoute },
  { path: '/comments', route: commentRoute },
  { path: '/histories', route: historyRoute },
  { path: '/twitter', route: twitterRoute },
  { path: '/stats', route: statRoute },

];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
