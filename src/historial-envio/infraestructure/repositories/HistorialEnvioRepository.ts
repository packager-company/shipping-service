
import { HistorialEnvio } from "../../domain/entities/HistorialEnvio";
import { query } from "../../../database/database"
import { IHistorialEnvioRepository } from "../../domain/repositories/IHistorialEnvioRepository";

export class HistorialEnvioRepository implements IHistorialEnvioRepository {
    async listar(): Promise<HistorialEnvio[]> {
        const sql = `
            SELECT numeroEnvio, fechaEnvio, direccionOrigen, direccionDestino, pesoPaquete, tipoEnvio, estadoEnvio, costoTotal
            FROM shipment_history
        `;
        
        const [rows] = await query(sql, []);
        
        return rows.map((row: any) => new HistorialEnvio(
            row.numeroEnvio,
            row.fechaEnvio,
            row.direccionOrigen,
            row.direccionDestino,
            row.pesoPaquete,
            row.tipoEnvio,
            row.estadoEnvio,
            row.costoTotal
        ));
    }
}
