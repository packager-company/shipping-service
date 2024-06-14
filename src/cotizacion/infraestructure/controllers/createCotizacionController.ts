import { Request, Response } from "express";
import { CreateCotizacionUseCase } from "../../application/createCotizacionUseCase";
import { Cotizacion } from "../../domain/cotizacion";

export class CreateCotizacionController {
    constructor(private createCotizacionUseCase: CreateCotizacionUseCase) {}

    async run(req: Request, res: Response) {
        const { id_cotizacion, origin, destination, weight } = req.body;
        const cotizacion = await this.createCotizacionUseCase.addCotizacion(id_cotizacion, origin, destination, weight);
        res.json(cotizacion);
    }
}