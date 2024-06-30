import { Envio } from "../../domain/entities/envio";
import { IEnvioRepository } from "../../domain/repositories/IEnvioRepository";

export class ActualizarEnvio {
  constructor(private envioRepository: IEnvioRepository) {}

  async ejecutar(
    uuid: string,
    user_uuid: string,
    origin: string | undefined,
    destination: string | undefined,
    weight: number | undefined,
    base_price: number | undefined,
    additional_charge: number| undefined,
    total_price: number| undefined,
    status_uuid: string | undefined,
  ): Promise<Envio> {
    const envio = await this.envioRepository.obtenerPorUuid(uuid);

    if (!envio) {
      throw new Error("Envio no encontrado");
    }

    const updatedEnvio = new Envio(
      uuid,
      user_uuid,
      origin || envio.origin,
      destination || envio.destination,
      weight || envio.weight,
      base_price || envio.base_price,
      additional_charge || envio.additional_charge,
      total_price || envio.total_price,
      status_uuid || envio.status_uuid,
    );

    return await this.envioRepository.actualizar(updatedEnvio);
  }
}
