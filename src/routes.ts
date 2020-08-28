import express from 'express';
import ClientController from './controllers/ClientController';

const routes = express.Router();
const clientController = new ClientController();

routes.post('/client', clientController.create);

export default routes;