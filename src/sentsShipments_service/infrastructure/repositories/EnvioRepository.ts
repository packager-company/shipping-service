import { IEnvioRepository } from "../../domain/repositories/IEnvioRepository";
import { Envio } from "../../domain/entities/envio";
import { pool, query } from "../../../database/database";

export class EnvioRepository implements IEnvioRepository {
  async actualizar(envio: Envio): Promise<Envio> {
    const sql = `
      UPDATE shipments
      SET origin = ?, destination = ?, weight = ?, base_price = ?, additional_charge = ?, total_price = ?, status_uuid = ?
      WHERE uuid = ?
    `;
    const params = [
      envio.origin,
      envio.destination,
      envio.weight,
      envio.base_price,
      envio.additional_charge,
      envio.total_price,
      envio.status_uuid,
      envio.uuid,
    ];

    await query(sql, params);

    return envio;
  }
  async obtenerPorUuid(uuid: string): Promise<Envio | null> {
    const sql = `
      SELECT *
      FROM shipments
      WHERE uuid = ?
    `;
    const params = [uuid];

    const [rows] = await query(sql, params);

    if (rows.length === 0) {
      return null;
    }

    const envio = new Envio(
      rows[0].uuid,
      rows[0].user_uuid,
      rows[0].origin,
      rows[0].destination,
      rows[0].weight,
      rows[0].base_price,
      rows[0].additional_charge,
      rows[0].total_price,
      rows[0].status_uuid
    );

    return envio;
  }
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
      envio.status_uuid,
    ];

    await query(sql, params);

    return envio;
  }
}
