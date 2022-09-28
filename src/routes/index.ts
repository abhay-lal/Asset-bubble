import { Router } from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import paperRoute from './paper.route';
import speakerRoute from './speaker.route';
import dateRoute from './date.route';

const router = Router();

const defaultRoutes = [
  { path: '/auth', route: authRoute },
  { path: '/users', route: userRoute },
  { path: '/papers', route: paperRoute },
  { path: '/speakers', route: speakerRoute },
  { path: '/dates', route: dateRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
