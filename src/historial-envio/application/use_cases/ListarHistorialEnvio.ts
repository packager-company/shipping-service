
import { HistorialEnvio } from "../../domain/entities/HistorialEnvio";
import { IHistorialEnvioRepository } from "../../domain/repositories/IHistorialEnvioRepository";

export class ListarHistorialEnvio {
    constructor(private historialEnvioRepository: IHistorialEnvioRepository) {}

    async ejecutar(): Promise<HistorialEnvio[]> {
        return this.historialEnvioRepository.listar();
    }
}
