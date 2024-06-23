import { IShipmentRepository } from '../../domain/repositories/IShipmentRepository';
import { Shipment } from '../../domain/entities/shipment';

export class RetrieveShipmentsUseCase {
  constructor(private shipmentRepository: IShipmentRepository) {}

  async execute(userUuid: string): Promise<Shipment[]> {
    return this.shipmentRepository.getShipmentsByUser(userUuid);
  }
}
