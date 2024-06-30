import { Request, Response } from 'express';
import { RetrieveShipmentsUseCase } from '../../application/use_cases/retrieveShipments';
import { JwtPayload } from 'jsonwebtoken';

// Extend the Express Request type
interface AuthenticatedRequest extends Request {
  user?: JwtPayload | string;
}

export class RetrieveShipmentsController {
  constructor(private retrieveShipmentsUseCase: RetrieveShipmentsUseCase) {}

  async getShipments(req: AuthenticatedRequest, res: Response): Promise<void> {
    try {
      const userUuid = req.params.userUuid;
      
      // Now TypeScript will recognize req.user
      console.log('Authenticated user:', req.user);

      const shipments = await this.retrieveShipmentsUseCase.execute(userUuid);
      res.json(shipments);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('An unknown error occurred');
      }
    }
  }
}