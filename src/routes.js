import { Router } from 'express';
// controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// middlewares
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // -> tudo que vier depois daqui vai usar o middleware

routes.put('/users', UserController.update);

export default routes;
