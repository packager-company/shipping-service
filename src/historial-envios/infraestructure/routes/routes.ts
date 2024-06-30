import { Router } from 'express';
import { retrieveShipmentsController } from '../../../dependecies';
import { authenticateJWT } from '../middleware/authMiddleware';
import { AuthService } from '../services/authService';
import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
  user?: JwtPayload | string;
}

const router = Router();

router.get('/shipments/:userUuid', authenticateJWT, (req: AuthenticatedRequest, res) => retrieveShipmentsController.getShipments(req, res));

// Add a login route for testing
router.post('/login', (req, res) => {
  // In a real application, you would validate credentials here
  const user = { id: 1, username: 'testuser' };
  const token = AuthService.generateToken(user);
  res.json({ token });
});

export default router;