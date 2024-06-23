import { RetrieveShipmentsUseCase } from "./historial-envios/application/use_cases/retrieveShipments";
import { RetrieveShipmentsController } from "./historial-envios/infraestructure/controllers/retrieveShipmentsController";
import { SequelizeShipmentRepository } from "./historial-envios/infraestructure/repositories/ShipmentRepository";


const shipmentRepository = new SequelizeShipmentRepository();

const retrieveShipmentsUseCase = new RetrieveShipmentsUseCase(shipmentRepository);

const retrieveShipmentsController = new RetrieveShipmentsController(retrieveShipmentsUseCase);

export {
  retrieveShipmentsController,
};
