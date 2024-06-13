import { IHistorialEnvioRepository } from "../../domain/repositories/IHistorialEnvioRepository";
import { HistorialEnvio } from "../../domain/entities/HistorialEnvio";
import { QueryTypes, Sequelize } from 'sequelize';
import { sequelize } from "../../../databese/database";

export class HistorialEnvioRepository implements IHistorialEnvioRepository {
  async listar(): Promise<HistorialEnvio[]> {
    const historialEnvios = await sequelize.query(
      'SELECT * FROM historial_envios', 
      { type: QueryTypes.SELECT }
    );

    return historialEnvios.map((row: any) => new HistorialEnvio(
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
