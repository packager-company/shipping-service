import { Response, Request, NextFunction } from "express";
import { actualizarEnvio } from "../../dependencies";

export const actualizarEnvioController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { uuid } = req.params;
  const {
    user_uuid,
    origin,
    destination,
    weight,
    base_price,
    additional_charge,
    total_price,
    status_uuid,
  } = req.body;

  try {
    actualizarEnvio.ejecutar(
      uuid,
      user_uuid,
      origin,
      destination,
      weight,
      base_price,
      additional_charge,
      total_price,
      status_uuid
    );

    res.status(200).json({
      message: "Envio actualizado",
    });
  } catch (error) {
    next(error);
  }
};
