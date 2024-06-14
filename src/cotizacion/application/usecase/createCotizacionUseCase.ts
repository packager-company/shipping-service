import { Cotizacion } from "../../domain/entities/cotizacion";
import { CotizacionRepository } from "../../domain/repositories/cotizacionRepository";

export class CreateCotizacionUseCase {
    constructor(private repository: CotizacionRepository) {}

    async addCotizacion(id_cotizacion: number, origin: string, destination: string, weight: number): Promise<Cotizacion> {
        return await this.repository.createCotizacion(id_cotizacion, origin, destination, weight);
    }

    async getAllCotizaciones(): Promise<Cotizacion[]> {
        return await this.repository.getAllCotizaciones();
    }

    async getCotizacionById(id_cotizacion: number): Promise<Cotizacion> {
        return await this.repository.getCotizacionById(id_cotizacion);
    }
}