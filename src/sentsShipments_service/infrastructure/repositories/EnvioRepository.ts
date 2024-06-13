import { IEnvioRepository } from "../../domain/repositories/IEnvioRepository";
import { Envio } from "../../domain/entities/envio";
import { query } from "../../../database/database";

export class EnvioRepository implements IEnvioRepository {
  async crear(envio: Envio): Promise<Envio> {
    const sql = `
      INSERT INTO shipments (uuid, user_uuid, origin, destination, weight, base_price, additional_charge, total_price, status_uuid)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [
      envio.uuid,
      envio.user_uuid,
      envio.origin,
      envio.destination,
      envio.weight,
      envio.base_price,
      envio.additional_charge,
      envio.total_price,
      envio.status_uuid
    ];

    await query(sql, params);

    return envio;
  }
}
