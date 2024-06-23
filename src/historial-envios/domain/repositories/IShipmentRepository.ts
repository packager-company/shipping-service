import { Shipment } from '../entities/shipment';

export interface IShipmentRepository {
  getShipmentsByUser(userUuid: string): Promise<Shipment[]>;
}
