import { IEnvioRepository } from "../../domain/repositories/IEnvioRepository";
import { Envio } from "../../domain/entities/envio";

export class EnvioRepository implements IEnvioRepository {
  async crear(envio: Envio): Promise<Envio> {
    return await Envio.create({
      uuid: envio.uuid,
      user_uuid: envio.user_uuid,
      origin: envio.origin,
      destination: envio.destination,
      weight: envio.weight,
      base_price: envio.base_price,
      additional_charge: envio.additional_charge,
      total_price: envio.total_price,
      status_uuid: envio.status_uuid,
    });
  }
}
