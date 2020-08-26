import { Router } from 'express';
// controllers
import UserController from './app/controllers/UserController';

// middlewares

const routes = new Router();

routes.get('/', UserController.store);

export default routes;
