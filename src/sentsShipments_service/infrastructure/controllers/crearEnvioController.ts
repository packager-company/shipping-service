import { Request, Response, NextFunction } from "express";
import { CrearEnvio } from "../../application/use_cases/crearEnvio";
import { EnvioRepository } from "../repositories/EnvioRepository";
import { validationResult } from "express-validator";

const envioRepository = new EnvioRepository();
const crearEnvio = new CrearEnvio(envioRepository);

export const crearEnvioController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { user_uuid, origin, destination, weight, base_price, additional_charge, total_price, status_uuid } = req.body;

    const envio = await crearEnvio.ejecutar(
      user_uuid,
      origin,
      destination,
      weight,
      base_price,
      additional_charge,
      total_price,
      status_uuid
    );

    res.status(201).json(envio);
  } catch (error) {
    next(error);
  }
};
