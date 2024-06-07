import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Ruta de ejemplo en Express y TypeScript');
});

export default router;
