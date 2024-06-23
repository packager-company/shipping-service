import { IShipmentRepository } from '../../domain/repositories/IShipmentRepository';
import { Shipment } from '../../domain/entities/shipment';
import ShipmentModel from '../../../databese/model/ShipmentModel';


export class SequelizeShipmentRepository implements IShipmentRepository {
  async getShipmentsByUser(userUuid: string): Promise<Shipment[]> {
    const shipmentModels = await ShipmentModel.findAll({ where: { user_uuid: userUuid } });
    return shipmentModels.map(model => new Shipment(
      model.uuid,
      model.user_uuid,
      model.origin,
      model.destination,
      model.weight,
      model.base_price,
      model.additional_charge,
      model.total_price,
      model.status
    ));
  }
}
