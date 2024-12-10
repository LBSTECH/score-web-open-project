import { Express } from 'express';
import init from './init/index';
import build from './build/index';
import govtech from './govtech/index';
const mountRoutes = (app: Express) => {
  app.use('/init',init);
  app.use('/build',build);
  app.use('/govtech',govtech);
};

export default mountRoutes;