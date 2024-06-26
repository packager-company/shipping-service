import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { Envio } from '../../domain/entities/envio';

export const crearEnvioController = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      user_uuid,
      origin,
      destination,
      weight,
      base_price,
      additional_charge,
      total_price,
      status_uuid
    } = req.body;

    const originZip = origin.substring(0, 5);
    const destinationZip = destination.substring(0, 5);

    const envio = await Envio.create({
      user_uuid,
      origin: originZip,
      destination: destinationZip,
      weight,
      base_price,
      additional_charge,
      total_price,
      status_uuid
    });

    // Enviar respuesta exitosa
    res.status(201).json(envio);
  } catch (error) {
    console.error('Error in crearEnvioController:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
