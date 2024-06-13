// src/domain/repositories/IHistorialEnvioRepository.ts
import { HistorialEnvio } from "../entities/HistorialEnvio";

export interface IHistorialEnvioRepository {
    listar(): Promise<HistorialEnvio[]>;
}
