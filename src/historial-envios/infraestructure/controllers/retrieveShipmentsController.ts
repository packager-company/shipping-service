import { Request, Response } from 'express';
import { RetrieveShipmentsUseCase } from '../../application/use_cases/retrieveShipments';

export class RetrieveShipmentsController {
  constructor(private retrieveShipmentsUseCase: RetrieveShipmentsUseCase) {}

  async getShipments(req: Request, res: Response): Promise<void> {
    try {
      const userUuid = req.params.userUuid;
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
