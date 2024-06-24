import { Cotizacion } from "../../domain/entities/cotizacion";
import { CotizacionRepository } from "../../domain/repositories/cotizacionRepository";
import { sequelize } from "../../../database/database";

export class CotizacionRepositoryImpl implements CotizacionRepository {

    async createCotizacion(id_cotizacion: number, origin: string, destination: string, weight: number): Promise<Cotizacion> {
        const result = await sequelize.query('INSERT INTO cotizacion (id_cotizacion, origin, destination, weight) VALUES (?, ?, ?, ?)', { replacements: [id_cotizacion, origin, destination, weight] });
        return result as any as Cotizacion;
    }

    async getAllCotizaciones(): Promise<Cotizacion[]> {
        const result = await sequelize.query('SELECT * FROM cotizacion');
        return result[0] as any as Cotizacion[];
    }

    async getCotizacionById(id_cotizacion: number): Promise<Cotizacion> {
        const result = await sequelize.query('SELECT * FROM cotizacion WHERE id_cotizacion = ?', { replacements: [id_cotizacion] });
        return result[0] as any as Cotizacion;
    }
    
}
