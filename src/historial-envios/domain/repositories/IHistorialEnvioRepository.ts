import { HistorialEnvio } from "../entities/HistorialEnvio";

export interface IHistorialEnvioRepository {
  listar(): Promise<HistorialEnvio[]>;
}
