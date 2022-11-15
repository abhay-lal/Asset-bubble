import { Router } from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
<<<<<<< HEAD
=======
import commentRoute from './comment.route';
import historyRoute from './history.route';
import twitterRoute from './twitter.route';
import statRoute from './stat.route';
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b

const router = Router();

const defaultRoutes = [
  { path: '/auth', route: authRoute },
  { path: '/users', route: userRoute },
<<<<<<< HEAD
=======
  { path: '/comments', route: commentRoute },
  { path: '/histories', route: historyRoute },
  { path: '/twitter', route: twitterRoute },
  { path: '/stats', route: statRoute },

>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
