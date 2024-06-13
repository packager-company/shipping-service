import { Envio } from "../entities/envio";

export interface IEnvioRepository {
  crear(envio: Envio): Promise<Envio>;
}
