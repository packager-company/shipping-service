import { Cotizacion } from "../../domain/entities/cotizacion";
import { CotizacionRepository } from "../../domain/repositories/cotizacionRepository";
import { query } from "../../../database/database";

export class CotizacionRepositoryImpl implements CotizacionRepository {
    async createCotizacion(id_cotizacion: number, origin: string, destination: string, weight: number): Promise<Cotizacion> {
        const sql = 'INSERT INTO cotizacion (id_cotizacion, origin, destination, weight) VALUES (?, ?, ?, ?)';
        const result = await query(sql, [id_cotizacion, origin, destination, weight]);
        return result[0] as unknown as Cotizacion;
    }

    async getAllCotizaciones(): Promise<Cotizacion[]> {
        const sql = 'SELECT * FROM cotizacion';
        const result = await query(sql, []);
        return result[0] as Cotizacion[];
    }

    async getCotizacionById(id_cotizacion: number): Promise<Cotizacion> {
        const sql = 'SELECT * FROM cotizacion WHERE id_cotizacion = ?';
        const result = await query(sql, [id_cotizacion]);
        return result[0] as unknown as Cotizacion;
    }
}
