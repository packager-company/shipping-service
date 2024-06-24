import { Router } from 'express';
import { retrieveShipmentsController } from '../../../dependecies'

const router = Router();

router.get('/shipments/:userUuid', (req, res) => retrieveShipmentsController.getShipments(req, res));
//ejemplo: http://localhost:3001/api/shipments/123e4567-e89b-12d3-a456-426614174000

export default router;
