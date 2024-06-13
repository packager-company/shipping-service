import { Envio } from "../../domain/entities/envio";
import { IEnvioRepository } from "../../domain/repositories/IEnvioRepository";
import { v4 as uuidv4 } from "uuid";

export class CrearEnvio {
  constructor(private envioRepository: IEnvioRepository) {}

  async ejecutar(
    user_uuid: string,
    origin: string,
    destination: string,
    weight: number,
    base_price: number,
    additional_charge: number,
    total_price: number,
    status_uuid: string
  ): Promise<Envio> {
    const envio = new Envio({
      uuid: uuidv4(),
      user_uuid,
      origin,
      destination,
      weight,
      base_price,
      additional_charge,
      total_price,
      status_uuid
    });

    return this.envioRepository.crear(envio);
  }
}
