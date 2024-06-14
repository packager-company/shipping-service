import { Cotizacion } from "../../domain/entities/cotizacion";
import { CotizacionRepository } from "../../domain/repositories/cotizacionRepository";
import { query } from "../../../database/bd";

export class CotizacionRepositoryImpl implements CotizacionRepository {
    async createCotizacion(id_cotizacion: number, origin: string, destination: string, weight: number): Promise<Cotizacion> {
        const result = await query('INSERT INTO cotizacion (id_cotizacion, origin, destination, weight) VALUES ($1, $2, $3, $4) RETURNING *', [id_cotizacion, origin, destination, weight]);
        return result.rows[0];
    }

    async getAllCotizaciones(): Promise<Cotizacion[]> {
        const result = await query('SELECT * FROM cotizacion');
        return result.rows;
    }

    async getCotizacionById(id_cotizacion: number): Promise<Cotizacion> {
        const result = await query('SELECT * FROM cotizacion WHERE id_cotizacion = $1', [id_cotizacion]);
        return result.rows[0];
    }
}
