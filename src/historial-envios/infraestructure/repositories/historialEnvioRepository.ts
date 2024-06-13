import { IHistorialEnvioRepository } from "../../domain/repositories/IHistorialEnvioRepository";
import { HistorialEnvioModel } from "../../../database/models/HistorialEnvioModel";

export class HistorialEnvioRepository implements IHistorialEnvioRepository {
  async listar(): Promise<HistorialEnvio[]> {
    const historialEnvios = await HistorialEnvioModel.findAll();
    
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
