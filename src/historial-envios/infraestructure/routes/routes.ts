import { Router } from 'express';
import { retrieveShipmentsController } from '../../../dependecies'

const router = Router();

router.get('/shipments/:userUuid', (req, res) => retrieveShipmentsController.getShipments(req, res));

export default router;
