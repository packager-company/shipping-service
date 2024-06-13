// src/infrastructure/controllers/listarHistorialEnvioController.ts
import { Request, Response, NextFunction } from "express";
import { ListarHistorialEnvio } from "../../application/use_cases/ListarHistorialEnvio";
import { HistorialEnvioRepository } from "../repositories/HistorialEnvioRepository";

const historialEnvioRepository = new HistorialEnvioRepository();
const listarHistorialEnvio = new ListarHistorialEnvio(historialEnvioRepository);

export const listarHistorialEnvioController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const historial = await listarHistorialEnvio.ejecutar();
        res.status(200).json(historial);
    } catch (error) {
        next(error);
    }
};
