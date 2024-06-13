import { HistorialEnvio } from "../../domain/entities/HistorialEnvio";
import { IHistorialEnvioRepository } from "../../domain/repositories/IHistorialEnvioRepository";



export class ListarHistorialEnvios {
  constructor(private historialEnvioRepository: IHistorialEnvioRepository) {}

  async execute(): Promise<HistorialEnvio[]> {
    return this.historialEnvioRepository.listar();
  }
}
