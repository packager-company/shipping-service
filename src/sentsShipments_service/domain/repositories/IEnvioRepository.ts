import { Envio } from "../entities/envio";

export interface IEnvioRepository {
  crear(envio: Envio): Promise<Envio>;
  actualizar(envio: Envio): Promise<Envio>;
  obtenerPorUuid(uuid: string): Promise<Envio | null>;
}
